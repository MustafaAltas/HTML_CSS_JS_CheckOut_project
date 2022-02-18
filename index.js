let btnArtış = document.querySelectorAll(".button-artış");
let btnAzalış = document.querySelectorAll(".button-azalış");
let remove = document.querySelectorAll(".remove");
// let subTotal = document.getElementById("container-div2-div-subtotal");
// let tax = document.getElementById("container-div2-div-tax");
// let total = document.getElementById("container-div2-div-total");

let subTotal = 146.96;
let tax = 26.45;
let shipping = 15.0;
let total = 188.91;
let miktarartış;
let miktarazalış;
btnArtış.forEach((event) => {
  event.addEventListener("click", (e) => {

    miktarartış = event.parentElement.querySelector(".miktar").innerHTML++;
    event.parentElement.parentElement.querySelector(".p-total").innerHTML =
      parseFloat(
        event.parentElement.parentElement.querySelector(
          ".container-div-span-orange"
        ).innerHTML *
          (miktarartış + 1)
      ).toFixed(2);

    subTotal += parseFloat(
      event.parentElement.parentElement.querySelector(
        ".container-div-span-orange"
      ).innerHTML
    );
    document.getElementById("container-div2-div-subtotal").innerHTML =
      subTotal.toFixed(2);

    tax +=
      parseFloat(
        event.parentElement.parentElement.querySelector(
          ".container-div-span-orange"
        ).innerHTML
      ) * 0.18;

    document.getElementById("container-div2-div-tax").innerHTML =
      tax.toFixed(2);

    total = subTotal + tax + shipping;
    document.getElementById("container-div2-div-total").innerHTML =
      total.toFixed(2);
  });
});

btnAzalış.forEach((event) => {
  event.addEventListener("click", () => {

    miktarazalış = event.parentElement.querySelector(".miktar").innerHTML--;
    
    event.parentElement.parentElement.querySelector(".p-total").innerHTML =
      parseFloat(
        event.parentElement.parentElement.querySelector(
          ".container-div-span-orange"
        ).innerHTML *
          (miktarazalış - 1)
      ).toFixed(2);

    if (miktarazalış > 1) {
      subTotal -= parseFloat(
        event.parentElement.parentElement.querySelector(
          ".container-div-span-orange"
        ).innerHTML
      );
      document.getElementById("container-div2-div-subtotal").innerHTML =
        subTotal.toFixed(2);

      tax -=
        parseFloat(
          event.parentElement.parentElement.querySelector(
            ".container-div-span-orange"
          ).innerHTML
        ) * 0.18;
      document.getElementById("container-div2-div-tax").innerHTML =
        tax.toFixed(2);

      total = subTotal + tax + shipping;
      document.getElementById("container-div2-div-total").innerHTML =
        total.toFixed(2);
    }

    if (miktarazalış < 2) {
      event.parentElement.querySelector(".miktar").innerHTML = 1;
    }
  });
});

remove.forEach((event) => {
  event.addEventListener("click", () => {
    event.parentElement.querySelector(".miktar").innerHTML = 1;
    event.parentElement.querySelector(".p-total").innerHTML =
      event.parentElement.querySelector(".container-div-span-orange").innerHTML;

    document.getElementById("container-div2-div-subtotal").innerHTML -=
      event.parentElement.querySelector(".container-div-span-orange").innerHTML;
  });
});
