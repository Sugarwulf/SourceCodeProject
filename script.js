function lineThrough();  {

var myCheckBoxes = document.getElementByTagName("checkbox").classList;
var myLabels = document.getElementByTagName("label").classList;

if myCheckBoxes.checked {myLabels.add("line-through");
} else {myLabels.remove("line-through");
   }

}
