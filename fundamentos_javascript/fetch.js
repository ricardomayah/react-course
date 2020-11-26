const fetch = require('node-fetch')

/*fetch('https://pokeapi.co/api/v2/pokemon/')
.then( res => res.json())
.then( data => {
    console.log(data.results)

    data.results.forEach(element => {
        console.log(element)
    });
}) */

const obetenerPokemones = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      console.log(data.result);
    } catch (error) {}
  };
  
  obetenerPokemones();