/**
 * Created by loganhendricks on 5/3/16.
 */
var card = {
    fname: "Logan",
    lname: "Hendricks",
    occupation: "Zions Bank - Teller III",
    pnumber: "(801) 433 - 8040",
    email: "Logan.L.Hendricks@gmail.com"
};

document.getElementById("firstName").innerHTML = card.fname;
document.getElementById("lastName").innerHTML = card.lname;
document.getElementById("occupation").innerHTML = card.occupation;
document.getElementById("phone").innerHTML = card.pnumber;
document.getElementById("email").innerHTML = card.email;


function moveCard () {
    document.getElementById("dbcard").style.marginTop = "5%";
}

function workDisplay () {
    document.getElementById("workButton").style.opacity = "0";
}