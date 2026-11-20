import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const css = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");

describe("design system", () => {
  test.each([
    "--brand: #256609;",
    "--lime: #a3c844;",
    "--surface: #fafaf5;",
    "--ink: #1e2617;",
    "--radius-pill: 999px;",
    "--container: 1160px;",
  ])("define o token %s", (token) => {
    expect(css).toContain(token);
  });

  test.each([".ics-btn--primary", ".ics-btn--highlight", ".ics-tag--earth"])(
    "define a regra %s",
    (regra) => {
      expect(css).toContain(regra);
    },
  );
});
