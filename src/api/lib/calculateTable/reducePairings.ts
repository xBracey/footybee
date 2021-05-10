import _ from "lodash";
import { IGroupTeam } from "./calculateGroup";
import { IRawPairing } from "./calculateTable";

export const reducePairings = (
  pairings: IRawPairing[],
  table: IGroupTeam[]
): string[][] => {
  let matches: string[][] = [];
  const indexesCovered = [];

  for (let i = 0; i < pairings.length; i++) {
    const pairing = pairings[i];

    if (!indexesCovered.includes(i)) {
      matches[i] = [pairing.a, pairing.b];

      for (let j = i + 1; j < pairings.length; j++) {
        const pairing2 = pairings[j];

        if (
          !indexesCovered.includes(j) &&
          (matches[i].includes(pairing2.a) || matches[i].includes(pairing2.b))
        ) {
          indexesCovered.push(j);
          matches[i].push(pairing2.a);
          matches[i].push(pairing2.b);
        }
      }
    }
  }

  matches = matches
    .filter(
      match =>
        !!match &&
        match.every(teamName => !!table.find(team => team.name === teamName))
    )
    .map(match => _.uniq(match));

  return matches;
};
