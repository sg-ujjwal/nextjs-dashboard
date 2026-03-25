"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ChevronLeft } from "lucide-react";

export type HeaderBrandBlockProps = {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
};

export const HeaderBrandBlock = ({
  sidebarCollapsed,
  onToggleSidebar,
}: HeaderBrandBlockProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
      minWidth: 0,
      pr: 2,
      mr: 2,
      borderInlineEnd: "1.5px solid rgba(0, 0, 0, 0.08)",
    }}
  >
    <Box
      component="span"
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        gap: 3,
      }}
      aria-hidden
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/assets/images/mainLogo.png"
          alt=""
          width={186}
          height={46}
          priority
          style={{ width: "186px", height: "46px", objectFit: "contain" }}
        />
      </Box>
      <Box>
        <IconButton
          onClick={onToggleSidebar}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          size="small"
          sx={{
            color: "custom.headerBar",
            bgcolor: "#D9D9D9",
            borderRadius: "4px",
            width: 16,
            height: 16,
            padding: "0",
            boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.92)",
              color: "custom.headerBar",
            },
          }}
        >
          <ChevronLeft
            size={12}
            style={{
              transform: sidebarCollapsed ? "rotate(180deg)" : undefined,
              transition: "transform 0.25s ease",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  </Box>
);
