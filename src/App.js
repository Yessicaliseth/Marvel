import { useEffect, useContext } from 'react'
import StateContext from 'core/context/store'
import styled from 'styled-components'
import { RouterProvider } from "react-router-dom";
import { router } from 'core/router'
import { isEmpty } from 'lodash'
import useService  from 'core/hooks/useService'
import './styles.css';


function App() {

  const { state } = useContext(StateContext)
  const { getCharaters } = useService()

  useEffect(() => {
    if(isEmpty(state?.characters)){
      getCharaters()
    }
  }, [])

  return (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  );
}

export default App;


export const AppLayout = styled.div`
  background-color: var(--black-font);
  position: relativa;
  min-height: 100vh;
`