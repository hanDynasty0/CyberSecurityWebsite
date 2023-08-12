if(localStorage.email.indexOf("@")!=-1){
  document.getElementById("header").innerHTML = "Did you HAVE to give the email?";
  document.getElementById("phishing").innerHTML = "Honestly, why would you give a sketchy website like this your email? Now the people running the website know your email, and they might use your email to send you messages that try and get you to reveal more of your sensitive information. Don't worry though, this website is run by a student at Marc Garneau Collegiate Institute and is making this website for Mr. Anthony's computers and society assignment. So I won't be stealing your information.";
}
else{
  document.getElementById("header").innerHTML = "You passed the test!";
  document.getElementById("phishing").innerHTML = "Thankfully you were wise enough not to give your email to sketchy websites. If you did send your email, the people running the website would know your email, and they might use it to send you messages that try and get you to reveal more of your sensitive information. To be clear, this website is run by a student at Marc Garneau Collegiate Institute and is making this website for Mr. Anthony's computers and society assignment, which means I won't be stealing ANY of your information.";
}

document.getElementById("pre").onclick = function(){
  window.location.href = "https://CyberSecurityWebsite.hanfang.repl.co/index.html";
}

document.getElementById("post").onclick = function(){
  window.location.href = "https://CyberSecurityWebsite.hanfang.repl.co/choicePage/choicePage.html";
}