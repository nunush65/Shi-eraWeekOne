const billInput = document.getElementById('billno');
const percentageInput = document.getElementById('tippercent');

const tipAmount = document.getElementById('tipamount');
const totalAmount = document.getElementById('totalamount');

const calculattip = () => {
    const bill = Number(billInput.value);//convert from text to num
    const percentage = Number(percentageInput.value);

    if(billInput.value === "" || percentageInput.value === ""){
        tipAmount.textContent = "0.00";
        totalAmount.textContent = "0.00";
        return;
    }

    const tip = bill * percentage / 100;
    const total = bill + tip;

    tipAmount.textContent = tip.toFixed(2);// fixed i keep 2 decomal place
    totalAmount.textContent = total.toFixed(2);
};

billInput.addEventListener("input",calculattip);
percentageInput.addEventListener("input",calculattip);
