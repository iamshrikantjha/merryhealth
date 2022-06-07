import { combineReducers } from 'redux'
import langReducer from "./test/testReducer";
// import cakeReducer from './cake/cakeReducer'
// import iceCreamReducer from './iceCream/iceCreamReducer'
// import userReducer from './user/userReducer'

const rootReducer = combineReducers({
     langTest: langReducer,
//   cake: cakeReducer,
//   iceCream: iceCreamReducer,
//   user: userReducer
})

export default rootReducer
