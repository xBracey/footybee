import { types } from '../reducers';
import { fetch{{ pascalCase name }} } from '../requests';
import { ThunkResult } from '../types';

export const get{{ pascalCase name }} = (): ThunkResult<any>  => {
  return (dispatch, getState) => {
    dispatch({ type: types.{{ camelCase name }}.{{ upperCase name }}_LOADING_{{ upperCase name }} });

    return fetch{{ pascalCase name }}(getState()).then((response) =>
      !response.error
        ? dispatch({
            type: types.{{ camelCase name }}.{{ upperCase name }}_FETCHED_{{ upperCase name }},
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          }),
    );
  };
};
