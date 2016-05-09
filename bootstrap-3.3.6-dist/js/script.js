/**
 * Created by loganhendricks on 5/3/16.
 */
var card = {
    fname: "Logan",
    lname: "Hendricks",
    occupation: "<span>Zions Bank - Teller III</span>",
    pnumber: "<span>(801) 433 - 8040</span>",
    email: "<span>Logan.L.Hendricks@gmail.com</span>",
    website: "<span>www.LoganLHendricks.com</span>",
    linkedIn: "<a href='https://www.linkedin.com/in/logan-hendricks-a8056138'> <img src='../images/social/linkedin-logo.png'/> </a>",
    facebook: "<a href='https://www.facebook.com/logan.hendricks.756'> <img src='../images/social/facebook-letter-logo.png'/> </a>"
};

document.getElementById("firstName").innerHTML = card.fname;
document.getElementById("lastName").innerHTML = card.lname;
document.getElementById("occupation").innerHTML = card.occupation;
document.getElementById("phone").innerHTML = card.pnumber;
document.getElementById("email").innerHTML = card.email;
document.getElementById("website").innerHTML = card.website;
document.getElementById("linkedIn").innerHTML = card.linkedIn;

function moveCard () {
    document.getElementById("dbcard").style.marginTop = "5%";
}


function textFade (idin, idout) {
    document.getElementById(idin).style.opacity = "0";
    document.getElementById(idout).style.opacity = "1.0";
}

function tableFade (idForFade) {
    for (var x in idForFade) {
      //  if (i = 0; i < idForFade.length; i++) {
            document.getElementById(idForFade).style.opacity = "1.0";
  //      }
    }
}

function imgtextAppear(idtoAppear) {
    document.getElementById(idtoAppear).style.opacity = "1.0";
}

function imgtextFade (idtoFade) {
    document.getElementById(idtoFade).style.opacity = "0";
}








