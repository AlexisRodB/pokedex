async function obtenerPokemon() {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    if (!respuesta.ok) {
        console.log("mal mal, codigo :", respuesta.status);
        return;
    }

    const datos = await respuesta.json();

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

}
obtenerPokemon();