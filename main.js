function locations() {
    var x = document.getElementById("spots");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function picked() {
    var x = document.getElementById("spots");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



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
//        if (x.style.display === "block") {
//           ;
//        } else {
//            x.style.display = "block";
//        }
}
//}
//function info2() {
//     var x = document.getElementById("state");
//    if (x.style.display === "block") {
//        x.style.display = "none";
//    } else {
//        x.style.display = "block";
//    }
//    
//}
//function info3() {
//     var x = document.getElementById("east");
//    if (x.style.display === "block") {
//        x.style.display = "none";
//    } else {
//        x.style.display = "block";
//    }
//    
//}
//function info4() {
//     var x = document.getElementById("ag");
//    if (x.style.display === "block") {
//        x.style.display = "none";
//    } else {
//        x.style.display = "block";
//    }
//    
//}