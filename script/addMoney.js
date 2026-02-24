document.getElementById('add-money-btn').addEventListener('click', function () {
    //1. bank account get
    const bankAccount = getValueFromInput('add-money-bank');
    if (bankAccount == 'Select a Bank') {
        alert('please select a bank');
        return;
    }

    //2. get bank account number
    const accno = getValueFromInput('add-money-number');
    if (accno.length != 11) {
        alert('invalid acc no');
        return;
    }

    // 3. get amount
    const amount = getValueFromInput('add-money-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);

    const pin = getValueFromInput('add-money-pin');
    if (pin == '1234') {
        alert(`Add Money Success from 
            ${bankAccount} 
            at ${new Date()}`);
        setBalance(newBalance);

        // 1.history-container k dhore niye ashbo
        const history = document.getElementById('history-container');
        // 2. new div create korbo 
        const newHistory = document.createElement('div');
        // new div innnerHTML add korbo 
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Add Money Success from 
            ${bankAccount}  , acc-no ${accno} at ${new Date()}
            </div>`;
        // history container e newDiv append korbo 
        history.append(newHistory);

    }
    else {
        alert('Invalid Pin');
        return;
    }
})