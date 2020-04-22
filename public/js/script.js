var l = document.querySelector('#location')
var destination = document.querySelector('#destination')
var day = document.querySelector('#day')
var month = document.querySelector('#month')
var hour = document.querySelector('#hour')
var minuten = document.querySelector('#minuten')
var submitButton = document.querySelector('button')

l.focus();

function arrowLeft () {
    let leftArrow = document.querySelector('#left-con')
    leftArrow.classList.add("active")
    let rightArrow = document.querySelector('#right-con')
    rightArrow.classList.remove("active")
}
function arrowRight () {
    let rightArrow = document.querySelector('#right-con')
    rightArrow.classList.add("active")
    let leftArrow = document.querySelector('#left-con')
    leftArrow.classList.remove("active")
    
}
//destinationTab
l.addEventListener('keydown', function(lTab){
    // arrow left
    if (lTab.which == 37) {
        document.querySelector('button').focus();
        arrowLeft()
        return false;
    }//arrowright
     else if (lTab.which === 39) {
        document.getElementById("destination").focus();
        arrowRight()
        return false;
    }
})

//destinationTab
destination.addEventListener('keydown', function(destinationTab){
    // arrow left
    if (destinationTab.which == 37) {
        document.getElementById("location").focus();
        arrowLeft()
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
        arrowLeft()
        return false;
    }//arrowright
     else if (dayTab.which === 39) {
        document.getElementById("month").focus();
        arrowRight()
        return false;
    }
})
month.addEventListener('keydown', function(monthTab){
    // arrow left
    if (monthTab.which == 37) {
        document.getElementById("day").focus();
        arrowLeft()
        return false;
    }//arrowright
     else if (monthTab.which === 39) {
        document.getElementById("hour").focus();
        arrowRight()
        return false;
    }
})
hour.addEventListener('keydown', function(hourTab){
    // arrow left
    if (hourTab.which == 37) {
        document.getElementById("month").focus();
        arrowLeft()
        return false;
    }//arrowright
     else if (hourTab.which === 39) {
        document.getElementById("minuten").focus();
        arrowRight()
        return false;
    }
})
minuten.addEventListener('keydown', function(minutenTab){
    // arrow left
    if (minutenTab.which == 37) {
        document.getElementById("hour").focus();
        arrowLeft()
        return false
    }//arrowright
     else if (minutenTab.which === 39) {
        document.querySelector('button').focus();
        arrowRight()
        return false;
    }
})

submitButton.addEventListener('keydown', function(submitButtonTab){
    // arrow left
    if (submitButtonTab.which == 37) {
        document.getElementById("minuten").focus();
        arrowLeft()
        return false
    }//arrowright
     else if (submitButtonTab.which === 39) {
        document.getElementById("location").focus();
        arrowRight()
        return false;
    }
})

