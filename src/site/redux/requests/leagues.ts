import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchLeague = async (
  state: IRootState,
  name: string
): Promise<IAPIResponse> => authorisedRequest(state, `/league/${name}`);

export const removeUserLeague = async (
  state: IRootState,
  code: string
): Promise<IAPIResponse> =>
  authorisedRequest(
    state,
    `/userLeague/${state.user.username}/${code}`,
    {
      method: "DELETE",
    },
    "Successfully left the league"
  );
