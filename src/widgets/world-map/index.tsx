"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import type { MapMarker } from "@/shared/types";
import { getCountryFlag } from "@/shared/lib/country-flags";
interface WorldMapProps {
  markers: MapMarker[];
  selectedMarker: MapMarker | null;
  onMarkerClick: (marker: MapMarker | null) => void;
  onMarkerHover: (marker: MapMarker | null) => void;
}

const buildTooltipHtml = (marker: MapMarker): string => {
  const flag = getCountryFlag(marker.id);
  const isActive = marker.deploymentStatus === "deployed";
  const waterScarcity = marker.waterScarcity ?? 0;
  const impactScore = marker.impactScore ?? marker.metrics.stability;
  const capital = (marker.capitalDeployed ?? 0).toFixed(1);
  const deployments = marker.activeDeployment
    ? 1
    : (marker.activeOperations ?? 0);
  return `
    <div class="map-hover-tooltip">
      <div class="map-hover-tooltip__header">
        <span class="map-hover-tooltip__flag">${flag}</span>
        <span class="map-hover-tooltip__country">${marker.country}</span>
        ${isActive ? '<span class="map-hover-tooltip__status"></span>' : ""}
      </div>
      <div class="map-hover-tooltip__grid">
        <div><span class="map-hover-tooltip__label">Water Scarcity</span><span class="map-hover-tooltip__value">${waterScarcity}%</span></div>
        <div><span class="map-hover-tooltip__label">Impact Score</span><span class="map-hover-tooltip__value">${impactScore}%</span></div>
        <div><span class="map-hover-tooltip__label">Capital</span><span class="map-hover-tooltip__value">$${capital}M</span></div>
        <div><span class="map-hover-tooltip__label">Deployments</span><span class="map-hover-tooltip__value">${deployments}</span></div>
      </div>
    </div>
  `;
};

const escapeHtmlAttr = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

const markerRootFocusableAttrs = (marker: MapMarker): string => {
  const label = escapeHtmlAttr(`Open details for ${marker.country}`);
  return `tabindex="0" role="button" aria-label="${label}"`;
};

type MarkerVisual = {
  imagePath: "/high.png" | "/medium.png" | "/low.png";
  zIndex: number;
};

const MARKER_ICON_SIZE = 28;
const MARKER_ICON_ANCHOR = MARKER_ICON_SIZE / 2;
const SELECTED_POINTER_ICON_SIZE = 44;

const getMarkerVisual = (m: MapMarker): MarkerVisual => {
  if (m.deploymentStatus === "pending") {
    return {
      imagePath: "/low.png",
      zIndex: 280,
    };
  }
  switch (m.riskLevel) {
    case "low":
      return {
        imagePath: "/low.png",
        zIndex: 420,
      };
    case "medium":
      return {
        imagePath: "/medium.png",
        zIndex: 620,
      };
    case "high":
    case "critical":
      return {
        imagePath: "/high.png",
        zIndex: m.riskLevel === "critical" ? 920 : 820,
      };
    default:
      return {
        imagePath: "/low.png",
        zIndex: 420,
      };
  }
};
const buildMarkerHtml = (
  marker: MapMarker,
  isSelected: boolean,
  imagePath: MarkerVisual["imagePath"],
): string => {
  const sel = isSelected ? " world-map-marker-root--selected" : "";
  const pointer = isSelected
    ? `<img class="world-map-marker-pointer" src="/pointer.png" alt="" aria-hidden="true" style="width:${SELECTED_POINTER_ICON_SIZE}px;height:${SELECTED_POINTER_ICON_SIZE}px" />`
    : "";
  const a11y = markerRootFocusableAttrs(marker);
  return `<div class="world-map-marker-root${sel}" ${a11y} style="width:${MARKER_ICON_SIZE}px;height:${MARKER_ICON_SIZE}px">${pointer}<img class="world-map-marker-image" src="${imagePath}" alt="" aria-hidden="true" /></div>`;
};

export function WorldMap({
  markers,
  selectedMarker,
  onMarkerClick,
  onMarkerHover,
}: WorldMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!mapRef.current) return;

    let cancelled = false;

    const initMap = async () => {
      const L = (await import("leaflet")).default;
      if (cancelled) return;

      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      if (cancelled || !mapRef.current) return;

      const el = mapRef.current;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((el as any)._leaflet_id != null) return;

      const map = L.map(el, {
        center: [15, 40],
        zoom: 3,
        minZoom: 2,
        maxZoom: 8,
        zoomControl: false,
        attributionControl: false,
      });

      L.control.zoom({ position: "bottomright" }).addTo(map);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          subdomains: "abcd",
          maxZoom: 20,
        },
      ).addTo(map);

      if (cancelled) {
        map.remove();
        return;
      }

      mapInstanceRef.current = map;
      setIsReady(true);
    };

    void initMap();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      setIsReady(false);
    };
  }, []);

  useEffect(() => {
    if (!isReady || !mapInstanceRef.current) return;

    const initMarkers = async () => {
      const L = (await import("leaflet")).default;

      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      markers.forEach((marker) => {
        const isSelected = selectedMarker?.id === marker.id;
        const visual = getMarkerVisual(marker);
        const html = buildMarkerHtml(marker, isSelected, visual.imagePath);
        const icon = L.divIcon({
          className: "world-map-leaflet-divicon",
          html,
          iconSize: [MARKER_ICON_SIZE, MARKER_ICON_SIZE],
          iconAnchor: [MARKER_ICON_ANCHOR, MARKER_ICON_ANCHOR],
        });

        const leafletMarker = L.marker([marker.lat, marker.lng], {
          icon,
          zIndexOffset: visual.zIndex + (isSelected ? 140 : 0),
        });

        leafletMarker.bindTooltip(buildTooltipHtml(marker), {
          direction: "top",
          permanent: false,
          className: "map-marker-tooltip",
          offset: [0, -22],
        });

        leafletMarker.on("click", () => onMarkerClick(marker));
        leafletMarker.on("mouseover", () => {
          onMarkerHover(marker);
        });
        leafletMarker.on("mouseout", () => {
          onMarkerHover(null);
        });

        leafletMarker.addTo(mapInstanceRef.current);
        const iconEl = leafletMarker.getElement();
        const rootEl = iconEl?.querySelector(
          ".world-map-marker-root",
        ) as HTMLElement | null;
        if (rootEl) {
          const handleKeyDown = (e: KeyboardEvent): void => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              onMarkerClick(marker);
            }
          };
          rootEl.addEventListener("keydown", handleKeyDown);
        }
        markersRef.current.push(leafletMarker);
      });
    };

    void initMarkers();
  }, [isReady, markers, selectedMarker, onMarkerClick, onMarkerHover]);

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 0,
        overflow: "hidden",
        height: "100%",
        minHeight: 400,
        bgcolor: "#F8F9FA",
      }}
    >
      <Box
        ref={mapRef}
        sx={{
          height: "100%",
          width: "100%",
          minHeight: 400,
          bgcolor: "#F8F9FA",
          "& .leaflet-container": {
            bgcolor: "#F8F9FA",
            fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif",
          },
        }}
      />
      {!isReady && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#F8F9FA",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <CircularProgress size={32} sx={{ color: "primary.main" }} />
          <Typography sx={{ fontSize: "0.875rem", color: "text.disabled" }}>
            Loading map…
          </Typography>
        </Box>
      )}
    </Box>
  );
}
