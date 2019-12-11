// Write your JavaScript code here!

window.addEventListener("load", function(){
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      // alert("Clicked!");
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName"); 
      let fuelLevel = document.getElementById("fuelLevel"); 
      let cargoMass = document.getElementById("cargoMass"); 
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required");
         event.preventDefault();
         if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value))  {
            alert ("Correct inputs are required.");
            event.preventDefault();
            };
         }
            if (fuelLevel = "") {
               // const launchStatus = document.getElementById("launchStatus");
               const faultyItems = document.getElementById("faultyItems");
               faultyItems.style.visibility = "visible"; 
               // fuelStatus.innerHTML = "There is not enough fuel for the journey.";
               // launchStatus.innerHTML = "Shuttle not ready for launch"
               // launchStatus.style.color = "red";  
            }             
      // if (cargoMass > 10,000) {
      // }
   
   })


});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
