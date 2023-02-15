'use strict'

// let heads=document.getElementsByTagName("h1");

// for (const item of heads) {
//     console.log(item)

// }

// let h1 = document.getElementById("header");
// console.log(h1)

// let h1=document.getElementsByClassName("header")
// console.log(h1)

// let elem = document.querySelector("#header1");
// console.log(elem)


// let elem = document.querySelectorAll("#header1");

// for (const item of elem) {

// }

// let h1 = document.querySelector("#products  .card-item2 h1:nth-child(2)")

// console.log(h1)

// let elem = document.querySelector("#products  .card-item1 h1")

// let elemText = elem.innerText;

// if(elemText=="salam"){
//     console.log("Correct")
// }


// let a = document.querySelector("#products  .card-item1 a")

// a.innerHTML= "<span>Roya</span>";

// console.log(a)

// let element = document.querySelector("#products  .card-item1 h1")

// element.style.color="red"
// element.style.backgroundColor="yellow"

// element.className="test"

// let element = document.querySelector("#products  .card-item1 h1")

// element.classList.add("active")


// let button= document.querySelector("#products .switch")

// button.onclick=function(){
//     alert("Clicked")
// }


// let button = document.querySelector("#products .on")

// button.onclick=function(){
//     alert("Clicked1")
// }

// button.onclick=function(){
//     alert("Clicked2")
// }


// button.addEventListener("click",function(){
//     alert("Clicked1")
// })

// button.addEventListener("click",function(event){
// //    this.style.backgroundColor="red"

// console.log(event.target.style.backgroundColor="red")
// })


// let btnOn = document.querySelector("#products .buttons .on");
// let btnOff = document.querySelector("#products .buttons .off");

// let body = document.querySelector("body");

// let icon = document.querySelector("#products .icon i");

// btnOn.addEventListener("click",function(){
//     body.style.backgroundColor="white"
//     icon.style.color="yellow"
// })

// btnOff.addEventListener("click",function(){
//     body.style.backgroundColor="black"
//     icon.style.color="gray"
// })




// icon.addEventListener("click", function () {

//     if (!this.classList.contains("active-icon")) {
//         this.classList.add("active-icon")
//         body.classList.add("active-body")
//     }
//     else {
//         this.classList.remove("active-icon")
//         body.classList.remove("active-body")
//     }
// })

// icon.addEventListener("mouseout",function(){
//     this.classList.remove("active-icon")
//     body.classList.remove("active-body")
// })


// icon.addEventListener("mouseover",function(){

//     this.classList.add("active-icon")
//     body.classList.add("active-body")
// })



// let btn= document.querySelector("#products button")
// let input= document.querySelector("#products input")

// let header=document.querySelector("#products h1")

// btn.addEventListener("click",function(){
//    let inputValue=input.value;
//    header.innerText=inputValue;
//    input.value="";

// })

{/* <li class="list-group-item">salam</li> */ }

let btn = document.querySelector("#products button")
let input = document.querySelector("#products input")
let ul = document.querySelector("#products ul")



btn.addEventListener("click", function () {

  if (input.value == "") {
    alert("Dont Empty ")

    return;
  }

  let items = document.querySelectorAll("li")

  for (const item of items) {
    if (item.innerText == input.value) {
      alert("Alredy exits")
      return;
    }

  }


  let li = document.createElement("li")
  li.className = "list-group-item mt-2";
  li.innerText = input.value;
  input.value = "";
  ul.append(li);


  let newLi = document.querySelectorAll("#products ul li");
  for (const item1 of newLi) {
    item1.addEventListener("click", function () {
      this.remove();
    })

  }




})





















