/*prompt ("where are you from ?");
alert("Welcom To My Website");*/
var showOrder = function (){
    //input
var userOrder;
var orderImage ="";
//process
/*alert("Welcom To Jordan-Lovers");
alert("I Hope You Feel Good!");
confirm ("Are you from Jordan?");
 https://raghadalquran.github.io/Countries/
 */

while(userOrder !== "petra" && userOrder !== "sea")
{
    alert("Welcom To Jordan-Lovers");
    confirm("Are you from Jordan?");
    alert("I Hope You Feel Good!");
userOrder = prompt("You want to see petra or sea:");
}
var numberOfImages;
numberOfImages = prompt("What is the number of petra or sea ?");

for (var i=0; i< numberOfImages ;i++)
{
if(userOrder === "petra" ) {
    orderImage = orderImage + '<img src="images/Jordan.jpg">';
}
else if (userOrder === "sea") {
    orderImage = orderImage + '<img src="images/sea.jpg">';
}
}
//output
return orderImage;
}


document.write('<h3>' + showOrder() + '</h3>');


