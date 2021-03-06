var characters = [

  {
  name:"Darth Maul",
  hitpoints:"150",
  attackPwr:"9",
  counteratkPwr:"15",
  img: "assets/images/Darth-Maul.jpeg",
},

  {
    name:"Obi Wan Kenobi",
    hitpoints:"135",
    attackPwr:"10",
    counteratkPwr:"10",
    img:"assets/images/Obi-Wan.jpg",
  },



{
    name:"Darth Vader",
    hitpoints:"200",
    attackPwr:"3",
    counteratkPwr:"15",
    img:"assets/images/Vader.jpg",
},

{
    name:"Qui Gon Jinn",
    hitpoints:"140",
    attackPwr:"9",
    counteratkPwr:"7",
    img:"assets/images/Qui Gon Jinn.jpeg",
},

{
  name:"Yoda",
  hitpoints:"175",
  attackPwr:"5",
  counteratkPwr:"11",
  img:"assets/images/yoda.jpg",

},
]



var currentAttacker;
var currentDefender = "";
var lastDefender;
var currentD;
var currentA;
var lockPlay = false;
var lockAttacker = false;
var lockEnemies = false;
var trackingArray = ["Darth Maul","Obi Wan Kenobi","Darth Vader","Qui Gon Jinn","Yoda"];
var sounds = [["assets/audio/saberon.mp3"],["assets/audio/saberclash.mp3","assets/audio/saberclash1.mp3","assets/audio/saberclash2.mp3","assets/audio/saberclash3.mp3","assets/audio/saberclash4.mp3","assets/audio/saberclash5.mp3","assets/audio/saberclash6.mp3"],["assets/audio/spin1.mp3","assets/audio/spin2.mp3","assets/audio/spin6.mp3","assets/audio/spin5.mp3","assets/audio/spin4.mp3","assets/audio/spin3.mp3"]]
var baseAtkPwr;
var gameOver = false;


$("#reset").on("click", function()
{
window.location.reload();
});



function win(){
$("#gameStatus").html("You are Victorious!")

}

function loss(){

  $("#gameStatus").html(characters[currentD].name + " has defeated you" + "<br>" + "Press Reset Game to play again.")


}




function newDisplay(){
  $("#enemies").empty();
  for (var i = 0; i < characters.length; i++) {

if(characters[i].name != currentAttacker && characters[i].name != currentDefender  && characters[i].name != lastDefender && characters[i] != "" )
{
  var newimg = $("<img>");
  var newdiv = $("<div>");
  newdiv.attr("Id", "enemiesFrame");

  var newHit = $("<p>");
  var newName= $("<p>");

  newHit.html(characters[i].hitpoints)
  newName.html(characters[i].name)
  newHit.attr("class","stats");
  newName.attr("class","stats");

  newimg.attr("src", (characters[i].img));
  newimg.attr("value", (characters[i].name))
  newimg.attr("class", "enemiesImg");
  $("#enemies").append(newdiv);
  newdiv.append(newimg);

  newimg.before(newHit);
  newimg.after(newName);
}
}
}


function randomSounds(x){

  var randomClash = sounds[1][Math.floor(Math.random()*sounds[1].length)];
  var randomSpin = sounds[2][Math.floor(Math.random()*sounds[1].length)];
  if(x === "pickSound")
  {
    $("#audio").attr("src", sounds[0][0])
    $("#audio")[0].play();

  }

  if(x=== "attackSound")
  {
  $("#audio").attr("src", randomClash)
  $("#audio")[0].play();
}

  if(x=== "attackSpin")
  {
    $("#audio").attr("src", randomSpin)
    $("#audio")[0].play();

  }
}




// function to update the hitpoints of current characters
function updateStats(){

console.log(parseInt(characters[currentA].hitpoints))
console.log(parseInt(characters[currentD].hitpoints))

$("#attackerStats").html(characters[currentA].hitpoints)
$("#defenderStats").html(characters[currentD].hitpoints)


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
  newHit.attr("class","stats");
  newName.attr("class","stats");

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
if(lockEnemies === false)
{
  if($(this).hasClass("enemiesImg"))
  {

    for(j=0; j<characters.length;j++)

    {
      if(characters[j].name === $(this).attr("value"))

      {
        var newImg = $("<img>");

        var newdiv = $("<div>");
        newdiv.attr("Id", "defenderFrame");

        newImg.attr("src", (characters[j].img));
        newImg.attr("value", (characters[j].name))
        newImg.attr("class", "characterImg");
        $("#Defender").append(newdiv);
        newdiv.append(newImg);

        var newHit = $("<p>");
        var newName = $("<p>")

        var newAudio = $("<audio>")
        newAudio.attr("id" , "pickAudio")

        var newSource = $("<source>")
        newSource.attr("src","assets/audio/saberon.mp3")
        newSource.attr("type", "audio/mpeg")
        $("#Defender").append(newAudio);


        newAudio.append(newSource);


        newHit.attr("id","defenderStats")



        newHit.html(characters[j].hitpoints)
        newName.html(characters[j].name)

        newHit.attr("class","stats");
        newName.attr("class","stats");

        newImg.before(newHit);
        newImg.after(newName);


        currentDefender = characters[j].name;
        currentD = j
        lockPlay = false;
        lockEnemies = true;
      $("#pickAudio")[0].play();
      $("#gameStatus").empty();

        newDisplay()
      }


      }

    }

}

  });




$("#characterstochoose").on("click","img",function(){

if(lockAttacker === false)
{
// for picking a attacker and setting the enemy list
  if($(this).hasClass("characterImg"))
{


  for(i=0; i<characters.length; i++)
{
  if(characters[i].name != $(this).attr("value") )

  {
    randomSounds("pickSound");
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

    newHit.attr("class","stats");
    newName.attr("class","stats");

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
    $("#attacker").append(newdiv);
    newdiv.append(newimg)

    var newHit = $("<p>");
    newHit.attr("id","attackerStats");

    var newName= $("<p>");


    newHit.attr("class","stats");
    newName.attr("class","stats");

    newHit.html(characters[i].hitpoints)
    newName.html(characters[i].name)


    newimg.before(newHit);
    newimg.after(newName);



    currentAttacker = characters[i].name;
    currentA = i;
    baseAtkPwr=characters[currentA].attackPwr;
    lockAttacker = true;

  }
}

}
}
});


$("#attack").on("click", function(){

  if(currentDefender === "")
  {
    $("#gameStatus").html("No defender to attack, please choose one.")
  }
// only allow attack to happen if there is a defendr
if(lockPlay != true && gameOver === false)
{

// game logic
$(".characterImg").each(function()

{

  if($(this).attr("value") === currentDefender)
{
    characters[currentD].hitpoints = parseInt(characters[currentD].hitpoints)  -  parseInt(characters[currentA].attackPwr)
    console.log(currentDefender)

    updateStats();
  }

  if($(this).attr("value") === currentAttacker)


  {
    characters[currentA].hitpoints = parseInt(characters[currentA].hitpoints) - parseInt(characters[currentD].counteratkPwr)
    console.log(currentAttacker)

  updateStats();

  }

  $("#battleText").html("You Attacked " + (currentDefender) + " for " + (characters[currentA].attackPwr) + " damage"  + "<br>"  +  (currentDefender) + " attacked you back for " + (characters[currentD].counteratkPwr) + " damage" )


});

characters[currentA].attackPwr =  parseInt(characters[currentA].attackPwr) +  parseInt(baseAtkPwr);


if(characters[currentA].hitpoints <= 0)
{
loss();
gameOver= true
}
if(characters[currentD].hitpoints <= 0)

{

  console.log("victory");
  lastDefender= currentDefender;
  characters.splice(currentD,1,"");
  trackingArray.splice((trackingArray.indexOf(currentDefender)),1)
  lockPlay = true;
  randomSounds("attackSpin");
  $("#battleText").empty();
  $("#Defender").empty();
  currentDefender = ""
  lockEnemies=false;
}





if(trackingArray.length === 1)
{

  win();
  gameOver = true;
  return 0;
}


randomSounds("attackSound");

updateStats();
}



});

$("#playMusic").on("click",function()
{
  $("#mobileAudio")[0].play();

});

$("#pauseMusic").on("click",function()
{
  $("#mobileAudio")[0].pause();

});


//
