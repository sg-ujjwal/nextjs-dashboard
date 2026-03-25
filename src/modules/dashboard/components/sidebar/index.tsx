"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TrendingUp, Cloud } from "lucide-react";
import {
  CONTROL_ROOM,
  COUNTRY_ICON,
  DEPLOYMENT_ICON,
  PROPOSAL_ICON,
  INTELLIGENCE_ICON,
} from "@/core/theme/tokens/svg.Contant";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: number;
  section: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "dashboard",
    label: "Control Room",
    icon: CONTROL_ROOM,
    section: "STRATEGIC",
  },
  {
    id: "countries",
    label: "Countries",
    icon: COUNTRY_ICON,
    section: "STRATEGIC",
  },
  {
    id: "deployment",
    label: "Deployment",
    icon: DEPLOYMENT_ICON,
    section: "ASSESSMENT",
  },
  {
    id: "proposals",
    label: "Proposals",
    icon: PROPOSAL_ICON,
    section: "ASSESSMENT",
  },
  {
    id: "intelligence",
    label: "Intelligence",
    icon: INTELLIGENCE_ICON,
    section: "ASSESSMENT",
  },
];

const SECTIONS = ["STRATEGIC", "ASSESSMENT"];

interface SidebarProps {
  collapsed: boolean;
  onNavigate?: () => void;
}

export function Sidebar({ collapsed, onNavigate }: SidebarProps) {
  const [active, setActive] = useState("dashboard");

  return (
    <Box
      component="aside"
      className="no-scrollbar"
      sx={{
        display: "flex",
        flexDirection: "column",
        transition: "width 0.28s ease",
        height: "100%",
        flexShrink: 0,
        bgcolor: "#E9EDF4",
        borderRight: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.08)",
        width: collapsed ? 72 : 256,
        overflowY: "auto",
        boxShadow: "0px 2px 1px -1px #00000033",
      }}
    >
      <Box
        component="nav"
        sx={{ flex: 1, py: 2, px: 1, overflowY: "auto" }}
        className="no-scrollbar"
      >
        {SECTIONS.map((section) => {
          const items = NAV_ITEMS.filter((n) => n.section === section);

          return (
            <Box key={section} sx={{ mb: 1 }}>
              {!collapsed && (
                <Typography
                  sx={{
                    fontSize: "0.6875rem",
                    color: "custom.sidebarSectionLabel",
                    fontWeight: 400,
                    px: 1.5,
                    mb: 1,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {section}
                </Typography>
              )}
              {items.map((item) => {
                const isActive = active === item.id;
                return (
                  <Button
                    key={item.id}
                    onClick={() => {
                      setActive(item.id);
                      onNavigate?.();
                    }}
                    title={collapsed ? item.label : undefined}
                    fullWidth
                    sx={{
                      justifyContent: collapsed ? "center" : "flex-start",
                      gap: 1.5,
                      px: collapsed ? 1 : "16px",
                      py: 1,
                      mb: 0.5,
                      minHeight: 44,
                      fontSize: "0.875rem",
                      textTransform: "none",
                      borderRadius: "8px",
                      minWidth: "40px",
                      position: "relative",
                      color: isActive
                        ? "custom.sidebarTextActive"
                        : "custom.sidebarText",
                      bgcolor: isActive
                        ? "custom.sidebarActive"
                        : "transparent",
                      border: "none",
                      "&:hover": {
                        bgcolor: isActive
                          ? "custom.sidebarActive"
                          : "custom.sidebarHover",
                        color: isActive
                          ? "custom.sidebarTextActive"
                          : "custom.sidebarText",
                      },
                    }}
                  >
                    <item.icon
                      size={20}
                      style={{ flexShrink: 0, opacity: isActive ? 1 : 0.9 }}
                    />
                    {!collapsed && (
                      <>
                        <Typography
                          component="span"
                          sx={{
                            flex: 1,
                            textAlign: "left",
                            fontSize: "inherit",
                            fontWeight: isActive ? 600 : 500,
                          }}
                        >
                          {item.label}
                        </Typography>
                        {item.badge && (
                          <Box
                            component="span"
                            sx={{
                              bgcolor: "error.main",
                              color: "#fff",
                              fontSize: "0.6875rem",
                              minWidth: 20,
                              height: 20,
                              px: 0.5,
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            {item.badge}
                          </Box>
                        )}
                      </>
                    )}
                    {collapsed && item.badge && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 6,
                          right: 8,
                          width: 8,
                          height: 8,
                          bgcolor: "error.main",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </Button>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
