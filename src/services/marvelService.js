import { 
    CHARACTERS_URL,
    COMICS_URL
} from 'environment'
import { doFetch } from 'services/webService'
import { parseFilters } from 'core/utils'

export const fetchCharaters = async(queryParams) => {
    let url = queryParams ? parseFilters(CHARACTERS_URL, queryParams) : CHARACTERS_URL
    return await doFetch(url)
};
export const fetchComics = async() => await doFetch(COMICS_URL);


