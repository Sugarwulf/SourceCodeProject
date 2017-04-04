/*function lineThrough();  {

var myCheckBoxes = document.getElementByTagName("checkbox");
var myLabels = document.getElementByTagName("label").classList;

if myCheckBoxes.checked {myLabels.add("line-through");
} else {myLabels.remove("line-through");
   }

} */

function lineThrough(id) {
  var mylabel = document.getElementById(id);

  mylabel.style = "text-decoration: line-through";
}


/*function lineThrough (id) {
var myCheckBoxes = document.getElementByTagName("checkbox");
var mylabel = document.getElementById(id);

if myCheckBoxes.checked {return myLabels.style = "text-decoration: line-through";
   } else {return myLabels.style = "text-decoration: none";}

} */
