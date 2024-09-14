
/*
Name: James Kersey
Date: 9/13/24
Program name: Unit 2 - Mario Project 1
Description: 

Demonstrates:  
*/

//Variables _________________________________________________________________
let height = prompt("Enter pyramid height: ");
let rowStr = "";
//Constant _________________________________________________________________

//Main ______________________________________________________________________
for (let i = 1; i <= height; i++) {
  // print spaces
  for (let j = 0; j < height - i; j++) {
    rowStr += ".";
  }
  // print "blocks"
  for (let k = 0; k < i; k++) {
    rowStr += "#";
  }
  rowStr += "\n";
}
let para = document.createElement("p");
let node = document.createTextNode(rowStr);
para.appendChild(node);
let element = document.getElementById("pyramid").innerText=rowStr;


console.log(rowStr);