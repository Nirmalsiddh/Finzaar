import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

// test suite

describe("Hero Component", () => {
  test("renders Hero Image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
  });
  test("renders Signup button", () => {
    render(<Hero />);
    const signupbutton = screen.getByRole('button', {name: '/Signup Now/i'});
    expect(signupbutton).toBeInTheDocument();
    expect(signupbutton).toHaveClass("btn-primary");
  });
});
