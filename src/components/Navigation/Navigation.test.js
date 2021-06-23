import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation tests", () => {
  it("should render", () => {
    expect(render(<Navigation />)).toBeTruthy();
  });
});
