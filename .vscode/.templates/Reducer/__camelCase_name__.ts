import { IAction, IReducers } from '../types';

export interface I{{ pascalCase name }} {
  id: string;
  loading: boolean;
}

const initialState: I{{ pascalCase name }} = {
  id: null,
  loading: false,
};

export const {{ camelCase name }}Types = {
  {{ upperCase name }}_FETCHED_{{ upperCase name }}: 'fetched{{ pascalCase name }}',
  {{ upperCase name }}_LOADING_{{ upperCase name }}: 'loading{{ pascalCase name }}',
};

/**
 * {{ upperCase name }} REDUCERS - START
 */

const loading{{ pascalCase name }} = (state) => ({ ...state, loading: true });

const fetched{{ pascalCase name }} = (state, { data }) => {
  return { ...state, loading: false };
};

/**
 * {{ upperCase name }} REDUCERS - END
 * */

const reducers: IReducers<I{{ pascalCase name }}> = {
  fetched{{ pascalCase name }},
  loading{{ pascalCase name }},
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
