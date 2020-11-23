function calculateTip() {
    var billamt = document.getElementById("bill").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var people = document.getElementById("people").value;

    if (billamt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }

    if (people === "" || people <= 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    var total = (billamt * serviceQual) / people;

    total = Math.round(total*100)/100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("tip").innerHTML = "none";