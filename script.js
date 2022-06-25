// document.getElementById("name").innerHTML = "<strong>Name</strong>: Agbetile Toluwase <p><strong>Height</strong>: 5.2 foot</p>";
// document.write("<strong>Country</strong>: Nigeria")
var num1 = parseInt(prompt('input Number: '))
var operator = prompt('Operator: ')
var num2 = parseInt(prompt('input Number: '))

if(operator == '+'){
    console.log(num1 + num2)
    alert(num1 + num2)
}
else if(operator == '*'){
    console.log(num1 * num2)
    alert(num1 * num2)
}
else if(operator == '/'){
    console.log(num1 / num2)
    alert(num1 / num2)
}
else if(operator == '-'){
    console.log(num1 - num2)
    alert(num1 - num2)
}
else {
    alert('<strong>Put a correct operator!</strong>')
}