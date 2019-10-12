function loveFunction() {

  var love = Math.random();
  love = love * 10 + 50;

  love = Math.floor(love);

  console.log(love);

  // alert("Your Love-Score is " + love + "%.");

  document.getElementById("result").innerHTML = "Your Love-Score is " + love + "%.";
}
