import Box from "@mui/material/Box";
import type { RiskLevel } from "@/shared/types";

interface BadgeProps {
  level: RiskLevel | "info";
  label?: string;
}

const VARIANTS: Record<
  BadgeProps["level"],
  { bg: string; color: string; border: string; dot: string; pulse?: boolean }
> = {
  low: {
    bg: "rgba(34, 197, 94, 0.15)",
    color: "#027A48",
    border: "rgba(34, 197, 94, 0.3)",
    dot: "#027A48",
  },
  medium: {
    bg: "rgba(245, 158, 11, 0.15)",
    color: "#d97706",
    border: "rgba(245, 158, 11, 0.3)",
    dot: "#f59e0b",
  },
  high: {
    bg: "rgba(239, 68, 68, 0.15)",
    color: "#dc2626",
    border: "rgba(239, 68, 68, 0.3)",
    dot: "#ef4444",
  },
  critical: {
    bg: "#fef2f2",
    color: "#dc2626",
    border: "#fecaca",
    dot: "#dc2626",
    pulse: true,
  },
  info: {
    bg: "rgba(59, 130, 246, 0.15)",
    color: "#2563eb",
    border: "rgba(59, 130, 246, 0.3)",
    dot: "#3b82f6",
  },
};

export function Badge({ level, label }: BadgeProps) {
  const v = VARIANTS[level];
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        fontSize: "0.75rem",
        fontWeight: 500,
        px: 1,
        py: 0.25,
        borderRadius: 9999,
        border: "1px solid",
        borderColor: v.border,
        bgcolor: v.bg,
        color: v.color,
      }}
    >
      <Box
        component="span"
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          bgcolor: v.dot,
          ...(v.pulse
            ? { animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }
            : {}),
        }}
      />
      {label ?? level.charAt(0).toUpperCase() + level.slice(1)}
    </Box>
  );
}
