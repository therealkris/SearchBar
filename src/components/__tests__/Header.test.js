import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Header from "../Header";

test("renders correctly", () => {
  const { container, getByText } = render(<Header />);
  expect(container).toMatchSnapshot();
  expect(getByText(/Sign up/i)).toBeInTheDocument();
});
