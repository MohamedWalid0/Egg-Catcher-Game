var basket =document.getElementById("basket");

var egg1 = document.getElementById("egg1-img");
var egg2 = document.getElementById("egg2-img");
var egg3 = document.getElementById("egg3-img");

var scoreDiv = document.getElementById("score") ;
var liveDiv = document.getElementById("live");
var playAgain =document.getElementById("playAgain");

var scoreSound =document.getElementById("scoreSound");
var gameOverSound = document.getElementById("gameOverSound") ;


var brokenOne = document.getElementById("broken1");
var brokenTwo = document.getElementById("broken2");
var brokenThree = document.getElementById("broken3");

var home = document.getElementById("home");
var end = document.getElementById("end");

var score = 0 ;
var live = 5 ;
var clearOne = 0 ;
var clearTwo = 0 ;
var clearThree =0 ;

function startHome(){
    startGamePlay();
    home.style.display="none";

}

playAgain.onclick=function(){

    startGamePlay();
    end.style.display="none";
 
}



function startGamePlay(){
    startChickenOne();
    startChikenTwo();
    startChickenThree();

}


document.addEventListener("mousemove", function(e){
    basket.style.left = e.clientX ;
})

var eggOnePosition=0;
var eggTwoPosition=0;
var eggThreePosition=0;

function checkPosition(egg,basket){    //Global Function return true of false 
    
    var eggTop = Math.round(egg.offsetTop) ;
    var basketTop = Math.round(basket.offsetTop) ;
    var BasketTopScope = Math.round(basketTop + basket.getBoundingClientRect().height);

    // var eggLeft = Math.round(egg.offsetLeft + egg.getBoundingClientRect().width) ;

    // var basketLeft = Math.round(basket.offsetLeft) ;

    // var BasketLeftScope = Math.round(basketLeft + basket.getBoundingClientRect().width);
    
    var rectBasket =  basket.getBoundingClientRect()
    var leftOfBasket = rectBasket.left ;
    var rightOfBasket = rectBasket.right ;

    var rectEgg =  egg.getBoundingClientRect() ;
    var leftOfegg = rectEgg.left ;
    var rightOfegg = rectEgg.right ;


    if(eggTop>=basketTop && eggTop<=BasketTopScope && leftOfegg >= leftOfBasket && rightOfegg<=rightOfBasket){
        console.log("win");
        return true ;
    }
    else if ( eggTop>BasketTopScope ) {
        
        return false ;
    
    }
}


//  -----------------------
// ------------egg one---------  

function moveEggOne(){

    eggOnePosition+=5 ;
    egg1.style.top = eggOnePosition + "px" ;
    
   

    if(checkPosition(egg1,basket)){
        score++;
        scoreDiv.innerHTML= "Score = " + score ;

        scoreSound.play();

        eggOnePosition = 0 ;
        egg1.style.top = eggOnePosition ;

    }

    else if(checkPosition(egg1,basket) == false){
        // score--;
        // scoreDiv.innerHTML= "Score = " + score ;

        live-- ;
        liveDiv.innerHTML = "Live = " + live ;

        if(live==0){
            clearInterval(clearOne);
            clearInterval(clearTwo);
            clearInterval(clearThree);
            live = 5 ;
            score = 0 ;

            end.style.display="block" ;
            gameOverSound.play();
        
        }
        


        eggOnePosition = 0 ;
        egg1.style.top = eggOnePosition ;
    }
}

function startChickenOne(){
    
    moveEggOne();
    clearOne = setInterval( moveEggOne ,36 );

}

// ------------------------------
// ----------------egg two----------------

function startChikenTwo(){

    moveEggTwo();
    clearTwo = setInterval( moveEggTwo ,23 );

}

function moveEggTwo(){
    eggTwoPosition+=5 ;
    egg2.style.top = eggTwoPosition + "px" ;
    
    if(checkPosition(egg2,basket)){
        score++;
        scoreDiv.innerHTML= "Score = " + score ;

        scoreSound.play();

        eggTwoPosition = 0 ;
        egg2.style.top = eggTwoPosition ;

    }
    else if(checkPosition(egg2,basket) == false){
        // score--;
        // scoreDiv.innerHTML= "Score = " + score ;
        live-- ;
        liveDiv.innerHTML = "Live = " + live ;


        if(live==0){
            clearInterval(clearOne);
            clearInterval(clearTwo);
            clearInterval(clearThree);
            live = 5 ;
            score = 0 ;
            gameOverSound.play();
            end.style.display="block" ;
        }
        

        eggTwoPosition = 0 ;
        egg2.style.top = eggTwoPosition ;
    }



}

// ------------------------------
// ----------------egg three----------------

function startChickenThree(){
    moveEggThree();
    clearThree = setInterval( moveEggThree ,23 );
}

function moveEggThree(){

    eggThreePosition+=4 ;
    egg3.style.top = eggThreePosition + "px" ;
    
    if(checkPosition(egg3,basket)){
        score++;
        scoreDiv.innerHTML= "Score = " + score ;

        scoreSound.play();

        eggThreePosition = 0 ;
        egg3.style.top = eggThreePosition ;

    }
    else if(checkPosition(egg3,basket) == false){
        // score--;
        // scoreDiv.innerHTML= "Score = " + score ;
        live-- ;
        liveDiv.innerHTML = "Live = " + live ;

        if(live==0){
            clearInterval(clearOne);
            clearInterval(clearTwo);
            clearInterval(clearThree);
            live = 5 ;
            score = 0 ;        
            gameOverSound.play();
            end.style.display="block" ;
        
        }
        


        eggThreePosition = 0 ;
        egg3.style.top = eggThreePosition ;
    }

}








