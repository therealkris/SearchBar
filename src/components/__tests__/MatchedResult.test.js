import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import MatchedResult from "../MatchedResult";

test("renders correctly", () => {
  const { container, getByText, getByTestId } = render(
    <MatchedResult term={"re"} result={"Record"} handleClick={() => null} />
  );
  expect(container).toMatchSnapshot();
  expect(getByText(/cord/i)).toBeInTheDocument();
  expect(getByTestId("matcher")).toBeInTheDocument();
});
