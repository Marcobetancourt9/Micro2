import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

describe("RegistrationForm", () => {
  it("renders the form header correctly", () => {
    render(<RegistrationForm />);
    expect(screen.getByText("Crea una cuenta")).toBeInTheDocument();
    expect(screen.getByText("Es rápido y fácil.")).toBeInTheDocument();
  });

  it("renders all form inputs", () => {
    render(<RegistrationForm />);
    expect(
      screen.getByPlaceholderText("Ingresa tu nombre")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Ingresa tu apellido")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("krivas@correo.unimet.edu.ve")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Hombre o Mujer")).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<RegistrationForm />);
    expect(screen.getByText("Regístrarse")).toBeInTheDocument();
  });

  it("renders the terms checkbox", () => {
    render(<RegistrationForm />);
    expect(
      screen.getByText(/Al continuar confirmo que he leído y acepto/)
    ).toBeInTheDocument();
  });
});
