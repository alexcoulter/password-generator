pgDone = false;
var charCount = document.getElementById("charCount");
var passwordRange = document.getElementById("passwordRange");
charCount.textContent = passwordRange.value;

passwordRange.oninput = function () {
  charCount.textContent = this.value;
}

function alertHide() {
  var alert2 = document.getElementById("alert1");
  alert2.classList.add("inactive");
}


function passwordGenerate() {
  var special = document.getElementById("checkSpecial").checked;
  var numeric = document.getElementById("checkNumeric").checked;
  var lowercase = document.getElementById("checkLowercase").checked;
  var uppercase = document.getElementById("checkUppercase").checked;


  if (!special && !numeric && !lowercase && !uppercase) {
    var alert1 = document.getElementById("alert1");
    alert1.classList.remove("inactive");
  }
  else {

    var specialChar = ";!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numericChar = "0123456789";
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    var characters = "";

    if (special) {
      characters += specialChar;
    }
    if (numeric) {
      characters += numericChar;
    }
    if (lowercase) {
      characters += lowercaseChar;
    }
    if (uppercase) {
      characters += uppercaseChar;
    }


    for (var x = 0; x < passwordRange.value; x++) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }
    
    document.getElementById("mytext").value = result;
    pgDone = true;
    var element = document.getElementById("button2");
    element.classList.remove("disabled");
  }
}

function copyClip() {
  if (pgDone) {
    var copyText = document.getElementById("mytext");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied Your Password: " + copyText.value);

  }
}


