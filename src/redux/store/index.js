import reducer from '../reducers'
import { configureStore } from '@reduxjs/toolkit'

// const middleware =
//   ({ dispatch, getState }) =>
//   next =>
//   action =>
//     typeof action === 'function' ? action(dispatch, getState) : next(action)

// const store = createStore(reducer, applyMiddleware(thunk))
const store = configureStore({ reducer })

export default store
