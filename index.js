var colors = ["blue","green","red","yellow"];
var moves = [];
let started = true;
let curr_index=0;
let player_turn=false;
let level=1;




$(document).click(function(){
    if(started==true)
    {
      
        started=false;
        setTimeout(function(){
            next_random_generate();
        },1000);
        
    }
    
    
});
$("button").click(function(){
    check_next_move($(this).attr('id') );
});
function check_next_move(x)
{
    
    if(player_turn)
    {
        
        if(x!=moves[curr_index])
        {
            player_turn=false;
            you_lost();
        }
        else
        {
            var audio = new Audio(x+".mp3");
            audio.play();
            curr_index++;

        }

    }
    if(player_turn && curr_index==moves.length)
    {
        curr_index=0;
        player_turn=false;
        level++;
        var y="Level "+ level.toString();
        
        $("h1").html(y);
        setTimeout(next_random_generate,1000);
    }
}
function next_random_generate()
{
    
    $("h1").html("Level "+level.toString());
    moves.push(colors[Math.floor(Math.random()*4 )]);
    var x=moves[moves.length - 1];
    $("#"+x).fadeOut().fadeIn();
    var audio = new Audio(x+".mp3");
    audio.play();
    player_turn=true;
    
}
function you_lost(){
    var audio=new Audio("wrong.mp3");
    audio.play();
    $("h1").html("YOU LOST");
    
    moves=[];
    curr_index=0;
    
    level=1;
    setTimeout(function(){
        $("body").fadeOut();
    },1000);
    
    setTimeout(function(){
        $("body").fadeIn();
    },1000);
    setTimeout(function(){
        next_random_generate();
    },2000);
    
   
   
    
}