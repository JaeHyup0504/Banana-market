//Reducer 는 현재의 state와 Action을 이용해서 새로운 state를 만들어 내는 pure function
// rootReducer.js  :: 리듀서 하나로 합치는 파일
import { combineReducers } from 'redux';
import setLoginReducer from './setLoginReducer'; //리듀서 가져오기
import setUserInfoReducer from './setUserInfoReducer';

const rootReducer = combineReducers({
  setLoginReducer, 
  setUserInfoReducer, 
});

export default rootReducer;