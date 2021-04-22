import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchTeams = async (state: IRootState): Promise<IAPIResponse> =>
  authorisedRequest(state, "/team");
