const absoluteUrlPattern = /^[a-z][a-z\d+.-]*:/i;

export function toSitePath(path, basePath = getSiteBasePath()) {
  if (absoluteUrlPattern.test(path) || path.startsWith("//") || path.startsWith("#")) {
    return path;
  }

  if (!path.startsWith("/")) {
    throw new Error(`Expected a root-relative site path, received "${path}".`);
  }

  const normalizedBase = normalizeBasePath(basePath);

  if (normalizedBase === "/") {
    return path;
  }

  return `${normalizedBase}${path}`;
}

export function getSiteBasePath() {
  return normalizeBasePath(import.meta.env?.BASE_URL ?? "/");
}

function normalizeBasePath(basePath) {
  if (!basePath || basePath === "/") {
    return "/";
  }

  const withLeadingSlash = basePath.startsWith("/") ? basePath : `/${basePath}`;

  return withLeadingSlash.replace(/\/+$/, "");
}
