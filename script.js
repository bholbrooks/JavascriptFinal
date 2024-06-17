function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest = p * y * r / 100;
    var amount = parseInt(p) + parseFloat(interest);
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(y);
    
    if (p <= 0) {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + p + ",\<br\>at an interest rate of " + r + "%\<br\>You will receive an amount of $" + amount + ",\<br\>in the year " + year + "\<br\>";
    }
}

function updateRate(){
    rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

        