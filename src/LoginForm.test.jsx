import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("renders all form elements", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/iniciar sesión/i)).toBeInTheDocument();
    expect(screen.getByText(/continuar con google/i)).toBeInTheDocument();
    expect(screen.getByText(/regístrate/i)).toBeInTheDocument();
  });

  it("handles form submission", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/iniciar sesión/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    // Add assertions based on your form submission logic
  });

  it("maintains default email value", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput.value).toBe("krivas@correo.unimet.edu.ve");
  });
});
