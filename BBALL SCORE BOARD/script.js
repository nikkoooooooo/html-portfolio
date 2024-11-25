let addScoreH = 0

//HOME

function addoneH(){
addScoreH += 1
document.getElementById("countScoreH").innerText = addScoreH
console.log(addScoreH)
countDownReset ()

}

function addtwoH(){
  addScoreH += 2
  document.getElementById("countScoreH").innerText = addScoreH
  console.log(addScoreH)
  countDownReset ()
  
  }

function addthreeH(){
  addScoreH += 3
  document.getElementById("countScoreH").innerText = addScoreH
  console.log(addScoreH)
  countDownReset ()
  
  }

function addFourH(){
  addScoreG += 4
  document.getElementById("countScoreG").innerText = addScoreG
  console.log(addScoreG)
  countDownReset ()
  
  }

//GUEST

let addScoreG = 0

function addoneG(){
  addScoreG += 1
  document.getElementById("countScoreG").innerText = addScoreG
  console.log(addScoreG)
  countDownReset ()
  
  }

function addtwoG(){
  addScoreG += 2
  document.getElementById("countScoreG").innerText = addScoreG
  console.log(addScoreG)
  countDownReset ()
  
  }
    
function addthreeG(){
  addScoreG += 3
  document.getElementById("countScoreG").innerText = addScoreG
  console.log(addScoreG)
  countDownReset ()
  
  }

function addFourG(){
  addScoreG += 4
  document.getElementById("countScoreG").innerText = addScoreG
  console.log(addScoreG)
  countDownReset ()
  
  }


  let count = 24;
  const countDownDisplay = document.getElementById("countDownDisplay")

  const interValId = setInterval(()=> {
    countDownDisplay.textContent = count;
    count--;
   if(count < 0){
    count += 25
   }

  }, 1000)


  function countDownReset (){
        count = 24;
  }

  

