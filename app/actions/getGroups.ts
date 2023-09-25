
// hide it to .env file
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTU1MDcyOTYsInN1YiI6ImFtMzc4NSJ9.YLczY_gmoiQ_X4RhTljOgVKYsXMWSno1DNqc5O5cAqc";
const url = "https://yalies.io/api/people";


export const getGroups = async (body: object) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}
