
var userInput = prompt("가위,바위,보를 입력하세요");
console.log(userInput)
if (userInput != "가위" && userInput != "바위" && userInput != "보") {
    alert("가위,바위,보 중 하나를 입력하시오")
} else {
    var num = Math.floor(Math.random() * 9) + 1;
    console.log(num)
    
    if (num < 3) {
        comInput = "가위";
    }
    else if (num < 6) {
        comInput = "바위";
    }
    else {
        comInput = "보";
    }
    console.log(comInput)
    if (userInput == "가위"){
        if(comInput == "가위"){
            result = "비김"
        }if(comInput == "바위"){
            result = "패배"
        }if (comInput == "보"){
            result = "승리"
        }
        console.log(result)
    }
    if (userInput == "바위"){
        if(comInput == "바위"){
            result = "비김"
        }if(comInput == "보"){
            result = "패배"
        }if(comInput = "가위"){
            result = "승리"
        }
        console.log(result)
    }
    if (userInput == "보"){
        if(comInput == "보"){
            result = "비김"
        }if(comInput == "가위"){
            result = "패배"
        }if(comInput == "바위") {
            result = "승리"
        }
        console.log(result)
    }
}
