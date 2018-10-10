// alert("hello world");

setInterval(function () {
  var now = Date.now();
  var test = "Hello World " + now + " !!!!!";
  document.getElementById("titre2").innerHTML = test;
}, 100)
