import getData from "./getData";
import postData from "./postData";

const second = () => {
  getData().then((data) => {
    console.log(data);
  });
};

export default second;
