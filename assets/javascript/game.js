var characters = [

  {
  name:"darthMaul",
  hitpoints:"150",
  attackPwr:"20",
  counteratkPwr:"5",
  name: "Darth Maul",
  img: "assets/images/Darth-Maul.jpeg",
},

  {
    name:"ObiWanKenobi",
    hitpoints:"100",
    attackPwr:"20",
    counteratkPwr:"5",
    img:"assets/images/Obi-Wan.jpg",
  },



{
    name:"DarthVader",
    hitpoints:"200",
    attackPwr:"20",
    counteratkPwr:"5",
    img:"assets/images/Darth-Sidious.png",
},

{
    name:"QuiGonJinn",
    hitpoints:"125",
    attackPwr:"20",
    counteratkPwr:"5",
    img:"assets/images/Qui Gon Jinn.jpeg",
},

]

//
// var testArray= []
// var testArray2= []
// characterArray = [["darthMaul","ObiWanKenobi","DarthSidious","QuiGonJinn"],["assets/images/Darth-Maul.jpeg","assets/images/Obi-Wan.jpg", "assets/images/Darth-Sidious.png", "assets/images/Qui Gon Jinn.jpeg"]]
// EnemiesArry = [];








for(i=0; i<characters.length; i++)
{
  var newimg = $("<img>");
  var newdiv = $("<div>");
  newdiv.attr("Id", "charFrame");

  var newspanHit = $("<span>");
  var newspanName= $("<span>");

  newspanHit.html(characters[i].hitpoints)
  newspanName.html(characters[i].name)

  newimg.attr("src", (characters[i].img));
  newimg.attr("class", "characterImg");
  // newimg.attr("value" , (characterArray[0][i]))
  $("#characterstochoose").append(newdiv);
  newdiv.append(newimg);

  newimg.before(newspanHit);
  newimg.after(newspanName);
  // testArray.push(characterArray[0][i]);
  // testArray2.push(characterArray[1][i]);

}
//
//
// $(document).on("click","img",function(){
//
// if($(this).hasClass("characterImg"))
//
// {
//   $("#characterstochoose").empty();
//
//   $("#characterstochoose").append($(this))
//
//   testArray.splice(testArray.indexOf($(this).attr("value")),1)
//
//
//   console.log($(this).attr("value"))
// }
//
// for (j=0; j<testArray.length;j++)
//
// {
//   var newimg = $("<img>");
//   newimg.attr("src", (testArray2[j]));
//   newimg.attr("class", "characterImg");
//   newimg.attr("value" , (characterArray[j]))
//   $("#enemies").append(newimg);
//
//
// }
//
//
//
//
//
// });
