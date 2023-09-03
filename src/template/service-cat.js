function serviceCat(link, id) {
    return fetch(`${link}${id}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
        })
}

export { serviceCat };