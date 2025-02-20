const input = document.querySelector("#textInput");
const btn = document.querySelector(".btn");
const qr_code = document.querySelector("#qrcode");

const generateQr_code = () => {
  const InputValue = input.value;
  if (InputValue === "") {
    window.alert("please provide some text as a input.");
    return;
  }

  qr_code.innerHTML = "";

  new QRCode(qr_code, {
    text: InputValue,
    width: 150,
    height: 150,
  });
};

btn.addEventListener("click", generateQr_code);

// function countWords(str) {
//   let count = 1;
//   for (let char of str) {
//     if (char === " ") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countWords("this is a bad habbit"));
