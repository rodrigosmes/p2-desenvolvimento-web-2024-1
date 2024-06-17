async function fetchData() {
    var params = new URLSearchParams(window.location.search);

    var id = params.get('id');
    try {
        const res = await fetch('https://botafogo-atletas.mange.li/2024-1/' + id)
        const data = await res.json()

        console.log(data)
        return data;
    } catch (error) {
        throw new Error(error);
    }

}

fetchData()
    .catch(error => console.error(error))

    