// *********************************
// 로또 추첨기
// *********************************
const lotto = [0,0,0,0,0,0]
let bRun = false;

let lottoNum = [document.getElementById("num1"),
                document.getElementById("num2"),
                document.getElementById("num3"),
                document.getElementById("num4"),
                document.getElementById("num5"),
                document.getElementById("num6")]

function check(a,b){
  if(a<b){
    return -1;
  }else{
    return 1;
  }
}

function makeLotto(){
  lotto.push(0);
  for(let i=0; i<lotto.length; i++){
    let num = Math.floor(Math.random()*45+1);
    lotto[i] = num;
    for(let j=0; j<i; j++){
      if(lotto[i] === lotto[j]){
        i--;
        break;
      }
    }
    // lottoNum[i].textContent=lotto[i]
    // console.log(lottoNum)
  }

  let bonusNum = lotto.pop();
  lotto.sort(check)
  
  for(let k=0; k<lotto.length; k++){
    lottoNum[k].innerText=lotto[k];
  }
  document.getElementById("num7").innerText = bonusNum;
  
  // ******************************************************
  // 여기에 7개의 공에 로또 번호를 표시하는 코드를 작성하세요
  // ******************************************************
}

function init(){
  for(let i=0; i<lottoNum.length; i++){
    lottoNum[i].style.display = "none";
  }
  document.getElementById("num7").style.display = "none";
}

// 로또 번호 나타내는 코드를 작성하세요
function show(index){
  if (index === lottoNum.length){
    document.getElementById("num7").style.display = "inline-block";
  }else{
    lottoNum[index].style.display = "inline-block"
  }
}
  // document.write('로또 번호 : ' + lotto)


function run(){
  if(!bRun){
    init();
    makeLotto();
    bRun = true;
    for(let i=1; i<=7; i++){
      setTimeout(show,1000*i,(i-1));
    }
    setTimeout(function(){
      bRun=false;
    },8000);
  }
}

init();
let bntStart = document.getElementById('btnStart')
bntStart.addEventListener('click',run,true)
  
