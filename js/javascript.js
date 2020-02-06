/*prompt ("where are you from ?");
alert("Welcom To My Website");*/
var showOrder = function (){
    //input
var userOrder;
var orderImage ="";
//process
/*alert("Welcom To Jordan-Lovers");
alert("I Hope You Feel Good!");
confirm ("Are you from Jordan?");*/

while(userOrder !== "petra" && userOrder !== "sea")
{
userOrder = prompt("You want to see petra or sea:");
}
var numberOfImages;
numberOfImages = prompt("What is the number of petra or sea ?");

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


