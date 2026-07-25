const uselessAPIEndpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
const catFactsAPIEndpoint = 'https://catfact.ninja/fact';
const pokemonFactsAPIEndpoint = 'https://pokefacts.vercel.app/';

var uselessFactDiv;
var catFactDiv;
var pokemonFactDiv;

const init = () => {
  uselessFactDiv = document.querySelector('#uselessContent');
  catFactDiv = document.querySelector('#catContent');
  pokemonFactDiv = document.querySelector('#pokemonContent');

  setUselessFact();
  setCatFact();
  setPokemonFact();
};

const setUselessFact = async () => {
    const newUselessFact = await fetchAPI(uselessAPIEndpoint);
    uselessFactDiv.innerHTML = '<p>' + newUselessFact.text + '</p>';
}

const setCatFact = async () => {
    const newCatFact = await fetchAPI(catFactsAPIEndpoint);
    catFactDiv.innerHTML = '<p>' + newCatFact.fact + '</p>';
}

const setPokemonFact = async () => {
    const newPokemonFact = await fetchAPI(pokemonFactsAPIEndpoint);
    pokemonFactDiv.innerHTML = '<p>' + newPokemonFact.data[0] + '</p>';
}

const fetchAPI = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('fetchAPI error:', error);
    throw error;
  }
};

window.addEventListener("load", function() {
    init();
});