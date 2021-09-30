
export const getPhrases = async () => {
    // Utilizo un proxy de cors en node.js para poder consultar a la api desde localhost 
    return fetch("https://dlanesan-cors-server.herokuapp.com/https://dog-api.kinduff.com/api/facts?number=50")
    .then(response => response.json())
    .then(data => {
        const facts = data.facts
        return facts
    })
}