import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home tests", () => {
  it("should render", () => {
    expect(render(<Home />)).toBeTruthy();
  });
});
