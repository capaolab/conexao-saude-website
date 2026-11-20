import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Imagem from "@/components/Imagem";

describe("Imagem", () => {
  it("renderiza img com alt vazio e src do logo", () => {
    const { container } = render(<Imagem id="logo" />);
    const img = container.querySelector("img");
    expect(img).not.toBeNull();
    expect(img?.getAttribute("alt")).toBe("");
    expect(img?.getAttribute("src")).toContain("logo.png");
  });
});
