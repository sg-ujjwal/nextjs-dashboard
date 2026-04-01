"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useId } from "react";
import type { ReactElement } from "react";
import { ChevronRight } from "lucide-react";
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
  progressBarBg: string;
  accentColor: string;
  stats: DeepDiveStat[];
  progressValue: number;
  cta: string;
}

interface DeepDiveCardProps {
  card: DeepDiveCardData;
  index: number;
}

type DeepDiveSvgIconProps = {
  size?: number;
};

const GeographicImpactDistributionIcon = ({
  size = 18,
}: DeepDiveSvgIconProps): ReactElement => {
  const maskId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <mask
        id={maskId}
        style={{ maskType: "alpha" } as never}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          d="M8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3625 2 11.9875C2 10.6125 2.2625 9.32083 2.7875 8.1125C3.3125 6.90417 4.02917 5.84583 4.9375 4.9375C5.84583 4.02917 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6375 2 12.0125 2C13.3875 2 14.6792 2.2625 15.8875 2.7875C17.0958 3.3125 18.1542 4.02917 19.0625 4.9375C19.9708 5.84583 20.6875 6.90417 21.2125 8.1125C21.7375 9.32083 22 10.6125 22 11.9875C22 13.3625 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.9708 18.1542 19.0625 19.0625C18.1542 19.9708 17.0958 20.6875 15.8875 21.2125C14.6792 21.7375 13.3875 22 12.0125 22C10.6375 22 9.34167 21.7375 8.125 21.2125ZM12 19.95C12.4333 19.35 12.8083 18.725 13.125 18.075C13.4417 17.425 13.7 16.7333 13.9 16H10.1C10.3 16.7333 10.5583 17.425 10.875 18.075C11.1917 18.725 11.5667 19.35 12 19.95ZM9.4 19.55C9.1 19 8.8375 18.4292 8.6125 17.8375C8.3875 17.2458 8.2 16.6333 8.05 16H5.1C5.58333 16.8333 6.1875 17.5583 6.9125 18.175C7.6375 18.7917 8.46667 19.25 9.4 19.55ZM14.6 19.55C15.5333 19.25 16.3625 18.7917 17.0875 18.175C17.8125 17.5583 18.4167 16.8333 18.9 16H15.95C15.8 16.6333 15.6125 17.2458 15.3875 17.8375C15.1625 18.4292 14.9 19 14.6 19.55ZM4.25 14H7.65C7.6 13.6667 7.5625 13.3375 7.5375 13.0125C7.5125 12.6875 7.5 12.35 7.5 12C7.5 11.65 7.5125 11.3125 7.5375 10.9875C7.5625 10.6625 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.10417 10.6625 4.0625 10.9875C4.02083 11.3125 4 11.65 4 12C4 12.35 4.02083 12.6875 4.0625 13.0125C4.10417 13.3375 4.16667 13.6667 4.25 14ZM9.65 14H14.35C14.4 13.6667 14.4375 13.3375 14.4625 13.0125C14.4875 12.6875 14.5 12.35 14.5 12C14.5 11.65 14.4875 11.3125 14.4625 10.9875C14.4375 10.6625 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.5625 10.6625 9.5375 10.9875C9.5125 11.3125 9.5 11.65 9.5 12C9.5 12.35 9.5125 12.6875 9.5375 13.0125C9.5625 13.3375 9.6 13.6667 9.65 14ZM16.35 14H19.75C19.8333 13.6667 19.8958 13.3375 19.9375 13.0125C19.9792 12.6875 20 12.35 20 12C20 11.65 19.9792 11.3125 19.9375 10.9875C19.8958 10.6625 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4375 10.6625 16.4625 10.9875C16.4875 11.3125 16.5 11.65 16.5 12C16.5 12.35 16.4875 12.6875 16.4625 13.0125C16.4375 13.3375 16.4 13.6667 16.35 14ZM15.95 8H18.9C18.4167 7.16667 17.8125 6.44167 17.0875 5.825C16.3625 5.20833 15.5333 4.75 14.6 4.45C14.9 5 15.1625 5.57083 15.3875 6.1625C15.6125 6.75417 15.8 7.36667 15.95 8ZM10.1 8H13.9C13.7 7.26667 13.4417 6.575 13.125 5.925C12.8083 5.275 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.275 10.875 5.925C10.5583 6.575 10.3 7.26667 10.1 8ZM5.1 8H8.05C8.2 7.36667 8.3875 6.75417 8.6125 6.1625C8.8375 5.57083 9.1 5 9.4 4.45C8.46667 4.75 7.6375 5.20833 6.9125 5.825C6.1875 6.44167 5.58333 7.16667 5.1 8Z"
          fill="#0288D1"
        />
      </g>
    </svg>
  );
};

const CountryPrioritizationIcon = ({
  size = 18,
}: DeepDiveSvgIconProps): ReactElement => {
  const maskId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <mask
        id={maskId}
        style={{ maskType: "alpha" } as never}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          d="M5.05775 20.5C4.55258 20.5 4.125 20.325 3.775 19.975C3.425 19.625 3.25 19.1974 3.25 18.6923V3.75C3.25 3.5375 3.32192 3.35933 3.46575 3.2155C3.60958 3.07183 3.78775 3 4.00025 3C4.21292 3 4.391 3.07183 4.5345 3.2155C4.67817 3.35933 4.75 3.5375 4.75 3.75V18.6923C4.75 18.7692 4.78208 18.8398 4.84625 18.9038C4.91025 18.9679 4.98075 19 5.05775 19H20C20.2125 19 20.3906 19.0719 20.5343 19.2157C20.6781 19.3596 20.75 19.5378 20.75 19.7502C20.75 19.9629 20.6781 20.141 20.5343 20.2845C20.3906 20.4282 20.2125 20.5 20 20.5H5.05775ZM7.55775 17.25C7.31258 17.25 7.10708 17.1671 6.94125 17.0013C6.77525 16.8352 6.69225 16.6297 6.69225 16.3845V9.9615C6.69225 9.71633 6.77525 9.51083 6.94125 9.345C7.10708 9.17917 7.31258 9.09625 7.55775 9.09625H8.7885C9.0445 9.09625 9.25917 9.18308 9.4325 9.35675C9.60567 9.53042 9.69225 9.74567 9.69225 10.0025V16.3475C9.69225 16.6043 9.60567 16.8189 9.4325 16.9913C9.25917 17.1638 9.0445 17.25 8.7885 17.25H7.55775ZM12.3077 17.25C12.0626 17.25 11.8571 17.1671 11.6912 17.0013C11.5252 16.8352 11.4423 16.6297 11.4423 16.3845V5C11.4423 4.74383 11.5289 4.52917 11.7023 4.356C11.8754 4.18283 12.0901 4.09625 12.3463 4.09625H13.577C13.8222 4.09625 14.0277 4.17917 14.1935 4.345C14.3593 4.51083 14.4423 4.71633 14.4423 4.9615V16.346C14.4423 16.6022 14.3557 16.8168 14.1825 16.99C14.0092 17.1633 13.7945 17.25 13.5385 17.25H12.3077ZM17.0577 17.25C16.8126 17.25 16.607 17.1671 16.441 17.0013C16.2752 16.8352 16.1923 16.6297 16.1923 16.3845V14C16.1923 13.7438 16.2789 13.5292 16.4523 13.356C16.6254 13.1828 16.8401 13.0963 17.0962 13.0963H18.3268C18.5721 13.0963 18.7777 13.1792 18.9435 13.345C19.1093 13.5108 19.1923 13.7163 19.1923 13.9615V16.346C19.1923 16.6022 19.1057 16.8168 18.9325 16.99C18.7592 17.1633 18.5445 17.25 18.2885 17.25H17.0577Z"
          fill="#027A48"
        />
      </g>
    </svg>
  );
};

const DeploymentPerformanceIcon = ({
  size = 18,
}: DeepDiveSvgIconProps): ReactElement => {
  const maskId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <mask
        id={maskId}
        style={{ maskType: "alpha" } as never}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          d="M8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3625 2 11.9875C2 10.6125 2.2625 9.32083 2.7875 8.1125C3.3125 6.90417 4.02917 5.84583 4.9375 4.9375C5.84583 4.02917 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6375 2 12.0125 2C13.3875 2 14.6792 2.2625 15.8875 2.7875C17.0958 3.3125 18.1542 4.02917 19.0625 4.9375C19.9708 5.84583 20.6875 6.90417 21.2125 8.1125C21.7375 9.32083 22 10.6125 22 11.9875C22 13.3625 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.9708 18.1542 19.0625 19.0625C18.1542 19.9708 17.0958 20.6875 15.8875 21.2125C14.6792 21.7375 13.3875 22 12.0125 22C10.6375 22 9.34167 21.7375 8.125 21.2125ZM12 19.95C12.4333 19.35 12.8083 18.725 13.125 18.075C13.4417 17.425 13.7 16.7333 13.9 16H10.1C10.3 16.7333 10.5583 17.425 10.875 18.075C11.1917 18.725 11.5667 19.35 12 19.95ZM9.4 19.55C9.1 19 8.8375 18.4292 8.6125 17.8375C8.3875 17.2458 8.2 16.6333 8.05 16H5.1C5.58333 16.8333 6.1875 17.5583 6.9125 18.175C7.6375 18.7917 8.46667 19.25 9.4 19.55ZM14.6 19.55C15.5333 19.25 16.3625 18.7917 17.0875 18.175C17.8125 17.5583 18.4167 16.8333 18.9 16H15.95C15.8 16.6333 15.6125 17.2458 15.3875 17.8375C15.1625 18.4292 14.9 19 14.6 19.55ZM4.25 14H7.65C7.6 13.6667 7.5625 13.3375 7.5375 13.0125C7.5125 12.6875 7.5 12.35 7.5 12C7.5 11.65 7.5125 11.3125 7.5375 10.9875C7.5625 10.6625 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.10417 10.6625 4.0625 10.9875C4.02083 11.3125 4 11.65 4 12C4 12.35 4.02083 12.6875 4.0625 13.0125C4.10417 13.3375 4.16667 13.6667 4.25 14ZM9.65 14H14.35C14.4 13.6667 14.4375 13.3375 14.4625 13.0125C14.4875 12.6875 14.5 12.35 14.5 12C14.5 11.65 14.4875 11.3125 14.4625 10.9875C14.4375 10.6625 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.5625 10.6625 9.5375 10.9875C9.5125 11.3125 9.5 11.65 9.5 12C9.5 12.35 9.5125 12.6875 9.5375 13.0125C9.5625 13.3375 9.6 13.6667 9.65 14ZM16.35 14H19.75C19.8333 13.6667 19.8958 13.3375 19.9375 13.0125C19.9792 12.6875 20 12.35 20 12C20 11.65 19.9792 11.3125 19.9375 10.9875C19.8958 10.6625 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4375 10.6625 16.4625 10.9875C16.4875 11.3125 16.5 11.65 16.5 12C16.5 12.35 16.4875 12.6875 16.4625 13.0125C16.4375 13.3375 16.4 13.6667 16.35 14ZM15.95 8H18.9C18.4167 7.16667 17.8125 6.44167 17.0875 5.825C16.3625 5.20833 15.5333 4.75 14.6 4.45C14.9 5 15.1625 5.57083 15.3875 6.1625C15.6125 6.75417 15.8 7.36667 15.95 8ZM10.1 8H13.9C13.7 7.26667 13.4417 6.575 13.125 5.925C12.8083 5.275 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.275 10.875 5.925C10.5583 6.575 10.3 7.26667 10.1 8ZM5.1 8H8.05C8.2 7.36667 8.3875 6.75417 8.6125 6.1625C8.8375 5.57083 9.1 5 9.4 4.45C8.46667 4.75 7.6375 5.20833 6.9125 5.825C6.1875 6.44167 5.58333 7.16667 5.1 8Z"
          fill="#EF6C00"
        />
      </g>
    </svg>
  );
};

const ProposalAssessmentIcon = ({
  size = 18,
}: DeepDiveSvgIconProps): ReactElement => {
  const maskId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <mask
        id={maskId}
        style={{ maskType: "alpha" } as never}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          d="M9 18H15C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16H9C8.71667 16 8.47917 16.0958 8.2875 16.2875C8.09583 16.4792 8 16.7167 8 17C8 17.2833 8.09583 17.5208 8.2875 17.7125C8.47917 17.9042 8.71667 18 9 18ZM9 14H15C15.2833 14 15.5208 13.9042 15.7125 13.7125C15.9042 13.5208 16 13.2833 16 13C16 12.7167 15.9042 12.4792 15.7125 12.2875C15.5208 12.0958 15.2833 12 15 12H9C8.71667 12 8.47917 12.0958 8.2875 12.2875C8.09583 12.4792 8 12.7167 8 13C8 13.2833 8.09583 13.5208 8.2875 13.7125C8.47917 13.9042 8.71667 14 9 14ZM6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H13.175C13.4417 2 13.6958 2.05 13.9375 2.15C14.1792 2.25 14.3917 2.39167 14.575 2.575L19.425 7.425C19.6083 7.60833 19.75 7.82083 19.85 8.0625C19.95 8.30417 20 8.55833 20 8.825V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM13 8V4H6V20H18V9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8Z"
          fill="#9C27B0"
        />
      </g>
    </svg>
  );
};

const iconMap: Record<string, (props: DeepDiveSvgIconProps) => ReactElement> = {
  globe: GeographicImpactDistributionIcon,
  "bar-chart": CountryPrioritizationIcon,
  network: DeploymentPerformanceIcon,
  file: ProposalAssessmentIcon,
};

export function DeepDiveCard({ card, index }: DeepDiveCardProps) {
  const Icon = iconMap[card.icon] ?? GeographicImpactDistributionIcon;

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
            height: 4,
            bgcolor: card.progressBarBg,
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
