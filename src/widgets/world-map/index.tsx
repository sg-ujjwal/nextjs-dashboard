"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import type { MapMarker } from "@/shared/types";
import { getCountryFlag } from "@/shared/lib/country-flags";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";

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

const RISK_COLORS: Record<MapMarker["riskLevel"], string> = {
  low: "#027A48",
  medium: "#f59e0b",
  high: "#ef4444",
  critical: "#dc2626",
};

const DEPLOYMENT_COLORS: Record<string, string> = {
  deployed: "#027A48",
  in_progress: "#f59e0b",
  pending: "#1677ff",
};

export function WorldMap({
  markers,
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
      // Stale async completion (e.g. React Strict Mode) or remount race — never call L.map twice on one div
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
        const color = marker.deploymentStatus
          ? (DEPLOYMENT_COLORS[marker.deploymentStatus] ??
            RISK_COLORS[marker.riskLevel])
          : RISK_COLORS[marker.riskLevel];
        const radius =
          marker.riskLevel === "critical"
            ? 10
            : marker.riskLevel === "high"
              ? 8
              : 6;

        const circle = L.circleMarker([marker.lat, marker.lng], {
          radius,
          fillColor: color,
          color,
          weight: 2,
          opacity: 0.9,
          fillOpacity: 0.6,
        });

        circle.bindTooltip(buildTooltipHtml(marker), {
          direction: "top",
          permanent: false,
          className: "map-marker-tooltip",
          offset: [0, -12],
        });

        circle.on("click", () => onMarkerClick(marker));
        circle.on("mouseover", () => {
          onMarkerHover(marker);
          circle.setStyle({ fillOpacity: 0.9, weight: 3 });
        });
        circle.on("mouseout", () => {
          onMarkerHover(null);
          circle.setStyle({ fillOpacity: 0.6, weight: 2 });
        });

        circle.addTo(mapInstanceRef.current);
        markersRef.current.push(circle);
      });
    };

    initMarkers();
  }, [isReady, markers, onMarkerClick, onMarkerHover]);

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: CARD_BORDER_RADIUS_SX,
        overflow: "hidden",
        height: "100%",
        minHeight: 320,
      }}
    >
      <Box
        ref={mapRef}
        sx={{
          height: "100%",
          width: "100%",
          minHeight: 320,
          bgcolor: "custom.bgPrimary",
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
            bgcolor: "background.paper",
            borderRadius: CARD_BORDER_RADIUS_SX,
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
