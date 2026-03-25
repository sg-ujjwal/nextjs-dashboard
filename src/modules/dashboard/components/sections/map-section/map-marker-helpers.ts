export const parseActiveDeployment = (raw?: string): { title: string; action: string } | null => {
  if (!raw) return null
  const parts = raw.split(/\s*-\s*/)
  if (parts.length >= 2) {
    return { title: parts[0]!.trim(), action: parts[parts.length - 1]!.trim() }
  }
  return { title: raw, action: 'View' }
}

export const getDefaultIntelligence = (country: string): string[] => {
  const defaults: Record<string, string> = {
    India: 'India Announces National Water Mission Phase 2',
    Nigeria: 'Nigeria Launches Water Infrastructure Expansion Plan',
    Ethiopia: 'Ethiopia Advances Rural Water Access Initiative',
    Kenya: 'Kenya Expands Nairobi Water Grid Modernization',
  }
  return defaults[country] ? [defaults[country]!] : [`${country} water sector update`]
}
