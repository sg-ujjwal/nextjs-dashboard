"use client";

import Box from "@mui/material/Box";
import { HeaderBrandBlock } from "./header-brand-block";
import { HeaderSearchField } from "./header-search-field";
import { HeaderTrailingActions } from "./header-trailing-actions";

export type HeaderProps = {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
};

export const Header = ({ sidebarCollapsed, onToggleSidebar }: HeaderProps) => (
  <Box
    component="header"
    sx={{
      height: 78,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: 2.5,
      flexShrink: 0,
      borderBottom: "1px solid",
      bgcolor: "custom.headerBar",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 0, minWidth: 0 }}>
      <HeaderBrandBlock
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={onToggleSidebar}
      />
      <HeaderSearchField />
    </Box>
    <HeaderTrailingActions />
  </Box>
);
