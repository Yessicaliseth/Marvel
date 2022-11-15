import { useEffect, useContext } from 'react'
import StateContext from 'core/context/store'
import { normalizeList } from 'core/utils'
import {
    fetchCharaters,
    // fetchComics
} from 'services/marvelService'
import useActions from 'core/context/actions'

const useService = () => {

    // const { state } = useContext(StateContext)
    const actions = useActions()

    const getCharaters = async(queryParams) => {
        const { response, error } = await fetchCharaters(queryParams)
        if(error) alert(error?.message)
        const { data:{ results } } = response;
        const characters = await normalizeList(results)
        actions.addCharacters(characters)
    }

    return {
        getCharaters
    }

}

export default useService

