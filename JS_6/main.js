// console.log(document.forms[0])
// console.log(document.forms.registration)
// let form = document.forms.registration

// console.log(form.elements[1])
// console.log(form.elements.email)
// let elem = form.elements.email

// for (let i of form.elements){
//     console.log(i)
// }

function calculate() { 
    let deposit = document.getElementById('deposit').value; 
    let interest = document.getElementById('interest').value; 
    let years = document.getElementById('years').value; 
    let total = deposit * Math.pow((1 + interest/100), years); 
    document.getElementById('result').innerText = `Сумма вклада будет составлять через ${years} лет  ${total.toFixed(2)} $.`; 
} 