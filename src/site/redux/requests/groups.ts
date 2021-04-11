import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchGroups = async (state: IRootState): Promise<IAPIResponse> =>
  authorisedRequest(state, "/group");
