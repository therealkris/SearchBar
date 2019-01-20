// @flow

const RESULTS = ["Random", "Real", "Record", "Red", "Report"];

export const suggestTerms = (term: string) => {
  return RESULTS.filter(result => {
    return result.toLowerCase().includes(term.toLowerCase());
  });
};

export const search = (term: string) => {
  return {
    result: `You searched for ${term}`
  };
};
