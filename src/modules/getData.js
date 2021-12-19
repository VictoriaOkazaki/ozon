const getData = (str) => {
  return fetch(
    `https://o-zon-88e33-default-rtdb.firebaseio.com/goods.json`
  ).then((responce) => {
    return responce.json();
  });
};

export default getData;
