"use client";

import Box from "@mui/material/Box";
import { AlertTicker } from "@/shared/ui/alert-ticker";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";

export default function LiveFeedSection() {
  return (
    <Box
      component="section"
      sx={{
        borderRadius: CARD_BORDER_RADIUS_SX,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "#D32F2F4D",
        bgcolor: "#FFF4F4",
        boxShadow: "none",
      }}
    >
      <AlertTicker />
    </Box>
  );
}
