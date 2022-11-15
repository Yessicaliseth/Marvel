export const normalizeList = async(list) => {
    if(!Array.isArray(list))return;
    let item
    let objectList = {}
    for (item of list) {
        objectList = {
            ...objectList,
            [item.id]:item
        }
    }
    return objectList
}


export const parseFilters = (url, query) => {
    if(typeof query !== 'object') return url;
    let param
    let newUrl = `${url}`
    let concat =  url.includes('?') ? '&' : '?'
    for (param of Object.keys(query)) {
        newUrl = `${newUrl}${concat}${param}=${query[param]}`
    }
    return newUrl
}