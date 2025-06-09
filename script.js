console.log("hi")

var nama1 = "test1"
let nama2 = "test2"
const nama3 = "test3" //tidak bisa diubah

console.log(nama1)
console.log(nama2)
console.log(nama3)

function test() {

    for (let i=0;i<5;i++) {
        var test3 = "test3"
        console.log("test for" + i)
        let test4 = "test4"
        console.log(test4)
    }
    console.log(test3)
}

test()

const food ="burger"
let amnt = 10
var test = false

let foodText = document.getElementById("foodText")
checkButton.addEventListener("click", checkFood)
let resultText = document.getElementById("resultText")
console.log(resultText)

function checkFood(){
    foodText = foodText.ariaValueMax.toLowerCase()
    if (foodText == "bread" || foodText == "rice"){
        resultText.innerHTML = "Healthy"
        resultText.style.color = "green"
    } else if (foodText == "burger" || foodText == "pizza") {
        resultText.innerHTML = "Not Healthy"
        resultText.style.color = "red"
    } else (
        resultText.innerHTML = "I don't know if ${foodTextval} is healthy"
    )
}
