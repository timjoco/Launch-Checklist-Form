// Write your JavaScript code here!

window.addEventListener("load", function(){
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName"); 
      let fuelLevel = document.getElementById("fuelLevel"); 
      let cargoMass = document.getElementById("cargoMass"); 
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required");
         event.preventDefault(); 
         } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value))  {
            alert ("Correct inputs are required.");
            event.preventDefault();
            } else {
               event.preventDefault();
               const faultyItems = document.getElementById("faultyItems");
               const pilotStatus = document.getElementById("pilotStatus");
               const copilotStatus = document.getElementById("copilotStatus");
               faultyItems.style.visibility = "visible";
               pilotStatus.innerHTML = `Name: ${pilotName.value}`;
               copilotStatus.innerHTML = `Co-Pilot Name: ${copilotName.value}`;
               };           

      if (fuelLevel.value < 10000) {
         const fuelStatus = document.getElementById("fuelStatus");
         const launchStatus = document.getElementById("launchStatus");       
         fuelStatus.innerHTML = "There is not enough fuel for the journey.";
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red";  
            } else if (cargoMass.value > 10000) {
               const cargoStatus = document.getElementById("cargoStatus"); 
               const launchStatus = document.getElementById("launchStatus"); 
               cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
               launchStatus.innerHTML = "Shuttle not ready for launch"
               launchStatus.style.color = "red";  
                  } else {
                     launchStatus.innerHTML = "Shuttle is ready for launch!";
                     launchStatus.style.color ="green";
                  };
         


   });


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
