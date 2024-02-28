import { combineReducers } from 'redux'
import { people, person } from './person'
import { post, posts } from './post'

const reducer = combineReducers({
  people,
  person,
  posts,
  post
})

// function reducer (
//   state = { people: [], person: {}, posts: [], post: {} },
//   { type, payload }
// ) {
//   switch (type) {
//     case 'PEOPLE':
//       return { ...state, people: payload }

//     case 'PERSON':
//       return { ...state, person: payload }

//     case 'POSTS':
//       return { ...state, posts: payload }

//     case 'POST':
//       return { ...state, post: payload }

//     default:
//       return state
//   }
// }

export default reducer
