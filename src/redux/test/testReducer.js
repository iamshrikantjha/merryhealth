import {
    GET_LANGUAGE,
  } from './testTypes'
  
  const initialState = {
    // loading: false,
    // users: [],
    lang: ''
  }
  
  const langReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_LANGUAGE:
          console.log('Change Language from reducer');
        // return {
            state
        //   ...state,
        //   loading: true
        // }
      default: return state
    }
  }
  
  export default langReducer