import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Agregar from "./Agregar";

describe("Agregar", () => {
  it("renders the component correctly", () => {
    render(<Agregar />);

    // Check if the main locations are rendered
    expect(screen.getByText("QUEBRADA QUINTERO")).toBeInTheDocument();
    expect(screen.getByText("ANTIGUO TELEFERICO")).toBeInTheDocument();
    expect(screen.getByText("LAGUNAZO")).toBeInTheDocument();

    // Check if action buttons are rendered
    expect(screen.getByText("Eliminar ruta existente")).toBeInTheDocument();
    expect(screen.getByText("Crear nueva ruta")).toBeInTheDocument();

    // Check if footer content is rendered
    expect(screen.getByText(/© Visita Caracas 2025/)).toBeInTheDocument();
    expect(screen.getByText("Facebook")).toBeInTheDocument();
  });

  it("renders all images with proper alt text", () => {
    render(<Agregar />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(5); // 2 logos + 1 main image + 3 location backgrounds

    // Check alt text for accessibility
    expect(images.some((img) => img.alt === "Logo circular")).toBeTruthy();
    expect(images.some((img) => img.alt === "Logo secundario")).toBeTruthy();
    expect(images.some((img) => img.alt === "Imagen principal")).toBeTruthy();
    expect(
      images.some((img) => img.alt === "Fondo de QUEBRADA QUINTERO")
    ).toBeTruthy();
    expect(
      images.some((img) => img.alt === "Fondo de ANTIGUO TELEFERICO")
    ).toBeTruthy();
    expect(images.some((img) => img.alt === "Fondo de LAGUNAZO")).toBeTruthy();
  });

  it("has proper semantic structure", () => {
    render(<Agregar />);

    // Check for semantic elements
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument(); // header
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // footer
    expect(screen.getAllByRole("article").length).toBe(3); // location cards

    // Check for heading hierarchy
    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings.length).toBe(3);
  });
});
