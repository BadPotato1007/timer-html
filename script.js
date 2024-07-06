function play() {
  var audio = new Audio('https://cdn.discordapp.com/attachments/1189577611391799396/1259098189370363998/oversimplified-alarm-clock-113180.mp3?ex=668a7211&is=66892091&hm=47439de886ddaf959accdd3d36af90f7e2f20f3edac60aa8b914f43aefbbbff7&');
  audio.play();
}
// Getting formated date from date string
let deadline = new Date(
    "dec 31, 2099 12:00:00"
).getTime();
console.log(deadline)
// Calling defined function at certain interval
let x = setInterval(function () {
  // Getting current date and time in required format
  let now = new Date().getTime();

  // Calculating difference
  let t = deadline - now;


  let minutes = Math.floor(
      (t % (1000 * 60 * 60)) / (1000 * 60)
  );
  let seconds = Math.floor(
      (t % (1000 * 60)) / 1000
  );
  console.log(minutes, seconds)
  document.getElementById("time").innerHTML = minutes;
  document.getElementById("ftime").innerHTML = seconds;
  if (minutes == 0 && seconds == 0){
    clearInterval(x);
    document.getElementById("time").innerHTML = "00";
    document.getElementById("ftime").innerHTML = "00";
    while(true){
        play();
    };
  };

}, 1000);
