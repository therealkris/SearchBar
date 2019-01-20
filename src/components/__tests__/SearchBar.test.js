import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import SearchBar from "../SearchBar";
import { suggestTerms } from "../../services/api";

jest.mock("../../services/api", () => {
  return { suggestTerms: jest.fn(() => Promise.resolve([])) };
});

test("renders correctly", () => {
  const { container } = render(<SearchBar />);
  expect(container).toMatchSnapshot();
});

test("handles change", () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  const inputNode = getByPlaceholderText("Start typing to search");
  fireEvent.change(inputNode, { target: { value: "re" } });
  expect(suggestTerms).toHaveBeenCalledTimes(1);
});
