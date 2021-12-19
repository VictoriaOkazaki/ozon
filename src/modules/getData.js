const getData = () => {
  return fetch(
    "https://o-zon-88e33-default-rtdb.firebaseio.com/goods.json"
  ).then((responce) => {
    return responce.json();
  });
};
//     .then((data) => {
//       console.log(data);
//     });
// };
export default getData;
