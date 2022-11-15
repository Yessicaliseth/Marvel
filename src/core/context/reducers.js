import { ADD_CHARACTERS, SEARCH_CHARACTER } from './actionTypes'

export const reducer = (state, action) => {

    switch (action.type) {
      case ADD_CHARACTERS:
        return{
          ...state,
          characters:{
            ...state.characters,
            ...action.payload
          }
        }
        case SEARCH_CHARACTER:
          return{
            ...state,
            search:action.payload.searchResult,
            searchValue:action.payload.searchValue
          }
      default:
        return state
    }
  
  }