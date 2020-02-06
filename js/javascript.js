/*prompt ("where are you from ?");
alert("Welcom To My Website");*/
var showOrder = function (){
    //input
var userOrder;
var orderImage ="";
//process
while(userOrder !== "petra" && userOrder !== "sea")
{
alert("Welcom To Jordan-Lovers");
alert("I Hope You Feel Good!");
prompt ("Where are you from ?");
prompt ("You want to see petra or sea:");
userOrder = prompt("please enter house or hotel");
}
var numberOfImages;
numberOfImages = prompt("What is the number of hotel or house ?");

for (var i=0; i< numberOfImages ;i++)
{
if(userOrder === "petra" ) {
    orderImage = orderImage + '<img src="images/Jordan.png">';
}
else if (userOrder === "sea") {
    orderImage = orderImage + '<img src="images/sea.png">';
}
}
//output
return orderImage;
}


document.write('<h3>' + showOrder() + '</h3>');


