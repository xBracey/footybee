import _ from "lodash";

export const reducePairings = (
  pairings: { a: string; b: string }[]
): string[][] => {
  let matches = [];
  const indexesCovered = [];

  for (let i = 0; i < pairings.length; i++) {
    const pairing = pairings[i];

    if (!indexesCovered.includes(i)) {
      matches[i] = [pairing.a, pairing.b];

      for (let j = i + 1; j < pairings.length; j++) {
        const pairing2 = pairings[j];

        if (
          !indexesCovered.includes(j) &&
          (pairing.a === pairing2.a ||
            pairing.b === pairing2.b ||
            pairing.a === pairing2.b ||
            pairing.b === pairing2.a)
        ) {
          indexesCovered.push(j);
          matches[i].push(pairing2.a);
          matches[i].push(pairing2.b);
        }
      }
    }
  }

  matches = matches.filter(match => !!match).map(match => _.uniq(match));

  return matches;
};
