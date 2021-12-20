import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";

const searchPrice = () => {
  const minPriceInput = document.getElementById("min");
  const maxPriceInput = document.getElementById("max");
  const checkBoxInput = document.getElementById("discount-checkbox");
  const checkBoxSpan = document.querySelector(".filter-check_checkmark");

  minPriceInput.addEventListener("input", (event) => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkBoxInput.checked),
          minPriceInput.value,
          maxPriceInput.value
        )
      );
    });
  });

  maxPriceInput.addEventListener("input", (event) => {
    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkBoxInput.checked),
          minPriceInput.value,
          maxPriceInput.value
        )
      );
    });
  });

  checkBoxInput.addEventListener("change", () => {
    if (checkBoxInput.checked) {
      checkBoxSpan.classList.add("checked");
    } else {
      checkBoxSpan.classList.remove("checked");
    }

    getData().then((data) => {
      renderGoods(
        priceFilter(
          hotSaleFilter(data, checkBoxInput.checked),
          minPriceInput.value,
          maxPriceInput.value
        )
      );
    });
  });
};

export default searchPrice;
