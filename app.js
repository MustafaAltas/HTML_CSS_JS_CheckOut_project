let artıEksi = document.querySelectorAll(".container-div-div");
let miktar = document.querySelectorAll(".miktar");

let miktarArtış;
let miktarAzalış;
let backBag = document.querySelector(".backbag");
let shoes = document.querySelector(".shoes");
let clock = document.querySelector(".clock");

for (let i = 0; i < artıEksi.length; i++) {
  artıEksi[i].addEventListener("click", (e) => {
    if (e.target.className === "button-artış") {
      miktarArtış = e.target.parentElement.querySelector(".miktar").innerHTML++;

      e.target.parentElement.parentElement.querySelector(".p-total").innerHTML =
        (
          parseFloat(
            e.target.parentElement.parentElement.querySelector(
              ".container-div-span-orange"
            ).innerHTML
          ) *
          (miktarArtış + 1)
        ).toFixed(2);


    } else if (e.target.className === "button-azalış") {
      miktarAzalış = e.target.parentElement.querySelector(".miktar")
        .innerHTML--;
      if (miktarAzalış < 1) {
        e.target.parentElement.querySelector(".miktar").innerText = 1;
      }
    }
  });
}
