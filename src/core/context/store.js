import React, { useReducer } from 'react'
import { reducer } from './reducers'

const StateContext = React.createContext(null)

const initialState = {
  colorTheme:'light',
  loading:false,
  characters:{},
  search:[],
  searchValue:''
}

export const StateContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  )

}



export default StateContext