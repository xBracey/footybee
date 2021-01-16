import { authorisedRequest } from '../api';
import { IRootState } from '../reducers';
import { IAPIResponse } from '../types';

export const fetch{{ pascalCase name }} = async (state: IRootState): Promise<IAPIResponse> =>
  authorisedRequest(state, "/{{ camelCase name }}");