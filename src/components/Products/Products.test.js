import React from "react";
import { render } from "@testing-library/react";
import Products from "./Products";

describe("Products tests", () => {
  it("should render", () => {
    expect(render(<Products />)).toBeTruthy();
  });
});
