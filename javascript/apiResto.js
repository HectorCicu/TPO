/** urls y opciones similares - 1  */

const currencies1 = "https://worldwide-restaurants.p.rapidapi.com/currencies";
const languages1 = "https://worldwide-restaurants.p.rapidapi.com/languages";
const options1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "150aee828dmsh20553604300cf28p122eebjsn77c12df002d4",
    "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
  },
};

/** ------------------------------  */
/** urls y opciones similares - 2  */
const reviews2 = "https://worldwide-restaurants.p.rapidapi.com/reviews";
const options2 = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "150aee828dmsh20553604300cf28p122eebjsn77c12df002d4",
    "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
  },
  body: new URLSearchParams({
    location_id: "15333482",
    language: "en_US",
    currency: "USD",
    offset: "0",
  }),
};

const typeahead3 = "https://worldwide-restaurants.p.rapidapi.com/typeahead";
const options3 = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "150aee828dmsh20553604300cf28p122eebjsn77c12df002d4",
    "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
  },
  body: new URLSearchParams({
    q: "band",
    language: "en_US",
  }),
};

const search4 = "https://worldwide-restaurants.p.rapidapi.com/search";
const options4 = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "150aee828dmsh20553604300cf28p122eebjsn77c12df002d4",
    "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
  },
  body: new URLSearchParams({
    language: "en_US",
    location_id: "297704",
    currency: "USD",
    offset: "0",
  }),
};

const detail5 = "https://worldwide-restaurants.p.rapidapi.com/detail";
const options5 = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "150aee828dmsh20553604300cf28p122eebjsn77c12df002d4",
    "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
  },
  body: new URLSearchParams({
    currency: "USD",
    language: "en_US",
    location_id: "15333482", //esta es una variable, el código del restaurante
  }),
};

const photos6 = "https://worldwide-restaurants.p.rapidapi.com/photos";
const options6 = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "150aee828dmsh20553604300cf28p122eebjsn77c12df002d4",
    "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
  },
  body: new URLSearchParams({
    location_id: "15333482",
    language: "en_US",
    currency: "USD",
    offset: "0",
  }),
};
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(reviews2, options2);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
