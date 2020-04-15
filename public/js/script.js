const radio = document.querySelectorAll('input[type="number"]')



//day and month
  document.addEventListener('keydown', function(e){
    if (e.which === 65) {
        document.getElementById("month").focus();
        return false;
    }
    
})
document.addEventListener('keydown', function(e2){
    if (e2.which === 83) {
        document.getElementById("month").focus();
        return false;
    }
    
})
document.addEventListener('keydown', function(e3){
    if (e3.which === 74) {
        document.getElementById("day").focus();
        return false;
    }
    
})

document.addEventListener('keydown', function(e4){
    if (e4.which === 75) {
        document.getElementById("day").focus();
        return false;
    }
    
})


//hour and min

// document.addEventListener('keydown', function(x1){
//     if (x1.which === 65) {
//         document.getElementById("hour").focus();
//         return false;
//     }
    
// })
// document.addEventListener('keydown', function(x2){
//     if (x2.which === 83) {
//         document.getElementById("hour").focus();
//         return false;
//     }
    
// })
// document.addEventListener('keydown', function(x3){
//     if (x3.which === 74) {
//         document.getElementById("minutes").focus();
//         return false;
//     }
    
// })

// document.addEventListener('keydown', function(x4){
//     if (x4.which === 75) {
//         document.getElementById("minutes").focus();
//         return false;
//     }
    
// })
// https://stackoverflow.com/questions/10537558/how-to-force-enter-key-to-act-as-tab-key-using-javascript