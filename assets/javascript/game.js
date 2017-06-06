var characters = {

  darthMaul: {
  hitpoints:"100",
  attackPwr:"20",
  counteratkPwr:"5",
  name: "Darth Maul",
},


  ObiWanKenobi: {
    hitpoints:"100",
    attackPwr:"20",
    counteratkPwr:"5",
  },



  DarthVader:{
    hitpoints:"100",
    attackPwr:"20",
    counteratkPwr:"5",
},

  QuiGonJinn:{
    hitpoints:"100",
    attackPwr:"20",
    counteratkPwr:"5",
},

}


var testArray= []
var testArray2= []
characterArray = [["darthMaul","ObiWanKenobi","DarthSidious","QuiGonJinn"],["assets/images/Darth-Maul.jpeg","assets/images/Obi-Wan.jpg", "assets/images/Darth-Sidious.png", "assets/images/Qui Gon Jinn.jpeg"]]
EnemiesArry = [];



for(i=0; i<characterArray[0].length; i++)
{
  var newimg = $("<img>");
  newimg.attr("src", (characterArray[1][i]));
  newimg.attr("class", "characterImg");
  newimg.attr("value" , (characterArray[0][i]))
  $("#characterstochoose").append(newimg);
  testArray.push(characterArray[0][i]);
  testArray2.push(characterArray[1][i]);

}


$(document).on("click","img",function(){

if($(this).hasClass("characterImg"))

{
  $("#characterstochoose").empty();

  $("#characterstochoose").append($(this))

  testArray.splice(testArray.indexOf($(this).attr("value")),1)


  console.log($(this).attr("value"))
}

for (j=0; j<testArray.length;j++)

{
  var newimg = $("<img>");
  newimg.attr("src", (testArray2[j]));
  newimg.attr("class", "characterImg");
  newimg.attr("value" , (characterArray[j]))
  $("#enemies").append(newimg);


}





});
