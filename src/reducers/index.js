import { combineReducers } from 'redux';

// import chars from './char';
// import page from './page';
import peoples from './peoples';

const rootReducer = combineReducers({
  peoples : peoples,

})

export default rootReducer;