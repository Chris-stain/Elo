//This method is called when a user clicks the 'Request' button
function locations() {
    var x = document.getElementById("spots");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    
    var y = document.getElementById("pickups");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    
}

//This method is called when a user clicks the 'PickUp' button
function picked() {
    var x = document.getElementById("pickups");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    
    var y = document.getElementById("spots");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    
}


// This method is called when a user clicks on a parking lot option
function info(location) {
    var locations = ["nutwood", "state", "east", "ag"]
//   var x = document.getElementById(location);
    locations.forEach(function(element){
    var x = document.getElementById(element);
        if(element === location){
           x.style.display = "block";
           }
        else
             x.style.display = "none";
    })
       
}