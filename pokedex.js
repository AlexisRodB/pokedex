async function buscarPokemon(nombre) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
    
    const respuesta = await fetch(url);
    
    if (!respuesta.ok) {
        console.log("ta malo, codigo :", respuesta.status);
        return null;
    }
    return await respuesta.json();
}

async function iniciarPokedex() {
    const listaPokemones = ["pikachu", "charizard", "bulbasaur", "hola, me llamo miguel"];

    for (let nombre of listaPokemones) {
        console.log(`\nbuscando a: ${nombre}`);
        const datos = await buscarPokemon(nombre);

        if (datos !== null) {
            console.log("Name:", datos.name);
            console.log("ID:", datos.id);
            console.log("Height:", datos.height);
            console.log("Weight:", datos.weight);

            for (let t of datos.types) {
                console.log("tipo:", t.type.name);
            }

            for (let s of datos.stats) {
                console.log("stats", s.stat.name, s.base_stat);
            }

            for (let a of datos.abilities) {
                console.log("abilities :", a.ability.name);
            }
        } else {
            console.log("ese pokemon no da xd");
        }
    }
}
pokedex();