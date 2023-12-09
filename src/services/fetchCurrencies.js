const URL = "https://api.frankfurter.app/currencies";

const fetchCurrencies = fetch(URL)
  .then(response => response.json())
  .catch(error => {
    console.error(`An error occured. Info message: ${error.message}`);
    alert("An error occured while fetching data.");
  });

export { fetchCurrencies };