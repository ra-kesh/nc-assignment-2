
var readlineSync= require ('readline-sync');
var chalk = require ('chalk');

// introduction starts

var userName = readlineSync.question(chalk.rgb(51, 51, 255)("Please State your Name Below, For The Record :-\n\n"));

console.log ("\nhello "+ chalk.green(userName) + chalk.green(",..")+"Thanks for stepping in..\n"+"\n-----------------------------------------------\n"+chalk.bgCyan("\n------WELCOME TO THE TRIAL of STATE Vs PEARSON SPECTER------\n")+chalk.underline.bgYellow("\n\n****TRAIL BRIEF****")+chalk.magentaBright("\n\n--Imagine yourself as an employee of PEARSON SPECTER. \n\n--It is your responsibility now to show the court ,\n  how transparency is an integral part of the firm's culture,\n  and reassure them that we have nothing to hide here.\n\n--No matter how personal it is you have to try and answer \n  max questions correctly and in return you may have a chance \n  to win a Junior or Senior Partenership in probational basis...\n")+"\n-----------------------------------------------\n"); 

// introduction ends

// variables starts

var leveloneQuestions =[{
  question : "\n 1. What is Harvey Specter’s middle name? \n\n a. James \n b. Reginald \n c. Edward \n d. Richard \n \n choose \'a' or \'b' or \'c' or \'d' \n \n ",
  answer : "b"
},{
  question : "\n 2. What clue finally makes Louis realize Mike didn’t go to Harvard? \n\n a. Harvard Medal of Honor \n b. Quill and Dagger \n c. The Order of the Coif \n d. Law School Trophy \n \n choose \'a' or \'b' or \'c' or \'d' \n \n",
  answer : "c"
},{
  question : "\n 3. Harvey and Donna have a secret ritual involving a what? \n\n a. spatula \n b. can opener \n c. stapler \n d. whisk \n \n choose \'a' or \'b' or \'c' or \'d' \n \n",
  answer : "b"
},{
  question : "\n 4. What does Luis do for relaxing ? \n\n a. Yoga \n b. Mudding \n c. Running \n d. Dancing \n \n choose \'a' or \'b' or \'c' or \'d'\n \n",
  answer : "b"
},{
  question : "\n 5. The firm used to hire from which university only ? \n\n a. Havard \n b. Yale \n c. Stanford \n d. Columbia \n \n choose \'a' or \'b' or \'c' or \'d' \n \n",
  answer : "a"
}
];

var leveltwoQuestions =[{
  question : "\n 1. Where did Harvey Specter work before he became an associate at Pearson Hardman? \n\n a. Bratton Gould \n b. New York District Attorney's office \n c. Darby International \n d. Harvard Law School admission office \n \n choose \'a' or \'b' or \'c' or \'d' \n \n ",
  answer : "b"
},{
  question : "\n 2. What is Louis Litt's favourite catchphrase? \n\n a. You just got Litt Up! \n b. I'm the Litt-man! \n c. LITigation for all! \n d. We Litt a fire under them! \n \n choose \'a' or \'b' or \'c' or \'d' \n \n",
  answer : "a"
},{
  question : "\n 3. How does Louis attain named partner status? \n\n a. Threat \n b. Bribe \n c. BlackMail \n d. Assault \n \n choose \'a' or \'b' or \'c' or \'d' \n \n",
  answer : "c"
},{
  question : "\n 4. What was the name of the firm before Jesica and Daniel ousted three named partner in order to form PEARSON HARDMAN? \n\n a. Turner Hooch Mclaine \n b. Skadden Arps Slate \n c. Weil Gotshal & Manges \n d. Gordon Schmidt Van Dyke \n \n choose \'a' or \'b' or \'c' or \'d'\n \n",
  answer : "d"
},{
  question : "\n 5.Who was forced to leave the Firm after got caught up in embezzlement,despite being a named partner ? \n\n a. Daniel Hardman \n b. Louis Litt \n c. Robert Zane \n d. Jessica Pearson \n \n choose \'a' or \'b' or \'c' or \'d' \n \n",
  answer : "a"
},
];

var score = 0 ;

var seniorPartners =[{
  name:"Jesica",
  score:"100"
},{
  name:"Harvey",
  score:"100"
},{
  name:"Louis ",
  score:"100"
}
];

var juniorPartners =[{
  name:"Mike",
  score:"50"
},{
  name:"Rachel",
  score:"50"
}
];

// variables ends

// functions start

function play (question,answer){
  
  var userAns = readlineSync.question(chalk.bold(question));
  if (userAns.toUpperCase() == answer.toUpperCase()){
    console.log(chalk.green("\nWell Done , Buddy..\nHarvey would be proud of you.."))
    score+=10;
  }else {
     console.log(chalk.red("\nOops,it's "+ answer +","+"actually.."+"\ntry Harder next time..Harvey's counting on you.." ))

     score-=5;
  } 
  console.log ("\nYour loyality score is :"+""+score);
  console.log(chalk.yellow("\n******************************\n"))
}

function levelOne(){
    console.log("\n-----------------------------------------------\n"+chalk.rgb(51, 51, 255)("*****Here Comes The Questions for Stage One*****")+"\n-----------------------------------------------\n");
    for (i =0 ; i < leveloneQuestions.length ; i++){
        var currQues = leveloneQuestions[i];
        play (currQues.question,currQues.answer);    
    }
    if (score == 50){

      juniorPartners.push({
        name: userName,
        score: score
      });

      console.log(chalk.bold.green("\nCongrats !\nYou are eligible for a junior Partnership in a probational basis..\nYou can find your name below..\n"));

    }else{
    console.log(chalk.bold.red("\nThank you for valuable time..\nHowever at this time we can't offer you any Promotions.."));
    } 
  }
  
function levelTwo(){
     console.log("\n-----------------------------------------------\n"+chalk.rgb(51, 51, 255)("*****Here Comes The Questions for Stage Two*****")+"\n-----------------------------------------------\n");
    for (i =0 ; i < leveltwoQuestions.length ; i++){
        var currQues = leveltwoQuestions[i];
        play (currQues.question,currQues.answer);    
    }
      if (score == 100){

      seniorPartners.push({
        name: userName,
        score: score
      });

      console.log(chalk.bold.green("\nAwesome !\nYou truely deserve a seat at the table..\nYou can find your name below..\n"));

    }else{
    console.log(chalk.bold.red("\nThank you for valuable time..\nHowever at this time we can't offer you any more Promotions.."));
    } 
}

function alljuniorPartners(){
  console.log(chalk.underline.bold.bgCyan("\n\nAll Junior Partners\n"));
  console.log(chalk.underline.blue("Name")+"      "+chalk.underline.blue("loyality"));
  for (i=0;i< juniorPartners.length ; i++){
    var partner=juniorPartners[i];
    console.log(partner.name +"      "+partner.score);
   }
  console.log(chalk.yellow("\n******************************\n"))
}

function allseniorPartners(){
  console.log(chalk.underline.bold.bgCyan("\n\n***All Senior Partners\n"));
  console.log(chalk.underline.blue("Name")+"      "+chalk.underline.blue("loyality"));
  for (i=0;i< seniorPartners.length ; i++){
    var partner=seniorPartners[i];
    console.log(partner.name +"      "+partner.score);
   }
  console.log(chalk.yellow("\n******************************\n"))
}

function startingTrail(){

    var agree = readlineSync.question(chalk.whiteBright("\nSo if you are ready to proceed...press any key..\n")+chalk.redBright("\nPress \'n' if you aren't..\n\n"));

    if (agree.toLowerCase() == "n"){
        console.clear();
        console.log(chalk.green("\nWell,we sure do wish you had a spine already..\n\nAnyway Best of luck.."+userName+"..\n"));
    }else{
      console.clear();
      levelOne();
      alljuniorPartners();
      var agreeTwo = readlineSync.question(chalk.whiteBright("\nIf you want more...press any key..\n")+chalk.redBright("\nPress \'n' if you don't..\n\n"));
      if (agreeTwo.toLowerCase() == "n"){
        console.clear();
        console.log(chalk.green("\nBest of luck.."+userName+"..For all your future endeavours..\n"+"\nWe are certain, you won't disappoint us as junior partner..\n"));
      }else {
        console.clear();
        levelTwo();
        allseniorPartners();
      }
     
    }
  
  }

// functions end

startingTrail();















