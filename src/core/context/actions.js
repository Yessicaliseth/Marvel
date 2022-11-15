import React, { useContext } from 'react'
import StateContext from './store'
import { ADD_CHARACTERS, SEARCH_CHARACTER } from './actionTypes'


const useActions = () => {

  const { state, dispatch } = useContext(StateContext)

  const addCharacters = (payload) => {
    dispatch({
      type:ADD_CHARACTERS,
      payload
    })
  }


  const searchCharacter = (query) => {
    const { characters } = state
    let searchValue = query?.toLowerCase()
    let searchResult = Object.keys(characters).filter(charId => characters[charId]?.name?.toLowerCase().includes(searchValue))
    dispatch({
      type:SEARCH_CHARACTER,
      payload:{
        searchResult,
        searchValue
      }
    })
  }

  return {
    addCharacters,
    searchCharacter
  }

}

export default useActions