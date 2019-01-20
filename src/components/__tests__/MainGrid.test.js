import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import MainGrid from "../MainGrid";

test("renders correctly", () => {
  const { container } = render(<MainGrid />);
  expect(container).toMatchSnapshot();
  expect(container).toContainHTML("<div></div>");
});
