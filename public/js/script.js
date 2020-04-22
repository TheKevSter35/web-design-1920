var l = document.querySelector('#location')
var destination = document.querySelector('#destination')
var day = document.querySelector('#day')
var month = document.querySelector('#month')
var hour = document.querySelector('#hour')
var minuten = document.querySelector('#minuten')
var submitButton = document.querySelector('button')

l.focus();
//destinationTab
l.addEventListener('keydown', function(lTab){
    // arrow left
    if (lTab.which == 37) {
        document.querySelector('button').focus();
        return false;
    }//arrowright
     else if (lTab.which === 39) {
        document.getElementById("destination").focus();
        return false;
    }
})

//destinationTab
destination.addEventListener('keydown', function(destinationTab){
    // arrow left
    if (destinationTab.which == 37) {
        document.getElementById("location").focus();
        return false;
    }//arrowright
     else if (destinationTab.which === 39) {
        document.getElementById("day").focus();
        return false;
    }
})

day.addEventListener('keydown', function(dayTab){
    // arrow left
    if (dayTab.which == 37) {
        document.getElementById("destination").focus();
        return false;
    }//arrowright
     else if (dayTab.which === 39) {
        document.getElementById("month").focus();
        return false;
    }
})
month.addEventListener('keydown', function(monthTab){
    // arrow left
    if (monthTab.which == 37) {
        document.getElementById("day").focus();
        return false;
    }//arrowright
     else if (monthTab.which === 39) {
        document.getElementById("hour").focus();
        return false;
    }
})
hour.addEventListener('keydown', function(hourTab){
    // arrow left
    if (hourTab.which == 37) {
        document.getElementById("month").focus();
        return false;
    }//arrowright
     else if (hourTab.which === 39) {
        document.getElementById("minuten").focus();
        return false;
    }
})
minuten.addEventListener('keydown', function(minutenTab){
    // arrow left
    if (minutenTab.which == 37) {
        document.getElementById("hour").focus();
        return false
    }//arrowright
     else if (minutenTab.which === 39) {
        document.querySelector('button').focus();
        return false;
    }
})

submitButton.addEventListener('keydown', function(submitButtonTab){
    // arrow left
    if (submitButtonTab.which == 37) {
        document.getElementById("minuten").focus();
        return false
    }//arrowright
     else if (submitButtonTab.which === 39) {
        document.getElementById("location").focus();
        return false;
    }
})

//daytabs
// day.addEventListener('keydown', function(dayTab){
//     // a
//     if (dayTab.which === 65) {
//         document.getElementById("destination").focus();
//         return false;
//     }//s
//      else if (dayTab.which === 83) {
//         document.getElementById("destination").focus();
//         return false;
//     }//d
//     else if (dayTab.which === 68) {
//         document.getElementById("destination").focus();
//         return false;
//     } //f
//     else if (dayTab.which === 70) {
//         document.getElementById("destination").focus();
//         return false;
//     }
//     // h
//     else if (dayTab.which === 72) {
//         document.getElementById("month").focus();
//         return false;
//     }//j
//      else if (dayTab.which === 74) {
//         document.getElementById("month").focus();
//         return false;
//     }//k
//     else if (dayTab.which === 75) {
//         document.getElementById("month").focus();
//         return false;
//     } //l
//     else if (dayTab.which === 76) {
//         document.getElementById("month").focus();
//         return false;
//     }
// })

// //daytabs
// day.addEventListener('keydown', function(dayTab){
//     // a
//     if (dayTab.which === 65) {
//         document.getElementById("destination").focus();
//         return false;
//     }//s
//      else if (dayTab.which === 83) {
//         document.getElementById("destination").focus();
//         return false;
//     }//d
//     else if (dayTab.which === 68) {
//         document.getElementById("destination").focus();
//         return false;
//     } //f
//     else if (dayTab.which === 70) {
//         document.getElementById("destination").focus();
//         return false;
//     }
//     // h
//     else if (dayTab.which === 72) {
//         document.getElementById("month").focus();
//         return false;
//     }//j
//      else if (dayTab.which === 74) {
//         document.getElementById("month").focus();
//         return false;
//     }//k
//     else if (dayTab.which === 75) {
//         document.getElementById("month").focus();
//         return false;
//     } //l
//     else if (dayTab.which === 76) {
//         document.getElementById("month").focus();
//         return false;
//     }
// })

// s button
//day 
// const day = document.getElementById("day")
// day.addEventListener('keydown', function(e2){
//     if (e2.which === 83) {
//         document.getElementById("month").focus();
//         return false;
//     }
    
// })
// D button
//day 

// H button


// var dt = new Date();
// dt.setHours( dt.getHours() + 1 );
// document.write( dt );
// console.log(dt)