//Progression 1 - create a Manager array and return it
  
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;


//Write your function here
function createManager(manageNname, manageAage, currentTeam, trophiesWon){
 let manager=[];

 manager.push(managerName,managerAge,currentTeam,trophiesWon);
 return manager; 
}
createManager();



// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation)
{
  let skills=[];
  if(skills.length == 0){
    return null;
  }
  formationObject={
    defender:'skills[0]',
    midfield:'skills[1]',
    forward:'skills[2]'
  };
  return formationObject;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let player=[];
  for(let i=0;i<players.length;i++){
    if(player[i].debut == year){
      player.push(players[i]);
    }
  }
  return player;
}
filterByDebut();


//Progression 4 - Filter players that play at the position _______
function filterByPosition(){
  let player=[];
  for(let i=0;i<players.length;i++){
    if(player[i].debut == year){
      player.push(players[i]);
    }
  }
  return player;
}
filterByPosition();

//Progression 5 - Filter players that have won ______ award
function filterByAward(award){
  let player =[];
  for (let i=0;i<players.length;i++){
    if(award == "FIFA FIFPro World XI"){
      player.push(players[i]);
    }
  }
  return player;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  let player=[];
  for(let i=0;i<players.length;i++){
    let count =0;
    for(let j=0; j < player[i].award.length;j++)
    if(player[i].award[j].name ==awardName){
      count++;
      if(count==noOfTimes)
      arru.push(players[i]);      
    }
  }
  return arru;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxTimes(){
  let player=[];
  for(let i=0;i<players.length;i++){
    for(let j=0; j < player[i].award.length;j++)
    if((player[i].award[j].name ==awardName) && (player[i].country==country))
    if(!(arru.includes(players[i])))
    arru.push(players[i]);
  }
  return arru;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)

{
  let arr = [];
  for (var i = 0; i < players.length; i++) {
      var count = 0;
      if ((players[i].awards.length >= noOfAwards) && (players[i].team == team) && (players[i].age == age))
          arr.push(players[i]);
  }
  return arr;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge(){

}
SortByAge();
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(){

}
FilterByTeamxSortByNoOfAwards();
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
