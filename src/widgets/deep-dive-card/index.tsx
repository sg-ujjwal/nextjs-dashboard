"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  Globe,
  BarChart2,
  Network,
  FileText,
  ChevronRight,
} from "lucide-react";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";

interface DeepDiveStat {
  label: string;
  value: string;
  valueColor: string;
}

interface DeepDiveCardData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accentColor: string;
  stats: DeepDiveStat[];
  progressValue: number;
  cta: string;
}

interface DeepDiveCardProps {
  card: DeepDiveCardData;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  "bar-chart": BarChart2,
  network: Network,
  file: FileText,
};

export function DeepDiveCard({ card, index }: DeepDiveCardProps) {
  const Icon = iconMap[card.icon] ?? Globe;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "#fff",
        borderRadius: CARD_BORDER_RADIUS_SX,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        animationDelay: `${index * 100}ms`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        background: `linear-gradient(210deg, ${card.accentColor}14 0%, transparent 40%), #ffffff`,
        transition: "all 0.5s ease-in-out",
        transform: "translateY(0px) !important",
        "&:hover": {
          transform: "translateY(-4px) !important",
          boxShadow:
            "0 10px 20px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.1) !important",
        },
      }}
    >
      <Box
        sx={{
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "text.primary",
                lineHeight: 1.25,
              }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{ fontSize: "0.75rem", color: "text.secondary", mt: 0.5 }}
            >
              {card.subtitle}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: CARD_BORDER_RADIUS_SX,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              bgcolor: `#ffffff`,
              color: card.accentColor,
            }}
          >
            <Icon size={18} />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            bgcolor: "#00000014",
          }}
        ></Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {card.stats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.875rem",
              }}
            >
              <Typography sx={{ color: "text.secondary" }}>
                {stat.label}
              </Typography>
              <Typography sx={{ fontWeight: 700, color: stat.valueColor }}>
                {stat.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            height: 6,
            bgcolor: "custom.border",
            borderRadius: 9999,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              borderRadius: 9999,
              transition: "width 0.3s",
              width: `${card.progressValue}%`,
              bgcolor: card.accentColor,
            }}
          />
        </Box>

        <Link
          href="#"
          underline="hover"
          sx={{
            mt: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.25,
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#2F446A",
          }}
        >
          {card.cta}
          <ChevronRight size={14} />
        </Link>
      </Box>
    </Box>
  );
}
