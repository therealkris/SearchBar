// @flow
import * as React from "react";

type ResultProps = {
  term: string,
  result: string,
  handleClick: Function
};

export default function MatchedResult(props: ResultProps) {
  const { term, result, handleClick } = props;
  const match = result.replace(
    new RegExp(term, "gi"),
    "<span data-testid='matcher' style='color: #b9b9b9'>$&</span>"
  );

  const clicked = () => {
    return handleClick(result);
  };

  return <li dangerouslySetInnerHTML={{ __html: match }} onClick={clicked} />;
}
