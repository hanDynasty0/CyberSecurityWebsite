var challengeState = [0,0,0,0];
document.getElementById("ch1Button").onclick = function(){
  if(document.getElementById("ch1Input").value == "gm"){
    document.getElementById("ch1Text").innerHTML = "<strong>Correct!</strong><br>Well that probably took quite a long time if you had to search every combination of one or two lowercase letters, which is probably what you did. To be exact, there are 702 possible combinations of one or two lowercase letters. However, a computer can search through all these possible combinations and determine the correct password almost instantaneously. This technique is called a brute-force attack, and hackers can effectively crack a password using this kind of attack if the password is too short. Thus, passwords need to be long (minimum of 12-16 characters) and also include uppercase letters as well as numbers and symbols. This way, it will take a lot more time, quite literally hundreds of years, for a hacker to crack your password using brute force.";
    document.getElementById("ch1Response").style.backgroundColor = "rgb(77,148,88)";
    document.getElementById("ch1Text").style.padding = "15px";
    document.getElementById("ch1Text").style.marginTop = "0px";
    challengeState[0] = 1;
    if(challengeState[0]+challengeState[1]+challengeState[2]+challengeState[3] == 4){
      document.getElementById("navButton").innerHTML = "Back to Menu";
      document.getElementById("navMsg").innerHTML = "<strong>Before you go, the password you typed in when you visited this website was \""+localStorage.pw+"\". Think: was this really a strong password?</strong>";
      document.getElementById("navMsg").style.backgroundColor = "rgb(84,1,44)";
      document.getElementById("navMsg").style.padding = "10px";
      document.getElementById("navMsg").style.width = "80%";
      document.getElementById("navContainer").style.opacity = "1";
    }
  }
  else{
    document.getElementById("ch1Response").style.backgroundColor = "rgb(84,1,44)";
    document.getElementById("ch1Text").innerHTML = "<strong>Incorrect</strong>, try again.";
    document.getElementById("ch1Text").style.padding = "15px";
    document.getElementById("ch1Text").style.marginTop = "0px";
    challengeState[0] = 0;
  }
}
document.getElementById("ch2Button").onclick = function(){
  if(document.getElementById("ch2Input").value == "dec24"){
    document.getElementById("ch2Text").innerHTML = "<strong>Correct!</strong><br>Most commonly, if people put dates as their password, it is their birthday. However, putting your birthday or other personal information such as the names of loved ones as a password or the answer to a security question is a mistake. This is because it is easy to find such information on social media platforms. Hackers can find this information, and then either crack the password using personal information, or click the \"Forgot password?\" button and answer any security questions given using personal information and then change your password and access your account that way.";
    document.getElementById("ch2Response").style.backgroundColor = "rgb(77,148,88)";
    document.getElementById("ch2Text").style.padding = "15px";
    document.getElementById("ch2Text").style.marginTop = "0px";
    challengeState[1] = 1;
    if(challengeState[0]+challengeState[1]+challengeState[2]+challengeState[3] == 4){
      document.getElementById("navButton").innerHTML = "Back to Menu";
      document.getElementById("navMsg").innerHTML = "<strong>Before you go, the password you typed in when you visited this website was \""+localStorage.pw+"\". Think: was this really a strong password?</strong>";
      document.getElementById("navMsg").style.backgroundColor = "rgb(84,1,44)";
      document.getElementById("navMsg").style.padding = "10px";
      document.getElementById("navMsg").style.width = "80%";
      document.getElementById("navContainer").style.opacity = "1";
    }
  }
  else{
    document.getElementById("ch2Response").style.backgroundColor = "rgb(84,1,44)";
    document.getElementById("ch2Text").innerHTML = "<strong>Incorrect</strong>, try again.";
    document.getElementById("ch2Text").style.padding = "15px";
    document.getElementById("ch2Text").style.marginTop = "0px";
    challengeState[1] = 0;
  }
}
document.getElementById("ch3Button").onclick = function(){
  if(document.getElementById("ch3Input").value == "password"){
    document.getElementById("ch3Text").innerHTML = "<strong>Correct!</strong><br>Putting single words (dictionary or slang), altered versions of a word, or consecutive keyboard sequences (ex qwertyui or lkjhg) as a password is also a bad idea. This is because hackers can use password-cracking software with word lists to find and crack passwords using a brute-force attack.";
    document.getElementById("ch3Response").style.backgroundColor = "rgb(77,148,88)";
    document.getElementById("ch3Text").style.padding = "15px";
    document.getElementById("ch3Text").style.marginTop = "0px";
    challengeState[2] = 1;
    if(challengeState[0]+challengeState[1]+challengeState[2]+challengeState[3] == 4){
      document.getElementById("navButton").innerHTML = "Back to Menu";
      document.getElementById("navMsg").innerHTML = "<strong>Before you go, the password you typed in when you visited this website was \""+localStorage.pw+"\". Think: was this really a strong password?</strong>";
      document.getElementById("navMsg").style.backgroundColor = "rgb(84,1,44)";
      document.getElementById("navMsg").style.padding = "10px";
      document.getElementById("navMsg").style.width = "80%";
      document.getElementById("navContainer").style.opacity = "1";
    }
  }
  else{
    document.getElementById("ch3Response").style.backgroundColor = "rgb(84,1,44)";
    document.getElementById("ch3Text").innerHTML = "<strong>Incorrect</strong>, try again.";
    document.getElementById("ch3Text").style.padding = "15px";
    document.getElementById("ch3Text").style.marginTop = "0px";
    challengeState[2] = 0;
  }
}
document.getElementById("ch4Button").onclick = function(){
  if(document.getElementById("ch4Input").value == "dec24"){
    document.getElementById("ch4Text").innerHTML = "<strong>Correct!</strong><br>Having unique passwords prevents other passwords from being compromised if one password is cracked. These passwords can be stored on password managing software such as Dashlane to prevent a user from forgetting a password.";
    document.getElementById("ch4Response").style.backgroundColor = "rgb(77,148,88)";
    document.getElementById("ch4Text").style.padding = "15px";
    document.getElementById("ch4Text").style.marginTop = "0px";
    challengeState[3] = 1;
    if(challengeState[0]+challengeState[1]+challengeState[2]+challengeState[3] == 4){
      document.getElementById("navButton").innerHTML = "Back to Menu";
      document.getElementById("navMsg").innerHTML = "<strong>Before you go, the password you typed in when you visited this website was \""+localStorage.pw+"\". Think: was this really a strong password?</strong>";
      document.getElementById("navMsg").style.backgroundColor = "rgb(84,1,44)";
      document.getElementById("navMsg").style.padding = "10px";
      document.getElementById("navMsg").style.width = "80%";
      document.getElementById("navContainer").style.opacity = "1";
    }
  }
  else{
    document.getElementById("ch4Response").style.backgroundColor = "rgb(84,1,44)";
    document.getElementById("ch4Text").innerHTML = "<strong>Incorrect</strong>, try again.";
    document.getElementById("ch4Text").style.padding = "15px";
    document.getElementById("ch4Text").style.marginTop = "0px";
    challengeState[3] = 0;
  }
}

document.getElementById("navButton").onclick = function(){
  if(document.getElementById("navContainer").style.opacity == "1"){
    window.location.href = "https://cybersecuritywebsite.hanfang.repl.co/choicePage/choicePage.html";
  }
}