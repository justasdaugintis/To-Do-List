//buttons to select and enter text to...
document.querySelector('.btn1').addEventListener ('click', function(){

    document.querySelector('.btn1').textContent = prompt ("Enter your task")

    document.querySelector('.btn2').style.display = "block"
  
})

document.querySelector('.btn2').addEventListener ('click', function(){

    document.querySelector('.btn3').style.display = "block"

    document.querySelector('.btn2').textContent = prompt ("Enter your task")
})

document.querySelector('.btn3').addEventListener ('click', function(){

    document.querySelector('.btn3').textContent = prompt ("Enter your task")
    document.querySelector('.btn4').style.display = "block"

})


document.querySelector('.btn4').addEventListener ('click', function(){

    document.querySelector('.btn4').textContent = prompt ("Enter your task")
    document.querySelector('.btn5').style.display = "block"
})

document.querySelector('.btn5').addEventListener ('click', function(){

    document.querySelector('.btn5').textContent = prompt ("Enter your task")
    document.querySelector('.btn6').style.display = "block"
})

document.querySelector('.btn2').style.display = "none"
document.querySelector('.btn3').style.display = "none"
document.querySelector('.btn4').style.display = "none"
document.querySelector('.btn5').style.display = "none"
document.querySelector('.btn6').style.display = "none"
document.querySelector('.btn7').style.display = "none"
