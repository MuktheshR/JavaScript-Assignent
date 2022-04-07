function Q5() {
    var v = parseInt(prompt('Enter The number'));
    document.getElementById("hello").innerHTML = "<b> The Sum Of The Multiples Of 3 Of The Numbers 1 To " + v + " Is : " + GetSumofmutiples(v, 3) + "</b>";
}