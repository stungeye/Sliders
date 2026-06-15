import { describe, expect, it } from "vitest";
import { toSitePath } from "./siteUrls.js";

describe("site URL helpers", () => {
  it("keeps root-relative paths unchanged when the site has no base path", () => {
    expect(toSitePath("/02-css-layout/01-grid/", "/")).toBe(
      "/02-css-layout/01-grid/",
    );
  });

  it("prefixes root-relative paths with the configured site base path", () => {
    expect(toSitePath("/02-css-layout/01-grid/", "/Sliders/")).toBe(
      "/Sliders/02-css-layout/01-grid/",
    );
  });

  it("does not prefix page anchors or absolute URLs", () => {
    expect(toSitePath("#module-content", "/Sliders/")).toBe("#module-content");
    expect(toSitePath("https://example.com/demo", "/Sliders/")).toBe(
      "https://example.com/demo",
    );
  });

  it("fails clearly for relative paths that would be ambiguous with a base path", () => {
    expect(() => toSitePath("02-css-layout/01-grid/", "/Sliders/")).toThrow(
      'Expected a root-relative site path, received "02-css-layout/01-grid/".',
    );
  });
});
