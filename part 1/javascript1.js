const $ = (selector) => document.querySelector(selector)

function processEntries(evt){
    evt.preventDefault(evt)
    
    const subAmount = parseFloat($('#subtotal').value);
    const taxRate = parseFloat($('#tax_rate').value)

    if ((subAmount <= 0) || (subAmount >= 10000)) {
        alert("Subtotal must be > 0 and < 10000");
        return;  
    }
    if((taxRate<0) || (taxRate>12)){
        alert('The tax rate you have entered must be greater than zero and less than 12')
        return
    }
    document.getElementById("subtotal").focus()
    const salesTax = subAmount * (taxRate / 100)
    const total = subAmount + salesTax

    $('#sales_tax').value = salesTax.toFixed(2)
    $('#total').value = total.toFixed(2)
}
function clearScreen(){
    $('#subtotal').value = ""
    $('#tax_rate').value = ""
}

document.addEventListener('DOMContentLoaded', function() {
    $('#calculate_button').addEventListener('click', processEntries);
    $('#clear_button').addEventListener('click',clearScreen,document.getElementById("subtotal").focus())
});
