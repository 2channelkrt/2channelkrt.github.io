

var slider1=document.getElementById("slider1");
var output = document.getElementById("value1");

output.innerHTML = slider1.value;
slider1.oninput = function()
{
  output.innerHTML = this.value;
}