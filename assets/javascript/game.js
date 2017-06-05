var characters = {

  darthMaul: {
  hitpoints:"100",
  attackPwr:"20",
  counteratkPwr:"5",
  picture:"../../images/Darth-Maul.jpeg",
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
characterArray = [["darthMaul","ObiWanKenobi","DarthVader","QuiGonJinn"],["assets/images/Darth-Maul.jpeg","assets/images/Obi-Wan.jpg", "assets/images/Darth-Sidious.png", "assets/images/Qui Gon Jinn.jpeg"]]




for(i=0; i<characterArray[0].length; i++)
{
  var newimg = $("<img>");
  newimg.attr("src", (characterArray[1][i]));
  newimg.attr("class", "characterImg");
  newimg.attr("value" , (characterArray[0][i]))
  $("#characterstochoose").append(newimg);
  testArray.push(characterArray[0][i]);

}




$(document).on("click","img",function(){

if($(this).hasClass("characterImg"))

{

  testArray.splice(testArray.indexOf($(this).attr("value")),1)

  console.log($(this).attr("value"))
}




for(j=0;j<characterArray.length;j++)

{
  var newimg = $("<img>");

  for(k=0;k<testArray.length;k++)
  {
  if(characterArray[j] === testArray[k] )


  newimg.attr("src", (characterArray[1][j]));
  newimg.attr("class", "enemiesImg");
  newimg.attr("value" , (characterArray[0][j]));
  $("#enemies").append(newimg);

}


}
});
