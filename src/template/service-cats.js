function serviceCats() {
    return fetch("https://api.thecatapi.com/v1/breeds")
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
        })
}

export { serviceCats };