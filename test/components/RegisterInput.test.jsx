/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from "react";
import { describe, it, expect, afterEach, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import RegisterInput from "../../components/RegisterInput";

expect.extend(matchers);

describe("RegisterInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle name typing correctly", async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText("Masukkan nama");

    // action
    await userEvent.type(nameInput, "test user");

    // assert
    expect(nameInput).toHaveValue("test user");
  });

  it("should handle email typing correctly", async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Masukkan email");

    // action
    await userEvent.type(emailInput, "test@mail.com");

    // assert
    expect(emailInput).toHaveValue("test@mail.com");
  });

  it("should handle password typing correctly", async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText(
      "Masukkan password"
    );

    // action
    await userEvent.type(passwordInput, "password");

    // assert
    expect(passwordInput).toHaveValue("password");
  });

  it("should call register function when register button is clicked", async () => {
    // arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText("Masukkan nama");
    const emailInput = await screen.getByPlaceholderText("Masukkan email");
    const passwordInput = await screen.getByPlaceholderText(
      "Masukkan password"
    );
    await userEvent.type(nameInput, "test user");
    await userEvent.type(emailInput, "test@mail.com");
    await userEvent.type(passwordInput, "password");
    const registerButton = await screen.getByRole("button", {
      name: "Register",
    });

    // action
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: "test user",
      email: "test@mail.com",
      password: "password",
    });
  });
});
