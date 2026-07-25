const uselessAPIEndpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
const catFactsAPIEndpoint = 'https://catfact.ninja/fact';
const pokemonFactsAPIEndpoint = 'https://pokefacts.vercel.app/';

const init = () => {
  const uselessFactDiv = document.querySelector('#uselessContent');
  const catFactDiv = document.querySelector('#catContent');
  const pokemonFactDiv = document.querySelector('#pokemonContent');

  console.log(uselessFactDiv);
  console.log(catFactDiv);
  console.log(pokemonFactDiv);

  console.log(await fetchAPI(uselessAPIEndpoint));
  console.log(await fetchAPI(catFactsAPIEndpoint));
  console.log(await fetchAPI(pokemonFactsAPIEndpoint));
};

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