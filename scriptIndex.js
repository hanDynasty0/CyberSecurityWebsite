var email = "";
var pw = "";

document.getElementById("button").onclick = function() {
  email = document.getElementById("email").value;
  pw = document.getElementById("pw").value;

  if (email && pw) {
    localStorage.email = email;
    localStorage.pw = pw;

    window.location.href = "https://CyberSecurityWebsite.hanfang.repl.co/phishing/phishing.html";
  }
}