
 let firstName = "kristi";
 let lastName = "wisniowiecki";
 let favoriteAnimal = "cat";
 let nickname = null;
 let excitementLevel = 6;
 let isHungry = true;
 let favoriteArtists = ["CivilWars", "Taylor Swift", "Bon Iver"];
  
 console.log(firstName);
 console.log(lastName);
 console.log(favoriteAnimal);
 console.log(`${firstName} ${lastName}`);  //Using template literals not concatenation.
 
//if you are hungry, set your nickname to be something like: <firstName> the hungry <favoriteAnimal>
//if you are not hungry, set your nickname to be something like: <firstName> the satisfied <favoriteAnimal>
//console.log nickname
if(isHungry){ 
  nickname = `${firstName} the hungry ${favoriteAnimal}`  
  console.log(nickname);

 } else {
  nickname = `${$firstname} the satisfied ${favoriteAnimal}`
  console.log(nickname);
}

//console.log "I'm not excited" if excitement level is less than 4
//console.log "I'm moderately excited" if excitement level is greater than or equal to 4 and excitement level is less than or equal to 7
//console.log "I'm excited" if excitement level is greater than 7
if(excitementLevel < 4){
console.log("I'm not excited");
} else if(excitementLevel >= 4 && excitementLevel <= 7){
console.log("I'm moderately excited");
} else if (excitementLevel > 7)
console.log("I'm excited");

//console.log "My name is <name> and I am hungry" if isHungry is true.
//console.log "My name is <name> and I am not hungry" if isHungry is false.
if(isHungry){
console.log(`My name is ${firstName} and I am hungry`);
}
else{
  console.log(`My name is ${firstName} and I am not hungry`);
}

//console.log all your FAVORITE MUSIC USING LOOP.
for(let artist of favoriteArtists){
    console.log(artist);
}

//console.log all your favorite music in REVERSE USING A LOOP
for(let i=favoriteArtists.length-1; i>=0; i--){
    console.log(favoriteArtists[i]);
}

//Create an OBJECT that represents firstName, lastName, 
// favoriteAnimal, nickname, excitementLevel, isHungry, favoriteMusic.
let rebecca = {
firstName: "rebecca",
lastName: "olatunde",
favoriteAnimal: "bird",
nickname: null,
excitementLevel: 6,
favoriteMusic:["worship", "na dem"],
}

console.log(rebecca);

console.excitementLevel = 9; //to change excitement level

console.log(rebecca.excitementLevel); //to change excitement level.

rebecca.isHungry=true;
console.log(rebecca);

rebecca.hasSiblings= true;
console.log(rebecca);

  //Array of OBJECT

let july2020 = [
    {
      firstName: "Kanchan",
      lastName: "Kandage",
      favoriteAnimal: "Horse",
      nickname: null,
      excitementLevel: 5,
      isHungry: false,
      favoriteMusic: ["Beatles", "Billy Joel"],
    },
    {
      firstName: "Cat",
      lastName: "Tremblay",
      favoriteAnimal: "pangolin",
      nickname: null,
      excitementLevel: 10,
      isHungry: false,
      favoriteMusic: ["Sufjan", "Gregory Alan Isakov"],
    },
    {
      firstName: "Chris",
      lastName: "Liu",
      favoriteAnimal: "Cat",
      nickName: null,
      isHungry: false,
      excitementLevel: 10,
      favoriteMusic: ["Van Gogh", "T-Pain"],
    },
  ];

     //LOG EACH OBJECT TO THE CONSOLE.
     for(let student of july2020){
      console.log(student)
     }

     //Log each first name to the console.
     for (let student of July2020){
         console.log(student.firstName);
      }
     
     //Log each student first favorite music of each student.
     for (let student of July2020){
        console.log(student.favoriteMusic[0]);
      }

    //calculate the AVERAGE EXCITEMENT level of EACH student.
    for (let student of July2020){
        sum += student.excitementLevel;
     }
    console.log(sum/3);

    //FOR-OF LOOP - This should be your go to LOOP FOR ARRAYS.
    let languages =["java", "php", "c#", "ruby", "html", "css"];
    for(let language of languages){
      console.log(language);
    }

    //using FOR-OF loop to sum the number in an arrray.
    let sum = 0;
    let numbers =[1,2,3,4];
    for (let number of numbers){
      add += number;
    }
    console.log(add);
    
    //Reverse LOOP
    for (let i = 10, i >= 0; i--){
      console.log(i);
    }
     //for example
     for(let i >= 50, i >= 0, i =5; )
    
    //Using ARRAY FOR LISTS of cars or any other list of items.
    let cars = ["ford", "chevy", "toyota"];
    for(let i = 0; i <= cars.length, i++){
      console.log(cars[i]);
    }
    
    //Counter method to list 'cars or any other list itens.
    let count = 0;
    while(counter < cars.Length){
      counter ++
    }
    console.log(car);
  
  
  
  


