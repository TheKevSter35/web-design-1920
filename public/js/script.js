const radio = document.querySelectorAll('input[type="number"]')



//day and month
// a button
  document.addEventListener('keydown', function(e){
    if (e.which === 65) {
        document.getElementById("month").focus();
        return false;
    }
    
})
// s button
document.addEventListener('keydown', function(e2){
    if (e2.which === 83) {
        document.getElementById("month").focus();
        return false;
    }
    
})
// j button
document.addEventListener('keydown', function(e3){
    if (e3.which === 74) {
        document.getElementById("day").focus();
        return false;
    }
    
})
//k button
document.addEventListener('keydown', function(e4){
    if (e4.which === 75) {
        document.getElementById("day").focus();
        return false;
    }
    
})


// var dt = new Date();
// dt.setHours( dt.getHours() + 1 );
// document.write( dt );
// console.log(dt)