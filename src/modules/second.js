import getData from "./getData";

const second = () => {
  getData().then((data) => {
    console.log("data", data);
  });
};

export default second;
