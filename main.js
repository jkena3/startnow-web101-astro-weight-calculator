// Write your JavaScript code here!
//content of drop down list
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  var planets1 = planets.reverse();

//populate drop down list
planets1.forEach(popList);

function popList(item) {
  var o = document.createElement("option");
  o.value = item[0];
  document.getElementById("planets").appendChild(o).textContent = item[0];
}

//return weight function
function calculateWeight(weight, planetName) {
  // 2. Write the code to return the correct weight
  var planetName = document.getElementById("planets").selectedIndex;
  var newGravity = planets[planetName][1];
    
  return weight * newGravity;
}

//onclick function for #calculate-button
function handleClickEvent() {
  // 3. Create a variable called userWeight and assign the value of the user's weight.
  var weight = parseFloat(document.getElementById("user-weight").value);
  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  var planetName = document.getElementById("planets").value;
  // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = calculateWeight(weight, planetName);
  // 6. Write code to display the message shown in the screenshot.
  document.getElementById("output").innerHTML = "If you were on " + planetName + ',' + ' you would weigh ' + result + 'lbs!';
 
}
//checkbox will remove and add Pluto to dropdown 
function hidePluto() {
//nth-child starts at 1, not 0(as in an array)
  $("select option:nth-child(11)").hide();
}

function showPluto() {
  $("select option:nth-child(11)").show();
}

function checkPluto() {
   if (document.getElementById("checkBox").checked) {
    hidePluto();
    console.log('checked')
  } else {
    showPluto();
    console.log('unchecked')
  }
}

//add new planets and their mulitipliers
function addNewPlanet() {
//insert new planets/mulitpliers into planets array
  var newPlanet = document.getElementById("newPlanet").value;
  var newMultiplier = document.getElementById("newMultiplier").value;
  planets.push([newPlanet, newMultiplier]);
//create option, add value and new planets to dropdown list  
  var o = document.createElement("option");
  o.value = newPlanet;
  document.getElementById("planets").appendChild(o).textContent = newPlanet;
//reset value to placeholder  
  document.getElementById("newPlanet").value = "";
  document.getElementById("newMultiplier").value = "";
}



