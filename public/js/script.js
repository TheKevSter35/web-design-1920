var l = document.querySelector('#location')
var destination = document.querySelector('#destination')
var day = document.querySelector('#day')
var month = document.querySelector('#month')
var hour = document.querySelector('#hour')
var minuten = document.querySelector('#minuten')
var submitButton = document.querySelector('button')

l.focus();

function arrowLeft() {
    let leftArrow = document.querySelector('#left-con')
    leftArrow.classList.add("active")
    setTimeout(function () {
        leftArrow.classList.remove("active")
    }, 250);
    // let rightArrow = document.querySelector('#right-con')
    // rightArrow.classList.remove("active")
}

function arrowRight() {
    let rightArrow = document.querySelector('#right-con')
    rightArrow.classList.add("active")
    setTimeout(function () {
        rightArrow.classList.remove("active")
    }, 250);

}

function Shiftbutton() {
    let Shiftbutton = document.querySelector('#shift-con')
    Shiftbutton.classList.add("active")
    setTimeout(function () {
        Shiftbutton.classList.remove("active")
    }, 250);

}

//location
l.addEventListener('keydown', function (lTab) {
    // arrow left
    if (lTab.shiftKey && lTab.keyCode == 37) {
        document.querySelector('button').focus();
        Shiftbutton()
        arrowLeft()
        return false;
    } //arrowright
    else if (lTab.shiftKey && lTab.keyCode == 39) {
        document.getElementById("destination").focus();
        Shiftbutton()
        arrowRight()
        return false;
    }
})

//destinationTab
destination.addEventListener('keydown', function (destinationTab) {
    // arrow left
    if (destinationTab.shiftKey && destinationTab.keyCode == 37) {
        document.getElementById("location").focus();
        Shiftbutton()
        arrowLeft()
        return false;
    } //arrowright
    else if (destinationTab.shiftKey && destinationTab.keyCode == 39) {
        document.getElementById("day").focus();
        Shiftbutton()
        arrowRight()
        return false;
    }
})

day.addEventListener('keydown', function (dayTab) {
    // arrow left
    if (dayTab.shiftKey && dayTab.keyCode == 37) {
        document.getElementById("destination").focus();
        Shiftbutton()
        arrowLeft()
        return false;
    } //arrowright
    else if (dayTab.shiftKey && dayTab.keyCode == 39) {
        document.getElementById("month").focus();
        Shiftbutton()
        arrowRight()
        return false;
    }
    else if (dayTab.which == 69 ) {
        dayTab.preventDefault();
    }
    else if (dayTab.which == 187 ) {
        dayTab.preventDefault();
    }
    else if (dayTab.which == 188 ) {
        dayTab.preventDefault();
    }
    else if (dayTab.which == 189 ) {
        dayTab.preventDefault();
    }
    else if (dayTab.which == 190 ) {
        dayTab.preventDefault();
    }
})
month.addEventListener('keydown', function (monthTab) {
    // arrow left
    if (monthTab.shiftKey && monthTab.keyCode == 37) {
        document.getElementById("day").focus();
        Shiftbutton()
        arrowLeft()
        return false;
    } //arrowright
    else if (monthTab.shiftKey && monthTab.keyCode == 39) {
        document.getElementById("hour").focus();
        Shiftbutton()
        arrowRight()
        return false;
    }
    else if (monthTab.which == 69 ) {
        monthTab.preventDefault();
    }
    else if (monthTab.which == 187 ) {
        monthTab.preventDefault();
    }
    else if (monthTab.which == 188 ) {
        monthTab.preventDefault();
    }
    else if (monthTab.which == 189 ) {
        monthTab.preventDefault();
    }
    else if (monthTab.which == 190 ) {
        monthTab.preventDefault();
    }
})
hour.addEventListener('keydown', function (hourTab) {
    // arrow left
    if (hourTab.shiftKey && hourTab.keyCode == 37) {
        document.getElementById("month").focus();
        Shiftbutton()
        arrowLeft()
        return false;
    } //arrowright
    else if (hourTab.shiftKey && hourTab.keyCode == 39) {
        document.getElementById("minuten").focus();
        Shiftbutton()
        arrowRight()
        return false;
    }
    else if (hourTab.which == 69 ) {
        hourTab.preventDefault();
    }
    else if (hourTab.which == 187 ) {
        hourTab.preventDefault();
    }
    else if (hourTab.which == 188 ) {
        hourTab.preventDefault();
    }
    else if (hourTab.which == 189 ) {
        hourTab.preventDefault();
    }
    else if (hourTab.which == 190 ) {
        hourTab.preventDefault();
    }
})


minuten.addEventListener('keydown', function (minutenTab) {
    // arrow left
    if (minutenTab.shiftKey && minutenTab.keyCode == 37) {
        document.getElementById("hour").focus();
        Shiftbutton()
        arrowLeft()
        return false
    } //arrowright
    else if (minutenTab.shiftKey && minutenTab.keyCode == 39) {
        document.querySelector('button').focus();
        Shiftbutton()
        arrowRight()
        return false;
    }
    else if (minutenTab.which == 69 ) {
        minutenTab.preventDefault();
    }
    else if (minutenTab.which == 187 ) {
        minutenTab.preventDefault();
    }
    else if (minutenTab.which == 188 ) {
        minutenTab.preventDefault();
    }
    else if (minutenTab.which == 189 ) {
        minutenTab.preventDefault();
    }
    else if (minutenTab.which == 190 ) {
        minutenTab.preventDefault();
    }
})

submitButton.addEventListener('keydown', function (submitButtonTab) {
    // arrow left
    if (submitButtonTab.shiftKey && submitButtonTab.keyCode == 37) {
        document.getElementById("minuten").focus();
        Shiftbutton()
        arrowLeft()
        return false
    } //arrowright
    else if (submitButtonTab.shiftKey && submitButtonTab.keyCode == 39) {
        document.getElementById("location").focus();
        Shiftbutton()
        arrowRight()
        return false;
    }
})

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}


function keyButtonOff () {
    
}