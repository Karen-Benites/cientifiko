const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
    const apiUrl = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export default getData;