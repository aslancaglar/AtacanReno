export const PUBLIC_ADDRESS_FALLBACK = "123 Rue de Nancy, 54630 Flavigny-sur-Moselle";

export function getPublicAddress(address?: string) {
  if (!address) return PUBLIC_ADDRESS_FALLBACK;

  return address.replace(/\s+/g, " ").trim();
}

export function getPhoneHref(phone?: string) {
  if (!phone) return undefined;
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function getMapsHref(address?: string) {
  return `https://maps.google.com/?q=${encodeURIComponent(getPublicAddress(address))}`;
}
