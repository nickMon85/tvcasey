"use strict"

class Game{
    constructor(){
        this.playerOne = new Player();
        this.playerTwo = new Player();
        

    }
    runGame(){ //"main" method
         this.displayRules();
         this.selectPlayer(); 
         while(this.playerOne.score < 3 && this.playerTwo.score < 3){
            this.playerOne.chooseGesture();
            this.playerTwo.chooseGesture();   
            this.mainGame();//rename to compare
        if(this.playerOne.score > 3 ||this.playerTwo.score>3){
            this.displayResults();
        }    
        }    
       //after loop ends,  alert winner
    }
    
    displayRules(){
        console.log("'Rock' crushes 'Scissors'");
        console.log("'Scissors' cuts 'paper'");
        console.log("'Paper' covers 'Rock'");
        console.log("'Rock' crushes 'Lizard'");
        console.log("'Lizard' poisons 'Spock'");
        console.log("'Spock' smashes 'Scissors'");
        console.log("'Scissors' decapitates 'Lizard'");
        console.log("'Lizard' eats 'Paper'");
        console.log("'Paper' disproves 'Spock'");
        console.log("'Spock' vaporizes 'Rock'");
    }   

    displayResults(){
        let i = this.score
        for(let i = 0; i =3;++i){
            console.log(i++)
            
           if(this.playerOne.score> 3 || this.playerTwo.score >3){
            alert("playerOne game winner!" || "playerTwo game winner");
            console.log("");
           }
        
            else{
            this.score = this.mainGame[-i];
            }
        }
    }
    
    selectPlayer(){//select player option i.e. cpu vs cpu; user vs user; etc.
       let select = prompt("Will this match be \n'user vs user' press '1' \n 'cpu vs user' press '2', or \n 'cpu vs cpu' press '3'");
       switch(select){
              case"1":
              this.playerOne = new HumanPlayer();
              this.playerTwo = new HumanPlayer();
              
              break;
     
              
              case"2":
              this.playerOne = new HumanPlayer();
              this.playerTwo = new CompPlayer();

              break;
              case"3":
              this.playerOne = new CompPlayer();
              this.playerTwo = new CompPlayer();

              break;
              
              default:
                  
              break;


       }


    }
    mainMenu(){
        let main = prompt("Would you like to play a game? If yes pres 'yes', if not click 'cancel'!");
        switch(main){
            case"yes":
            this.runGame();
            break;

        }
    }
    
    

    mainGame(){//Begins game session
        
        
         
        // return (this.playerOne.score||this.playerTwo.score)+=1;
        //consider alert round winner and increment score, then return to end execution,
        //rather than returning a value to the rungame method where this is called.

        
        if(this.playerOne.fist === this.playerTwo.fist){
            console.log(this.score);
            prompt('We have a tie!');
            
        }
        else if(this.playerOne.fist==='rock' && this.playerTwo.fist ==='paper'){
            console.log(this.score);
            prompt('playerTwo won!');
            
             // 'playerTwo won!';
        }
        else if(this.playerOne.fist ==='rock' && this.playerTwo.fist ==='scissors'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist === 'rock' && this.playerTwo.fist ==='spock'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist === 'spock' && this.playerTwo.fist ==='rock'){
            console.log(this.score);
            prompt('PlayerOne win!');
        }    
        else if(this.playerOne.fist === 'rock' && this.playerTwo.fist ==='lizard'){
            console.log(this.score);
            prompt('playerOne win!');
           
        }
        else if(this.playerOne.fist === 'lizard' && this.playerTwo.fist ==='rock'){
            console.log(this.score);
            prompt('PlayerTwo won!');
            
        }
        else if(this.playerOne.fist === 'paper' && this.playerTwo.fist ==='rock'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist === 'paper' && this.playerTwo.fist ==='scissors'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist === 'paper' && this.playerTwo.fist ==='spock'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist === 'spock' && this.playerTwo.fist ==='paper'){
            console.log(this.score);
            prompt('playerTwo won!');
           
        }
        else if(this.playerOne.fist === 'paper' && this.playerTwo.fist ==='lizard'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist === 'lizard' && this.playerTwo.fist ==='paper'){
            console.log(this.score);
            prompt('playerOne win!');
            
        }
        else if(this.playerOne.fist === 'scissors' && this.playerTwo.fist ==='rock'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist ==='scissors' && this.playerTwo.fist ==='paper'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist ==='scissors' && this.playerTwo.fist ==='spock'){
            console.log(this.score);
            prompt('PlayerTwo won!');
            
        }
        else if(this.playerOne.fist ==='spock' && this.playerTwo.fist ==='scissors'){
            console.log(this.score);
            prompt('PlayerOne won!');
            
        }
        else if(this.playerOne.fist ==='scissors' && this.playerTwo.fist ==='lizard'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist ==='spock' && this.playerTwo.fist ==='lizard'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist ==='lizard' && this.playerTwo.fist ==='spock'){
            console.log(this.score);
            prompt('playerTwo won!');
           
        }
        
        
    }
    
}

class Player{
    constructor(){
        this.score = 0;
        this.name = null;
        this.gestures = ["rock","paper","scissors","lizard","spock"];
        this.fist = null
    }
    
    choosePlayerName(){
        console.log("error override this method!");
    }
    chooseGesture(){
        console.log("error override this method!"); 
    }
}

class HumanPlayer extends Player{
        constructor(){
            super();
            this.choosePlayerName();
        }
        choosePlayerName(){
            this.name = prompt("Users name?");
        }
        chooseGesture(){
            let userinput = prompt("Which gesture would you like?\n rock press '1',\n paper press '2',\n scissor press '3, \n' lizard press'4',\n spock press '5'!");
            userinput = parseInt(userinput);
            if(userinput > 5 || userinput < 1){
                this.chooseGesture();
            }
            else{
                this.fist = this.gestures[userinput -1];
            }
        }
}
class CompPlayer extends Player{
    constructor(){
        super();
    }
    choosePlayerName(){
        let names = ["Tom", "Sally", "Gerry","Spencer", "Erik"]
        let compChoice = this.generateRandomNumber(this.gestures.length);
        this.fist = names[compChoice];
    }
    chooseGesture(){
        let compChoice = this.generateRandomNumber(this.gestures.length);
        this.fist = this.gestures[compChoice];
    }
    generateRandomNumber(maxnumber){
        let generateComputerChoice = Math.floor(Math.random()*maxnumber);
        return generateComputerChoice;
    }
}
let game = new Game();
game.runGame();

// 

// rollAllDice(diceArray){
//     let runningTotal = 0;

//     for(let i = 0 ;  i< diceArray.length; i++){
//         let result =this.rollDie(diceArray[i]);return (this.playerOne.score||this.playerTwo.score)+=1;
//         runningTotal += result;
//     }
//     return runningTotal;
// }
"use strict"
prompt("Welcome to 'Day Trip Generator'! Click 'OK' to Start");

let name = prompt ("What is your name?");

console.log(name);

    // let one = myDest 
    // function* myDest(){
    // yield 1;
    // console.log(rand_dest);
    // }
    let destination = ["Milwaukee, WI", "Chicago, Il", "Nashville, TN", "Maimi, FL", "San Diego, CA", "Denver, CO", "Dallas, TX", "L.A., CA", "Seatle, WA","Fort Worth, TX"];
    let rand_dest = destination[Math.floor(Math.random()*destination.length)];
    let destination2 = ["Milwaukee, WI", "Chicago, Il", "Nashville, TN", "Maimi, FL", "San Diego, CA", "Denver, CO", "Dallas, TX", "L.A., CA", "Seatle, WA","Fort Worth, TX"];
    let rand_dest2 = destination2[Math.floor(Math.random()*destination2.length)];

    let response = prompt(rand_dest);
    if(response){
        console.log("");
    } else  {
       prompt(destination[]("")===rand_dest)//true;
    }
    
    


    // let two = myRest 
    // function* myRest(){
    // yield 2;
    // console.log(rand_rest);
    // }  
    let restaurant = ["Red Lobster", "Olive Garden", "Pizza House", "ZoGo's Sports Grill", "El Lago","Food Palace"];
    let rand_rest = restaurant[Math.floor(Math.random()*restaurant.length)];
    
    let response = prompt(rand_rest);
    if(response){
        console.log("");
    } else  {
        prompt(rand_rest);
    }
    prompt(rand_rest);


    // let three = myTrans
    // function* myTrans(){
    // yield 3;
    // console.log(rand_trans);
    // }
    let transportation = ["Bus", "Taxi", "Uber", "Rental", "Bike", "Lyft"];
    let rand_trans = transportation[Math.floor(Math.random()*transportation.length)];

    prompt(rand_trans);


    // let four = myEntert
    // function* myEntert(){
    // yield 4;
    // console.log(rand_entert);
    // }
    let entertainment = ["Comedy Show", "Indoor Rock climbing", "Movie Theater", "Bowling", "Karaoke", "Amusement Park", "Water Park"];
    let rand_entert = entertainment[Math.floor(Math.random()*entertainment.length)];

    prompt(rand_entert);
        

    let final = (name)+ "will begin this exciting trip in" + (rand_dest) + "Later that evening, you'll be sitting down to have a delicious meal at" + (rand_rest) + "During the day, you will be utilizing a/an" + (rand_trans) + "to see all the beautiful sites. Lastly, you will make fun memories at" + (rand_entert) + "Hope you enjoy your trip. Click 'OK'";
    prompt(final);
    
    // var gen = myGen();//Get the generator ready to run
// var f = foo();
// var b = bar();

// function* foo(){
//     yield 1234;
// }

// function* bar(){
//     return 1234;
// }


// function* myGen(){
    
//    yield 1; 
//     console.log(rand_dest);
    
//     yield 2;
//     console.log(rand_rest);
//     yield 3;
//     console.log(rand_trans);
//     yield 4;
//     console.log(rand_entert);
//     yield 5; 

// }



    // prompt(name);
    // let first = prompt();
    // prompt(rand_dest);
    // let second = prompt()
    // prompt(rand_rest);
    // let third = prompt()
    // prompt(rand_trans);
    // let fourth = prompt("to see all the beautiful sites.","Lastly, you will make fun memories at")
    // prompt(rand_entert);
    // ]

    // prompt(myAgree)
    //console.log(rand_dest, rand_rest, rand_trans, rand_entert);
//};

    //console.log("You will begin your exciting trip in"rand_dest,"Later that evening, you'll be sitting down to have a delicious meal at"rand_rest,"During the day, you will be utilizing a/an"rand_trans"to see all the beautiful sites.","Lastly, you will make fun memories at"rand_entert);


    
   
    

    // console.log(gen.next(1));//{value:1, done; false}
    // console.log(f.next(1));
    // console.log(b.next(1));
    //console.log(gen.next(2));//{value:2, done; false}
    // console.log(f.next(2));
    // console.log(b.next(2));
    // console.log(gen.next(3));//{value:3,2,1 done; false}
    // console.log(f.next(3));
    // console.log(b.next(3));
    // console.log(gen.next(4));//{value:4, done; false}
    // console.log(f.next(4));
    // console.log(b.next(4));
    // console.log(gen.next(5));//prints 6
    // console.log(f.next(5));
    // console.log(b.next(5));
    // console.log(gen.next());{value:1,2,3,4, done; true}
    // console.log(f.next());
    // console.log(b.next());
    // console.log(gen.next());errors //because you cant call next()on a closed generator
    // console.log(f.next());
    // console.log(b.next());
    // // 
    