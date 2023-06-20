export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "53928ed72amsh9cb6884fbfd7201p198827jsn5c1f1c08466e",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
