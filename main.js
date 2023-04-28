const axios = require('axios');

// const main = async () => {
//     const film_request = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=af6b722d3135297e676918244a26d13f");
//     const film = film_request.data;
//     console.log(film);
//     console.log("Film Title = " + film)
// }

// let film2;
// axios.get("https://api.themoviedb.org/3/person/popular?api_key=af6b722d3135297e676918244a26d13f").then((data) => {
//     film2 = data;
// })

nomiAttori = new Array()
const main = async () => {
    const actor_request = await axios.get("https://api.themoviedb.org/3/person/popular?api_key=af6b722d3135297e676918244a26d13f");
    const actors_page = actor_request.data;
    const actors = actors_page.results;
    for (var actor in actors) {
     
    nomiAttori[actor]=(actors[actor].name);
    
    }
    console.log(nomiAttori);
}
main();

let i = 0
while (i < nomiAttori) {
    const main2 = async () => {
        const actor_request = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=af6b722d3135297e676918244a26d13f&language=en-US&page=1&include_adult=false&query=${nomiAttori[1]}`);
        const actor_page = actor_request.data;
        // console.log(actor_page);
        const actors = actor_page.results[0].known_for;
        // const actor_name = actor_page.results.name;      
        for (var actor in actors) {
            // console.log(actors[actor].title);
        }
    }
i++;
main2();
}




