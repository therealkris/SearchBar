import React from "react";
import { render } from "react-testing-library";

import App from "../App";

test("renders correctly", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
