
var selectedImg = "";
var selectedValue = "";

    var dieValues = [1,2,3,4,5,6];
    var dieSides = ["img/die1.png", "img/die2.png", "img/die3.png", "img/die4.png", "img/die5.png", "img/die6.png"];
    //var diceSides = [{}, {}, {}, {}, {}, {}]; 
    /*
    var dieSides = new Array();
    dieSides[0] = "./img/die1.png";
    dieSides[1] = "./img/die2.png";
    dieSides[2] = "./img/die3.png";
    dieSides[3] = "./img/die4.png";
    dieSides[4] = "./img/die5.png";
    dieSides[5] = "./img/die6.png";
    
    var dieValues = new Array();
    dieValues[0] = 1;
    dieValues[1] = 2;
    dieValues[2] = 3;
    dieValues[3] = 4;
    dieValues[4] = 5;
    dieValues[5] = 6;
    */

    var dieSide;

    window.onload = play;

    
    function play() {
        var diceSides = [];
        for(var i = 1; i < 3; i++) {
            //var randIndex = getIndex();
            //dieSide= getValue(randIndex);
            //dieImg = getImg(randIndex);
            dieSide = rollDie();
            diceSides.push(dieSide);
            
        }
        //console.log("Die1 rolled " + diceSides[0] + " and Die2 rolled " + diceSides[1]); // test to see if the values are loaded into diceSides
        
        
        displayDice(diceSides); // still trying to figure this out. i am trying to figure out a way to load images into diceSides since i now have 2 separate arrays
        calculateRoll(diceSides);
        
            
    }
    
    
    
    function rollDie() { 
        var randomIndex = Math.floor(Math.random() * dieValues.length); // extracting using the index of the 2 arrays since they both correspond. 
        var selectedImg = dieSides[randomIndex];
        var selectedValue = dieValues[randomIndex];
        var selectedSide = { // array of objects (images and values) called selectedSide
            "img": dieSides[randomIndex], 
            "val": dieValues[randomIndex]
        }; 
        
        console.log("Image selected: " + selectedImg); // test to see if values and imgs are loaded. 
        console.log("Value rolled: " + selectedValue); 
        return selectedSide;
        
        
        // return [selectedValue, selectedImg]; // returns the value appended with the image for that specific index.
        
        
    }
    
    function displayDice(diceSides) {
        for (var i = 0; i < diceSides.length; i++) {
            console.log("Image: " + diceSides[i].img);
            var divID = "#die" + i ;
            // jquery to select
            $(divID).html('<img id="theImg" src="' + diceSides[i].img + '"/>');
        }
    }
    
    function calculateRoll(diceSides) {
        var rollTotal = 0;
        for (var i = 0; i < diceSides.length; i++) {
            rollTotal += diceSides[i].val;
        }
        
        console.log("Total rolled: " + rollTotal); // test to see if we are getting a total roll of our dice.
    
        determineRollType(diceSides);
        
    }
    
    function determineRollType(diceSides) {
        
        // var rollType = "";
        if (diceSides[0].val == 1 && diceSides[1].val == 1) {
            // rollType = "Snake Eyes";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Snake Eyes </b></br></br>");
            
            
        } else if (diceSides[0].val == 1 && diceSides[1].val == 2) {
            //rollType = "Australian Yo";
            //console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Australian Yo </b></br></br>");
            
            
        } else if (diceSides[0].val == 1 && diceSides[1].val == 3) {
            //rollType = "Little Joe From Kokomo";
            //console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Little Joe From Kokomo </b></br></br>");
            
            
        } else if (diceSides[0].val == 1 && diceSides[1].val == 4) {
            //rollType = "No Field Five";
            //console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> No Field Five </b></br></br>");
            
            
        } else if (diceSides[0].val == 1 && diceSides[1].val == 5) {
            // rollType = "Easy Six";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Easy Six </b></br></br>");
            
            
        } else if (diceSides[0].val == 1 && diceSides[1].val == 6) {
            // rollType = "Six One Your Done";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Six One Your Done </b></br></br>");
            
            
        } else if (diceSides[0].val == 2 && diceSides[1].val == 1) {
            // rollType = "Ace Caught a Deuce";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Ace Caught a Deuce </b></br></br>");
            
            
        } else if (diceSides[0].val == 2 && diceSides[1].val == 2) {
            // rollType = "Ballerina";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Ace Caught a Deuce </b></br></br>");
            
            
        } else if (diceSides[0].val == 2 && diceSides[1].val == 3) {
            // rollType = "The Fever";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> The Fever </b></br></br>");
            
            
        } else if (diceSides[0].val == 2 && diceSides[1].val == 4) {
            // rollType = "Jimmy Hicks";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Jimmy Hicks </b></br></br>");
            
            
        } else if (diceSides[0].val == 2 && diceSides[1].val == 5) {
            // rollType = "Benny Blue";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Benny Blue </b></br></br>");
            
            
        } else if (diceSides[0].val == 2 && diceSides[1].val == 6) {
            // rollType = "Easy Eight";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Easy Eight </b></br></br>");
            
            
        } else if (diceSides[0].val == 3 && diceSides[1].val == 1) {
            // rollType = "Easy Four";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Easy Four </b></br></br>");
            
            
        } else if (diceSides[0].val == 3 && diceSides[1].val == 2) {
            // rollType = "OJ";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> OJ </b></br></br>");
            
            
        } else if (diceSides[0].val == 3 && diceSides[1].val == 3) {
            // rollType = "Brooklyn Forest";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Brooklyn Forest </b></br></br>");
            
            
        } else if (diceSides[0].val == 3 && diceSides[1].val == 4) {
            // rollType = "Big Red";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Big Red </b></br></br>");
            
            
        } else if (diceSides[0].val == 3 && diceSides[1].val == 5) {
            // rollType = "Eighter From Decatur";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Eighter From Decatur </b></br></br>");
            
            
        } else if (diceSides[0].val == 3 && diceSides[1].val == 6) {
            // rollType = "Nina From Pasadena";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Nina From Pasadena </b></br></br>");
            
            
        } else if (diceSides[0].val == 4 && diceSides[1].val == 1) {
            // rollType = "Little Phoebe";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Little Phoebe </b></br></br>");
            
            
        } else if (diceSides[0].val == 4 && diceSides[1].val == 2) {
            // rollType = "Easy Six";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Easy Six </b></br></br>");
            
            
        } else if (diceSides[0].val == 4 && diceSides[1].val == 3) {
            // rollType = "Skinny McKinney";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Skinny McKinney </b></br></br>");
            
            
        } else if (diceSides[0].val == 4 && diceSides[1].val == 4) {
            // rollType = "Square Pair";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Square Pair </b></br></br>");
            
            
        } else if (diceSides[0].val == 4 && diceSides[1].val == 5) {
            // rollType = "Railroad Nine";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Railroad Nine </b></br></br>");
            
            
        } else if (diceSides[0].val == 4 && diceSides[1].val == 6) {
            // rollType = "Big One on the End";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Big One on the End </b></br></br>");
            
            
        } else if (diceSides[0].val == 5 && diceSides[1].val == 1) {
            // rollType = "Sixie From Dixie";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Sixie From Dixie </b></br></br>");
            
            
        } else if (diceSides[0].val == 5 && diceSides[1].val == 2) {
            // rollType = "Skinny Dugan";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Skinny Dugan </b></br></br>");
            
            
        } else if (diceSides[0].val == 5 && diceSides[1].val == 3) {
            // rollType = "Easy Eight";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Easy Eight </b></br></br>");
            
            
        } else if (diceSides[0].val == 5 && diceSides[1].val == 4) {
            // rollType = "Jesse James";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Jesse James </b></br></br>");
            
            
        } else if (diceSides[0].val == 5 && diceSides[1].val == 5) {
            // rollType = "Puppy Paws";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Puppy Paws </b></br></br>");
            
            
        } else if (diceSides[0].val == 5 && diceSides[1].val == 6) {
            // rollType = "Yo";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Yo </b></br></br>");
            
            
        } else if (diceSides[0].val == 6 && diceSides[1].val == 1) {
            // rollType = "The Devil";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> The Devil </b></br></br>");
            
            
        } else if (diceSides[0].val == 6 && diceSides[1].val == 2) {
            // rollType = "Easy Eight";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Easy Eight </b></br></br>");
            
            
        } else if (diceSides[0].val == 6 && diceSides[1].val == 3) {
            // rollType = "Lou Brown";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Lou Brown </b></br></br>");
            
            
        } else if (diceSides[0].val == 6 && diceSides[1].val == 4) {
            // rollType = "Tennessee";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Tennessee </b></br></br>");
            
            
        } else if (diceSides[0].val == 6 && diceSides[1].val == 5) {
            // rollType = "Six Five No Jive";
            // console.log("Roll type: " + rollType);
            
            
            $("#rollType").html("<b> Six Five No Jive </b></br></br>");
            
            
        } else {
            // rollType = "Midnight";
            // console.log("Roll type: " + rollType); 
            
            
            $("#rollType").html("<b> Midnight </b></br></br>");
            
            
        }
        //return rollType;
    }
    

   

// load dice and images into the array called dice
/*
var die = {
    values: [1,2,3,4,5,6],
    imgURLs: ["./img/die1.png", "./img/die2.png", "./img/die3.png", "./img/die4.png", "./img/die5.png", "./img/die6.png"]
};

// console.log(die["values"][0]) // test to see if we get the appropriate value or imgurl
// console.log(die["imgURLs"][0])

var dieSide;
var diceSides = [];
var vals = [];
var sides = [];
var totalRoll = 0;
    function play(die) {
        
        for (var i = 1; i < 3; i++) { // loop 2 times to roll both dice
            var dieSide = rollDie(die) // call the function rollDie
            
            diceSides.push(dieSide); // i want to push dieSide into the empty array called dice sides.
        }
        
        displayDice(diceSides);
    }
    x
    function rollDie(die) {
        
        for (var i = 0; i < 6; i++) {
            vals.push(die["values"][i]); // iterate through the values in or associative array and push them into keys.
            //console.log(keys);
        }
        console.log(vals); // test to see if all values are being appended
        var randomSide = Math.floor(Math.random() * vals.length); // randomness by index
        console.log(randomSide);
        dieSide = vals[randomSide];
        console.log(dieSide);
        //document.write(die[randomSide]);
        
        return dieSide;
        
        
        
        var temp, keys = [];
        for (temp in die) {
            if (die.hasOwnProperty(temp)) {
                keys.push(temp);
            }
        }
        var randomSide = die[keys[Math.floor(Math.random()*keys.length)]]; // generate a random element of die
        
        //dieSides.push(randomSide); // push random element into dieSides
        //var dieSide;
        // var randomSide = die[Math.floor(Math.random()*die.length)]; // undefined
        
        // randomSide is undefined. 
       
    }
    
    
    function displayDice(diceSides) {
    
        
        for (var i = 0; i < diceSides.length; i++) {
            console.log(diceSides[i]["imgURLs"]);
        }
        calculateRoll(diceSides);
    }
    
    function calculateRoll(diceSides) {
        //var totalRoll = 0;
        for (var i = 0; i < diceSides.length; i++) {
            totalRoll += diceSides["value"];
        }
            
        console.log("total roll = ". totalRoll);
    }
    
*/


