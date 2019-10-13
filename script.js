function loveFunction() {

  var love = Math.random();
  // For some fair numbers because I want it to be around a 50:50 chance
  love = love * 10 + 50;
  love = Math.floor(love);
  console.log(love);

  // alert("Your Love-Score is " + love + "%.");

  // document.getElementById("result").innerHTML = "Your Love-Score is " + love + "%.";

  if (love >= 51) {
    document.getElementById("result").innerHTML = "Your Love-Score is " + love + "%. <br> High Chances of Survival !";
  } else {
    document.getElementById("result").innerHTML = "Your Love-Score is " + love + "%. <br> You've got to work at it.";
  }

}
