import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Rodape from "@/components/Rodape";
import { CONTATO } from "@/lib/contato";

describe("Rodape", () => {
  it("o Instagram é link que abre em nova aba", () => {
    render(<Rodape />);
    const ig = screen.getByRole("link", { name: "Instagram" });
    expect(ig.getAttribute("href")).toBe(CONTATO.instagramUrl);
    expect(ig.getAttribute("target")).toBe("_blank");
    expect(ig.getAttribute("rel")).toBe("noopener");
  });
});
