import renderCart from "./renderCart";
import postData from "./postData";

function cart() {
  const cartButton = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const cartCloseButton = cartModal.querySelector(".cart-close");
  const cartTotal = cartModal.querySelector(".cart-total > span");
  const cartSend = cartModal.querySelector(".cart-confirm");
  const goodsWrapper = document.querySelector(".goods");
  const cartWrapper = document.querySelector(".cart-wrapper");

  function closeCart() {
    cartModal.style.display = "";
  }

  function openCart() {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    cartModal.style.display = "flex";

    renderCart(cart);
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
  }

  cartButton.addEventListener("click", openCart);

  cartCloseButton.addEventListener("click", closeCart);

  goodsWrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
      const card = event.target.closest(".card");
      const key = card.dataset.key;

      const goods = JSON.parse(localStorage.getItem("goods"));
      let cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      const goodItem = goods.find((item, index) => {
        if (index === Number(key)) {
          return item;
        } else {
          return null;
        }
      });

      cart.push(goodItem);

      localStorage.setItem("cart", JSON.stringify(cart));
      const goodsCounterObj = document.querySelector(".counter");
      const goodsCounter = Number(goodsCounterObj.innerHTML);

      goodsCounterObj.innerHTML = goodsCounter + 1;
    }
  });

  cartWrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
      let cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      const card = event.target.closest(".card");
      const key = card.dataset.key;
      const index = cart.find((item, index) => {
        if (index === Number(key)) return item;
      });

      const toDeleteIndex = cart.indexOf(index);
      cart.splice(toDeleteIndex, 1);
      localStorage.setItem("cart", JSON.stringify(cart));

      renderCart(cart);
      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);

      const goodsCounterObj = document.querySelector(".counter");
      const goodsCounter = Number(goodsCounterObj.innerHTML);
      goodsCounterObj.innerHTML = goodsCounter - 1;
    }
  });

  cartSend.addEventListener("click", () => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    postData(cart).then(() => {
      localStorage.removeItem("cart");

      renderCart([]);
      cartTotal.textContent = 0;

      const goodsCounterObj = document.querySelector(".counter");
      goodsCounterObj.textContent = 0;
    });
  });
}

export default cart;
