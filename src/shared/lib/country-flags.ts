/** Country ID to flag emoji mapping for map markers */
export const COUNTRY_FLAGS: Record<string, string> = {
  ind: '🇮🇳',
  nga: '🇳🇬',
  eth: '🇪🇹',
  ken: '🇰🇪',
  moz: '🇲🇿',
  sdn: '🇸🇩',
  mli: '🇲🇱',
  gha: '🇬🇭',
  cod: '🇨🇩',
  cmr: '🇨🇲',
  pak: '🇵🇰',
  bgd: '🇧🇩',
  npl: '🇳🇵',
  lka: '🇱🇰',
  mmr: '🇲🇲',
  idn: '🇮🇩',
  tha: '🇹🇭',
  vnm: '🇻🇳',
  phl: '🇵🇭',
  bra: '🇧🇷',
}

export function getCountryFlag(countryId: string): string {
  return COUNTRY_FLAGS[countryId] ?? '🌐'
}
