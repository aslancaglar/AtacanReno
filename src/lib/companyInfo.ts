export const PUBLIC_ADDRESS_FALLBACK = "54630 Flavigny-sur-Moselle";

const PLACEHOLDER_STREET_PATTERN = /^123 Rue de Nancy,\s*/i;

export function getPublicAddress(address?: string) {
  if (!address) return PUBLIC_ADDRESS_FALLBACK;

  const publicAddress = address
    .replace(PLACEHOLDER_STREET_PATTERN, "")
    .replace(/\s+/g, " ")
    .trim();

  return publicAddress || PUBLIC_ADDRESS_FALLBACK;
}

export function getPhoneHref(phone?: string) {
  if (!phone) return undefined;
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function getMapsHref(address?: string) {
  return `https://maps.google.com/?q=${encodeURIComponent(getPublicAddress(address))}`;
}
