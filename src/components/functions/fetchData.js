export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c9b75948b5msh78d33928eab3caap1058ddjsnaa610b67e3a3",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
