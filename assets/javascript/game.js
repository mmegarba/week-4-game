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
    attackPwr:"10",
    counteratkPwr:"10",
    img:"assets/images/Obi-Wan.jpg",
  },



{
    name:"DarthSidious",
    hitpoints:"200",
    attackPwr:"5",
    counteratkPwr:"5",
    img:"assets/images/Darth-Sidious.png",
},

{
    name:"QuiGonJinn",
    hitpoints:"125",
    attackPwr:"7",
    counteratkPwr:"5",
    img:"assets/images/Qui Gon Jinn.jpeg",
},

]

var currentAttacker;
var currentDefender;
var currentD;
var currentA;




function updateStats(){

console.log(parseInt(characters[currentA].hitpoints))
console.log(parseInt(characters[currentD].hitpoints))


}



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
  newimg.attr("value", (characters[i].name))
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


$("#enemies").on("click","img",function(){

  // for picking a defender

  if($(this).hasClass("enemiesImg"))
  {

    for(j=0; j<characters.length;j++)

    {
      if(characters[j].name === $(this).attr("value"))

      {
        var enemyImg = $("<img>");
        enemyImg.attr("src", (characters[j].img));
        enemyImg.attr("value", (characters[j].name))
        enemyImg.attr("class", "characterImg");
        enemyImg.attr("data", "defender")
        $("#Defender").append(enemyImg)

        currentDefender = characters[j].name;
        currentD = j


      }

    }

  }

  });






$("#characterstochoose").on("click","img",function(){

// for picking a attacker
  if($(this).hasClass("characterImg"))
{


  for(i=0; i<characters.length; i++)
{
  if(characters[i].name != $(this).attr("value") )

  {
    var newimg = $("<img>");
    newimg.attr("src", (characters[i].img));
    newimg.attr("value", (characters[i].name))
    newimg.attr("class", "enemiesImg");
    $("#enemies").append(newimg);


  }

  else{
    $("#characterstochoose").empty()
    var newimg = $("<img>");
    newimg.attr("src", (characters[i].img));
    newimg.attr("value", (characters[i].name))
    newimg.attr("class", "characterImg");
    $("#characterstochoose").append(newimg)

    currentAttacker = characters[i].name;
    currentA = i;
  }
}

}
});


$("#attack").on("click", function(){

// check to see if hitpoints not below zero for either attacker or defender

// if()


$(".characterImg").each(function()

{
  if($(this).attr("value") === currentDefender)
{
    characters[currentD].hitpoints = parseInt(characters[currentD].hitpoints)  -  parseInt(characters[currentA].attackPwr)
    console.log(currentDefender)
  }

  if($(this).attr("value") === currentAttacker)


  {
    characters[currentA].hitpoints = parseInt(characters[currentA].hitpoints) - parseInt(characters[currentD].counteratkPwr)
    console.log(currentAttacker)

  }

});



updateStats()



});



//
