let numberfact = document.getElementById("numberfact");
let numberinput = document.getElementById("numberinput");
let numbercontainer = document.getElementById("numbercontainer");
numberinput.addEventListener("input", () => {
  let numberfacttext = numberinput.value;

  // With Ajax
  // let request =new XMLHttpRequest();
  // request.open('GET' , `https://numbersapi.com/${numberfacttext}`)
  // request.onload = function(){
  //   if (this.status = '200' && numberfacttext != '') {
  //     let response = this.responseText;
  //     numbercontainer.style.display = 'block';
  //     numberfact.innerHTML = response;
  //   } else {
  //     numbercontainer.style.display = 'none';
  //   }
  // }
  // ()request.send

  // With Fetch api***
  fetch(`https://numbersapi.com/${numberfacttext}`)
    .then((response) => response.text())
    .then((data) => {
      if (numberfacttext != "") {
        numbercontainer.style.display = "block";
        numberfact.innerHTML = data;
      } else {
        console.error("Enter a number");
      }
    });
});

// Year fact
let yearfact = document.getElementById("yearfact");
let yearinput = document.getElementById("yearinput");
let yearcontainer = document.getElementById("yearcontainer");
yearinput.addEventListener("input", () => {
  let yearfacttext = yearinput.value;
  //   let request = new XMLHttpRequest();
  //   request.open("GET", `https://numbersapi.com/${yearfacttext}/year`);
  //   request.onload = function () {
  //       if (this.status = '200' && yearfacttext != '') {
  //           let data = this.responseText;
  //           yearcontainer.style.display = 'block';
  //           yearfact.innerText = data;
  //         } else {
  //           yearcontainer.style.display = 'none';
  //       }
  //   };
  //   request.send();

  //   Fetch api
  fetch(`https://numbersapi.com/${yearfacttext}/year`)
    .then((response) => response.text())
    .then((data) => {
     if (yearfacttext != '') {
        yearcontainer.style.display = "block";
        yearfact.innerText = data;
    } else {
        yearcontainer.style.display = "none";
     }
    });
});
