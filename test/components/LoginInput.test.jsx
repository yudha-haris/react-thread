/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from "react";
import { describe, it, expect, afterEach, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import LoginInput from "../../components/LoginInput";

expect.extend(matchers);

describe("LoginInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle email typing correctly", async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText("Masukkan email");

    // action
    await userEvent.type(usernameInput, "test@mail.com");

    // assert
    expect(usernameInput).toHaveValue("test@mail.com");
  });

  it("should handle password typing correctly", async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText(
      "Masukkan password"
    );

    // action
    await userEvent.type(passwordInput, "password");

    // assert
    expect(passwordInput).toHaveValue("password");
  });

  it("should call login function when login button is clicked", async () => {
    // arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    const usernameInput = await screen.getByPlaceholderText("Masukkan email");
    const passwordInput = await screen.getByPlaceholderText(
      "Masukkan password"
    );
    await userEvent.type(usernameInput, "test@mail.com");
    await userEvent.type(passwordInput, "password");
    const loginButton = await screen.getByRole("button", { name: "Login" });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: "test@mail.com",
      password: "password",
    });
  });
});
