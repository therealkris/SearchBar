// @flow
import * as React from "react";

import { suggestTerms, search } from "../services/api";
import Results from "./Results";
import styles from './styles.module.scss'

type SearchState = {
  results: Array<string>,
  term: string
};

export default class SearchBar extends React.Component<{}, SearchState> {
  state = {
    results: [],
    term: ""
  };

  handleChange = async e => {
    const value = e.target.value;
    if (value.length > 0) {
      const results = await suggestTerms(value);
      this.setState({ results, term: value });
    } else {
      this.setState({ results: [], term: value });
    }
  };

  handleClick = async (term: string) => {
    const results = await search(term);
    console.log(results);
  };

  render() {
    const { results, term } = this.state;
    return (
      <div className={styles.search}>
        <input
          type="search"
          name="search"
          onChange={this.handleChange}
          placeholder={"Start typing to search"}
        />
        {results.length > 0 && (
          <Results results={results} term={term} handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}
