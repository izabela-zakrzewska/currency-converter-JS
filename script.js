const axios = require("axios");

let getData = async () => {
  let responseEUR = await axios.get(
    "https://api.nbp.pl/api/exchangerates/rates/a/eur/"
  );
  let responseUSD = await axios.get(
    "https://api.nbp.pl/api/exchangerates/rates/a/usd/"
  );
  let responseCHF = await axios.get(
    "https://api.nbp.pl/api/exchangerates/rates/a/chf/"
  );

  let amountFromInput = document.querySelector("#input");
  let optionEUR = document.querySelector("#eur");
  let optionUSD = document.querySelector("#usd");
  let optionCHF = document.querySelector("#chf");
  let finalAmount = 0;

  if (optionEUR) {
    finalAmount = amountFromInput.value * responseEUR.data.rates[0].mid;
  } else if (optionUSD) {
    finalAmount = amountFromInput.value * responseUSD.data.rates[0].mid;
  } else if (optionCHF) {
    finalAmount = amountFromInput.value * responseCHF.data.rates[9].mid;
  }

  document.querySelector("#finalAmount").innerHTML =
    "to " + finalAmount + " PLN";
};

document.querySelector("#button").addEventListener("click", getData);
