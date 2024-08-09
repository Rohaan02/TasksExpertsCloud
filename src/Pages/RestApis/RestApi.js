import axios from "axios";

const options = {
  headers: {
    "x-rapidapi-key": "4674300342msh79e9dd17a7e5329p10bca3jsn211217ee566b",
    "x-rapidapi-host": "the-birthday-cake-db.p.rapidapi.com",
  },
};

export const getDataFromAPI = async () => {
  try {
    const response = await axios.get(
      "https://the-birthday-cake-db.p.rapidapi.com",
      options
    );
    const data = response.data;
    return data;
  } catch (e) {
  } finally {
  }
};

export const getDataFromAPIByID = async (id) => {
  try {
    const response = await axios.get(
      "https://the-birthday-cake-db.p.rapidapi.com/{id}",
      options
    );
    const data = response.data;
    return data;
  } catch (e) {
  } finally {
  }
};
