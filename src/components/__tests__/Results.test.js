import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Results from "../Results";

test("renders correctly", () => {
  const { container, getByText, getByTestId } = render(
    <Results results={['Record']} term={"re"} handleClick={() => null} />
  );
  expect(container).toMatchSnapshot();
  expect(getByText(/suggested/i)).toBeInTheDocument()
  expect(getByTestId('matcher')).toBeInTheDocument()
});
