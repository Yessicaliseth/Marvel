import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useObserver } from 'core/hooks/useObserver'
import useService  from 'core/hooks/useService'
import { P } from 'core/components/atoms'

const WrapperList = ({ children, offset }) => {

  const { getCharaters } = useService()
  const [ loader, setLoader ] = useState(false)
  const [ show, setElement ] = useObserver()
  
  const loadMore = async() => {
    setLoader(true)
    await getCharaters({ limit:10, offset })
    setLoader(false)
  }

  useEffect(()=>{
    if(show && offset > 9){
      loadMore()
    }
  }, [show])

  return (
    <>
      {children}
      {
        !loader ?
        <LoadMoreContent className="invisibility" ref={setElement}/>
        : 
        <LoadMoreContent>
          <P>Cargando...</P>
        </LoadMoreContent>
      }
    </>
  )

}


export default WrapperList

const LoadMoreContent = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.invisibility{
    opacity:0;
  }
`

