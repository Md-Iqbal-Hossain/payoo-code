
//machine id -> input value
function getValueFromInput(id){
    const input  = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

//machine -> balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log('current balance', Number(balance));
    return Number(balance);
}

//machine value -> set Balance

function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}