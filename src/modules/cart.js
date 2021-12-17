function cart() {
  const cartButton = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const cartCloseButton = cartModal.querySelector(".cart-close");

  function closeCart() {
    cartModal.style.display = "";
  }

  function openCart() {
    cartModal.style.display = "flex";
  }

  cartButton.addEventListener("click", openCart);

  cartCloseButton.addEventListener("click", closeCart);
}

export default cart;
