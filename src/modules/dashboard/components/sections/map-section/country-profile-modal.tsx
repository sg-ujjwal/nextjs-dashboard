"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ChevronRight, X, Info } from "lucide-react";
import { getCountryFlag } from "@/shared/lib/country-flags";
import type { MapMarker } from "@/shared/types";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";
import {
  getDefaultIntelligence,
  parseActiveDeployment,
} from "./map-marker-helpers";

export type CountryProfileModalProps = {
  marker: MapMarker;
  onClose: () => void;
};

export const CountryProfileModal = ({
  marker,
  onClose,
}: CountryProfileModalProps) => {
  const [pos, setPos] = useState({ top: 16, left: 16 });
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current?.parentElement) {
        const rect = containerRef.current.parentElement.getBoundingClientRect();
        setPos({ top: rect.top + 16, left: rect.left + 16 });
        setReady(true);
      }
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const flag = getCountryFlag(marker.id);
  const deployment = parseActiveDeployment(marker.activeDeployment);
  const intelligence = getDefaultIntelligence(marker.country);
  const statusLabel =
    marker.deploymentStatus === "deployed"
      ? "Active"
      : marker.deploymentStatus === "in_progress"
        ? "In Progress"
        : "Pending";
  const isActive = marker.deploymentStatus === "deployed";

  if (!ready) {
    return (
      <Box
        ref={containerRef}
        sx={{
          position: "fixed",
          visibility: "hidden",
          pointerEvents: "none",
        }}
      />
    );
  }

  return (
    <Box
      ref={containerRef}
      role="dialog"
      aria-label={`${marker.country} profile`}
      sx={{
        position: "absolute",
        top: "5%",
        left: "5%",
        width: 340,
        bgcolor: "#E9EDF4",
        borderRadius: CARD_BORDER_RADIUS_SX,
        boxShadow:
          "0px 7px 8px -4px #00000026, 0px 12px 17px 2px #00000014, 0px 5px 22px 4px #00000014",
        border: "1px solid",
        borderColor: "#00000014",
        p: 2,
        zIndex: 1000,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              minWidth: 0,
            }}
          >
            <Box
              aria-hidden
              sx={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                bgcolor: "background.paper",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: ".70rem",
                flexShrink: 0,
                border: "1px solid",
                borderColor: "custom.border",
                boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
              }}
            >
              {flag}
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "text.primary",
                  }}
                >
                  {marker.country}
                </Typography>
                {isActive && (
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "13px",
                      px: 1.5,
                      py: 0.3,
                      borderRadius: 9999,
                      fontWeight: 400,
                      flexShrink: 0,
                      bgcolor: "#EDF7ED",
                      color: "#027A48",
                    }}
                  >
                    {statusLabel}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>

          <Button
            onClick={onClose}
            aria-label="Close"
            sx={{
              minWidth: 0,
              p: 0,
              borderRadius: CARD_BORDER_RADIUS_SX,
              color: "text.secondary",
              "&:hover": {
                color: "text.primary",
              },
            }}
          >
            <X size={18} />
          </Button>
        </Box>
        <Typography
          sx={{
            fontSize: "0.75rem",
            color: "text.secondary",
            mt: 0.4,
            fontWeight: 400,
          }}
        >
          {marker.region}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
          mb: 2,
        }}
      >
        {[
          {
            k: "Water Scarcity",
            v: `${marker.waterScarcity ?? 0}%`,
            vColor: (marker.waterScarcity ?? 0) >= 60 ? "#dc2626" : "#1e293b",
          },
          {
            k: "Capital Deployed",
            v: `$${marker.capitalDeployed ?? 0}M`,
            vColor: "#1e293b",
          },
          {
            k: "Impact Score",
            v: `${marker.impactScore ?? 0}%`,
            vColor: "#1e293b",
          },
          {
            k: "Infrastructure",
            v: `${marker.infrastructure ?? 0}/100`,
            vColor: "#1e293b",
          },
        ].map((cell) => (
          <Box
            key={cell.k}
            sx={{
              bgcolor: "#F4F6F9",
              borderRadius: CARD_BORDER_RADIUS_SX,
              p: 1.5,
              border: "1px solid",
              borderColor: "custom.border",
              boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "#00000061",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                mb: 0.5,
              }}
            >
              {cell.k}
            </Typography>
            <Typography
              sx={{ fontSize: "0.875rem", fontWeight: 400, color: cell.vColor }}
            >
              {cell.v}
            </Typography>
          </Box>
        ))}
      </Box>

      {deployment && (
        <>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "1px",
              backgroundColor: "#00000014",
            }}
          />
          <Box
            sx={{
              mb: 2,
              pt: 1.5,
              borderTop: "1px solid",
              borderColor: "custom.border",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "#00000061",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                mb: 1,
              }}
            >
              Active Deployments
            </Typography>
            <Box
              sx={{
                bgcolor: "#F4F6F9",
                borderRadius: CARD_BORDER_RADIUS_SX,
                py: 0.5,
                px: 1,
                border: "1px solid",
                borderColor: "custom.border",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#014361",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {deployment.title}
              </Typography>
              <Button
                type="button"
                size="small"
                sx={{
                  flexShrink: 0,
                  borderRadius: 9999,
                  fontSize: "14px",
                  fontWeight: 400,
                  textTransform: "none",
                  px: 1.5,
                  py: 0.3,
                  bgcolor: "#E5F6FD",
                  color: "#0288D1",
                  minWidth: 0,
                }}
              >
                {deployment.action}
              </Button>
            </Box>
          </Box>
        </>
      )}

      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "1px",
          backgroundColor: "#00000014",
        }}
      />

      {intelligence.length > 0 && (
        <Box
          sx={{
            mb: 3,
            pt: 1.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: "#00000061",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              mb: 1,
            }}
          >
            Intelligence ({intelligence.length})
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
            {intelligence.map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "12px",
                }}
              >
                <Info
                  size={16}
                  style={{ flexShrink: 0, marginTop: 2, color: "#1677ff" }}
                />
                <Typography
                  component="span"
                  sx={{
                    fontSize: "12px",
                    color: "#014361",
                    fontWeight: 400,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      <Button
        fullWidth
        endIcon={<ChevronRight size={16} />}
        sx={{
          py: 0.5,
          borderRadius: "40px",
          textTransform: "none",
          fontSize: "0.875rem",
          fontWeight: 400,
          bgcolor: "#2F446A",
          color: "#fff",
          "&:hover": { bgcolor: "#2F446A", opacity: 0.9 },
        }}
      >
        View Full Profile
      </Button>
    </Box>
  );
};
