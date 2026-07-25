const uselessAPIEndpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
const catFactsAPIEndpoint = 'https://catfact.ninja/fact';
const pokemonFactsAPIEndpoint = 'https://pokefacts.vercel.app/';

const uselessFactDiv, catFactDiv, pokemonFactDiv;

const init = () => {
  uselessFactDiv = document.querySelector('#uselessContent');
  catFactDiv = document.querySelector('#catContent');
  pokemonFactDiv = document.querySelector('#pokemonContent');
};

const setUselessFact = async () => {
    const newFact = await fetchAPI(uselessAPIEndpoint);
    console.log(newFact);
    // uselessFactDiv.innerHTML
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