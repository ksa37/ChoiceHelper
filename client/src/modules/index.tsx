import { combineReducers } from 'redux';
import options from './Options'

const NEW_PAGE = 'NEW_PAGE';

export const newPage = () => ({
  type: NEW_PAGE
});

const appReducer = combineReducers({
  options
});

const rootReducer = (state:any, action:any) => {
  if (action.type === 'NEW_PAGE') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer;