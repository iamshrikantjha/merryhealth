import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const store = configureStore({ reducer: rootReducer })

// const store = createStore(
//   rootReducer,
// //   composeWithDevTools(applyMiddleware(logger, thunk))
// )

export default store
