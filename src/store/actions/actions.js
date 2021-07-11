import axios from "axios";

export default {
  GET_ANIMALS_FROM_API({ commit }) {
    const urlMain = "http://contest.elecard.ru/frontend_data/catalog.json";
    return axios(urlMain, {
      method: "GET",
    })
      .then((response) => {
        commit("SET_ANIMALS_TO_STATE", response.data.results);
        return response;
      })
      .finally(() =>
        console.log(
          "%cData animals loading is complete on VueX",
          "background: #0096d3; color: #FFFFFFFF"
        )
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  },
};
