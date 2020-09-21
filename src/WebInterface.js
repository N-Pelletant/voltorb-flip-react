const { default: Axios } = require("axios");

const Interface = Axios.create({
  baseURL: "https://voltorbflip-cb2ce.firebaseio.com"
});

export default Interface;