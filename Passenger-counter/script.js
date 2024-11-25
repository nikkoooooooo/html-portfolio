let AddPassenger = 0;
let TotalPassenger = 0;


function increment() {
    AddPassenger += 1
    document.getElementById("countEl").innerText = AddPassenger;


    console.log(AddPassenger)
    saveCount()
}


function decrement(){
    if (AddPassenger > 0){
    AddPassenger -= 1
    document.getElementById("countEl").innerText = AddPassenger;
    console.log(AddPassenger)
    saveCount()
    }
    saveCount()
}

function save(){
    TotalPassenger += AddPassenger
    document.getElementById("previousEn").innerText = AddPassenger
    console.log(AddPassenger)
    saveCount()
}

function saveCount (){
localStorage.setItem("data", countEl.innerHTML);

}

function showCount (){
countEl.innerHTML = localStorage.getItem("data")


}
showCount()

