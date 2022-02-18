let btnArtış = document.querySelectorAll(".button-artış");
let btnAzalış = document.querySelectorAll(".button-azalış");
// let subTotal = document.getElementById("container-div2-div-subtotal");
// let tax = document.getElementById("container-div2-div-tax");
// let total = document.getElementById("container-div2-div-total");


let subTotal = 146.96;
let tax = 26.45;
let shipping = 15.00;
let total = 188.91;

let miktarartış = 1;
btnArtış.forEach((event) => {
    event.addEventListener("click",(e) => {

        miktarartış = event.parentElement.querySelector(".miktar").innerHTML++;
        event.parentElement.parentElement.querySelector(".p-total").innerHTML = parseFloat(event.parentElement.parentElement.querySelector(".container-div-span-orange").innerHTML * (miktarartış + 1)).toFixed(2);


        subTotal += parseFloat(event.parentElement.parentElement.querySelector(".container-div-span-orange").innerHTML);
        document.getElementById("container-div2-div-subtotal").innerHTML = subTotal.toFixed(2);

        tax += (parseFloat(event.parentElement.parentElement.querySelector(".container-div-span-orange").innerHTML) * 0.18);

        document.getElementById("container-div2-div-tax").innerHTML = tax.toFixed(2);
        console.log(tax);

        total = (subTotal + tax + shipping)
        document.getElementById("container-div2-div-total").innerHTML = total.toFixed(2);
        
    });

})

