import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "./AboutUs";

describe("AboutUs tests", () => {
  it("should render", () => {
    expect(render(<AboutUs />)).toBeTruthy();
  });
});
