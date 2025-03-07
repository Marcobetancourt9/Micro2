import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MainContainer from "./MainContainer";

describe("MainContainer", () => {
  it("renders all main sections", () => {
    render(<MainContainer />);

    expect(screen.getByText("Excursiones al Ávila")).toBeInTheDocument();
    expect(screen.getByText("UNIMETANOS")).toBeInTheDocument();
    expect(
      screen.getByText("¿Cansado de la rutina universitaria?"),
    ).toBeInTheDocument();
    expect(screen.getByText("RUTAS POPULARES 🔥")).toBeInTheDocument();
    expect(
      screen.getByText("© Visita Caracas 2025 | Síguenos:"),
    ).toBeInTheDocument();
  });

  it("renders all route cards", () => {
    render(<MainContainer />);

    expect(screen.getByText("Quebrada Quintero")).toBeInTheDocument();
    expect(screen.getByText("Antiguo Teleferico")).toBeInTheDocument();
    expect(screen.getByText("Lagunazo")).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    render(<MainContainer />);

    expect(screen.getByText("Ver rutas")).toBeInTheDocument();
    expect(screen.getByText("¡Agenda ya!")).toBeInTheDocument();
  });
});
