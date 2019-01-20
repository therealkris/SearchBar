// @flow
import * as React from "react";

import styles from "./styles.module.scss";
import MatchedResult from "./MatchedResult";

type ResultProps = {
  results: Array<string>,
  term: string,
  handleClick: Function
};

export default function Results(props: ResultProps) {
  const { results, term, handleClick } = props;
  return (
    <div className={styles.results}>
      <ul className={styles.resultsContainer}>
        <li className={styles.suggestedText}>Suggested</li>
        {results.map(result => (
          <MatchedResult
            key={result}
            term={term}
            result={result}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}
