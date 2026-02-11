'use strict';
const questionEl =document.getElementById("question");
const choicesEl =document.getElementById("choices");
const  resultEl =document.getElementById("result");

const quizzes =[
  {
   answer:"マリー・アントワネット",
   hint:"フランス革命で処刑された王妃で、日本の漫画「ベルサイユのばら」の主要人物はだーれだ？",
   choices:["イザボー・ド・バヴィエール","カトリーヌ・ド・メディシス","マルグリット・ド・ヴァロワ","マリー・アントワネット"]

},
{
   answer:"エカチェリーナ２世",
   hint:"ロシアの“黄金時代”を築いた女帝でロシア史上唯一の「大帝」と呼ばれた女帝はだーれだ？",
   choices:["エカチェリーナ１世","エカチェリーナ２世","アンナ","エリザヴェータ"]

},{
   answer:"エリザベス１世",
   hint:"スペイン無敵艦隊を破ったイングランド女王はだーれだ？",
   choices:["ブーディカ","ヴィクトリア","エリザベス１世","メアリー１世"]

},{
   answer:"クレオパトラ７世",
   hint:"古代エジプト最後の女王で世界四大美女と名高い女王はだーれだ？",
   choices:["クレオパトラ７世","ネフェルティティ","ハトシェプスト","クレオパトラ２世"]

},
]

function showQuiz(){
const randomIndex =Math.floor(Math.random()*quizzes.length);
const selectedQuiz =quizzes[randomIndex];

questionEl.textContent = selectedQuiz.hint;

choicesEl.innerHTML = "";

selectedQuiz.choices.forEach((choice) =>{
  const button = document.createElement("button");//ボタン作る

button.textContent = choice;// ボタンに文字入れる


button.addEventListener("click",()=>{
  if(choice === selectedQuiz.answer){
    resultEl.textContent ="⭕ 正解！";
  }else{
    resultEl.textContent ="❌ 不正解！";
  }
});

choicesEl.appendChild(button);
});
};

showQuiz();

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click",()=> {
 showQuiz(); 
})



