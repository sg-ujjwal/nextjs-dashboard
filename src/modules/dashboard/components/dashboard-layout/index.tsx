"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { Sparkles } from "lucide-react";
import { Header } from "@/modules/dashboard/components/header";
import { Sidebar } from "@/modules/dashboard/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "custom.bgPrimary",
        overflow: "hidden",
      }}
    >
      <Header
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed((c) => !c)}
      />
      <Box sx={{ display: "flex", flex: 1, minHeight: 0, overflow: "hidden" }}>
        <Sidebar collapsed={sidebarCollapsed} />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            component="main"
            sx={{ flex: 1, overflowY: "auto", bgcolor: "custom.bgPrimary" }}
          >
            {children}
          </Box>
          <Fab
            color="primary"
            aria-label="Add or quick action"
            sx={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 50,
              background:
                "linear-gradient(98.66deg, #2F446A -14.67%, #6486C4 83.98%)",
              width: 56,
              height: 56,
              boxShadow: 3,
              "&:hover": { bgcolor: "custom.fab", opacity: 0.92 },
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1818 11.6364L28 7.63636L32 5.81818L28 4L26.1818 0L24.3636 4L20.3636 5.81818L24.3636 7.63636L26.1818 11.6364ZM15.2727 12.3636L11.6364 4.36364L8 12.3636L0 16L8 19.6364L11.6364 27.6364L15.2727 19.6364L23.2727 16L15.2727 12.3636ZM26.1818 20.3636L24.3636 24.3636L20.3636 26.1818L24.3636 28L26.1818 32L28 28L32 26.1818L28 24.3636L26.1818 20.3636Z"
                fill="#EDF3FC"
              />
            </svg>
          </Fab>
        </Box>
      </Box>
    </Box>
  );
}
