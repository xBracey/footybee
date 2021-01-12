import { findLinkURI } from 'lib';
import { apiRequest } from './apiRequest';
import { IRootState } from '../reducers';
import { IAPIResponse } from '../types';
import { noLinkFoundError } from '../errors';

export async function fetch{{ pascalCase name }}(state: IRootState): Promise<IAPIResponse> {
  const {{ camelCase name }}Link = findLinkURI(state.user, 'gameList');

  if ({{ camelCase name }}Link) {
    const response = await apiRequest({{ camelCase name }}Link);
    return response;
  }

  return {
    data: null,
    time: null,
    error: true,
    message: noLinkFoundError,
  };
}
