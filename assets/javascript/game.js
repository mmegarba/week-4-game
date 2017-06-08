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

var enemyArray = [];


// function to update the hitpoints of current characters
function updateStats(){

console.log(parseInt(characters[currentA].hitpoints))
console.log(parseInt(characters[currentD].hitpoints))

}


// start game load characters (include in game init)
for(i=0; i<characters.length; i++)
{
  var newimg = $("<img>");
  var newdiv = $("<div>");
  newdiv.attr("Id", "charFrame");

  var newHit = $("<p>");
  var newName= $("<p>");

  newHit.html(characters[i].hitpoints)
  newName.html(characters[i].name)

  newimg.attr("src", (characters[i].img));
  newimg.attr("value", (characters[i].name))
  newimg.attr("class", "characterImg");
  $("#characterstochoose").append(newdiv);
  newdiv.append(newimg);

  newimg.before(newHit);
  newimg.after(newName);


}


$("#enemies").on("click","img",function(){

  // for picking a defender

  if($(this).hasClass("enemiesImg"))
  {

    for(j=0; j<characters.length;j++)

    {
      if(characters[j].name === $(this).attr("value"))

      {
        var newImg = $("<img>");

        var newdiv = $("<div>");
        newdiv.attr("Id", "charFrame");

        newImg.attr("src", (characters[j].img));
        newImg.attr("value", (characters[j].name))
        newImg.attr("class", "characterImg");
        newImg.attr("data", "defender")
        $("#Defender").append(newdiv);
        newdiv.append(newImg);

        var newHit = $("<p>");
        var newName = $("<p>");

        newHit.html(characters[j].hitpoints)
        newName.html(characters[j].name)

        newImg.before(newHit);
        newImg.after(newName);


        currentDefender = characters[j].name;
        currentD = j


      }

    }

  }

  });




$("#characterstochoose").on("click","img",function(){

// for picking a attacker and setting the enemy list
  if($(this).hasClass("characterImg"))
{


  for(i=0; i<characters.length; i++)
{
  if(characters[i].name != $(this).attr("value") )

  {
    var newimg = $("<img>");

    var newdiv = $("<div>");
    newdiv.attr("Id", "enemiesFrame");


    newimg.attr("src", (characters[i].img));
    newimg.attr("value", (characters[i].name))
    newimg.attr("class", "enemiesImg");
    $("#enemies").append(newdiv);
    newdiv.append(newimg);

    var newHit = $("<p>");
    var newName= $("<p>");

    newHit.html(characters[i].hitpoints)
    newName.html(characters[i].name)


    newimg.before(newHit);
    newimg.after(newName);


  }

  else{
    $("#characterstochoose").empty()
    var newimg = $("<img>");


    var newdiv = $("<div>");
    newdiv.attr("Id", "charFrame");

    newimg.attr("src", (characters[i].img));
    newimg.attr("value", (characters[i].name))
    newimg.attr("class", "characterImg");
    $("#characterstochoose").append(newdiv);
    newdiv.append(newimg)

    var newHit = $("<p>");
    var newName= $("<p>");

    newHit.html(characters[i].hitpoints)
    newName.html(characters[i].name)


    newimg.before(newHit);
    newimg.after(newName);



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

  if(characters[currentA].hitpoints <= 0)
  {
    console.log("game over");

  }

  if(characters[currentD].hitpoints <= 0)

  {
    console.log("victory");
  }

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
