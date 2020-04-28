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
    setTimeout(function(){  leftArrow.classList.remove("active") }, 250);
    // let rightArrow = document.querySelector('#right-con')
    // rightArrow.classList.remove("active")
}
function arrowRight () {
    let rightArrow = document.querySelector('#right-con')
    rightArrow.classList.add("active")
    setTimeout(function(){  rightArrow.classList.remove("active") }, 250);
    
}
function Shiftbutton () {
    let Shiftbutton = document.querySelector('#shift-con')
    Shiftbutton.classList.add("active")
    setTimeout(function(){  Shiftbutton.classList.remove("active") }, 250);
    
}
//location
l.addEventListener('keydown', function(lTab){
    // arrow left
    if (lTab.shiftKey && lTab.keyCode == 37) {
        document.querySelector('button').focus();
        arrowLeft()
        return false;
    }//arrowright
     else if (lTab.shiftKey && lTab.keyCode == 39) {
        document.getElementById("destination").focus();
        arrowRight()
        return false;
    }
})

//destinationTab
destination.addEventListener('keydown', function(destinationTab){
    // arrow left
    if (destinationTab.shiftKey && destinationTab.keyCode == 37) {
        document.getElementById("location").focus();
        arrowLeft()
        return false;
    }//arrowright
     else if (destinationTab.shiftKey && destinationTab.keyCode == 39) {
        document.getElementById("day").focus();
        return false;
    }
})

day.addEventListener('keydown', function(dayTab){
    // arrow left
    if (dayTab.shiftKey && dayTab.keyCode == 37) {
        document.getElementById("destination").focus();
        arrowLeft()
        return false;
    }//arrowright
     else if (dayTab.shiftKey && dayTab.keyCode == 39) {
        document.getElementById("month").focus();
        arrowRight()
        return false;
    }
})
month.addEventListener('keydown', function(monthTab){
    // arrow left
    if (monthTab.shiftKey && monthTab.keyCode == 37) {
        document.getElementById("day").focus();
        arrowLeft()
        return false;
    }//arrowright
     else if (monthTab.shiftKey && monthTab.keyCode == 39) {
        document.getElementById("hour").focus();
        arrowRight()
        return false;
    }
})
hour.addEventListener('keydown', function(hourTab){
    // arrow left
    if (hourTab.shiftKey && hourTab.keyCode == 37) {
        document.getElementById("month").focus();
        arrowLeft()
        return false;
    }//arrowright
     else if (hourTab.shiftKey && hourTab.keyCode ==  39) {
        document.getElementById("minuten").focus();
        arrowRight()
        return false;
    }
})
minuten.addEventListener('keydown', function(minutenTab){
    // arrow left
    if (minutenTab.shiftKey && minutenTab.keyCode == 37) {
        document.getElementById("hour").focus();
        arrowLeft()
        return false
    }//arrowright
     else if (minutenTab.shiftKey && minutenTab.keyCode == 39) {
        document.querySelector('button').focus();
        arrowRight()
        return false;
    }
})

submitButton.addEventListener('keydown', function(submitButtonTab){
    // arrow left
    if (submitButtonTab.shiftKey && submitButtonTab.keyCode == 37) {
        document.getElementById("minuten").focus();
        arrowLeft()
        return false
    }//arrowright
     else if (submitButtonTab.shiftKey && submitButtonTab.keyCode == 39) {
        document.getElementById("location").focus();
        arrowRight()
        return false;
    }
})

function maxLengthCheck(object)
                        {
                          if (object.value.length > object.maxLength)
                            object.value = object.value.slice(0, object.maxLength)
                        }