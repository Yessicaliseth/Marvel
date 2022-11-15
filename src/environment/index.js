import { 
CHARACTERS_ENPOINT,
COMICS_ENPOINT,
TIMESTAMP,
API_KEY,
HASH_KEY,
PORT 
} from 'core/const'

export const BASE_URL = 'https://gateway.marvel.com';
export const CHARACTERS_URL = `${BASE_URL}:${PORT}${CHARACTERS_ENPOINT}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH_KEY}`
export const COMICS_URL = `${BASE_URL}:${PORT}${COMICS_ENPOINT}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH_KEY}`
