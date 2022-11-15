async function doFetch(url, params = {}) {
    let response
    try {
      const res = await fetch(url, params);
      response = await res.json(); 
      return { response };
    } catch (error) {
      return { error };
    }
}


export { doFetch }