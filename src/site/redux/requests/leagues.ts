import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchLeague = async (
  state: IRootState,
  name: string
): Promise<IAPIResponse> => authorisedRequest(state, `/league/${name}`);
