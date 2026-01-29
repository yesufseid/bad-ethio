const normalizeBasePath = (value: string) => {
  if (!value) return ""
  if (value === "/") return ""
  return value.startsWith("/") ? value.replace(/\/$/, "") : `/${value}`
}

export const BASE_PATH = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "")

export const withBasePath = (path: string) => {
  if (!path) return BASE_PATH || "/"
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${BASE_PATH}${normalizedPath}`
}
