function add_style(){
    let buttons = document.querySelectorAll("button")
    for(let i = 0; i<buttons.length; i++){
        let harf = buttons[i].textContent;
        if(harf == "="){
            buttons[i].classList.add("btn-blue");
        }
        else if("0123456789.".includes(harf)){
            console.log(harf)
            buttons[i].classList.add("btn-light-gray");
        }
        else{
            buttons[i].classList.add("btn-gray");
        }
    }
}

add_style()

var result = document.querySelector("#result")
var amallar = "*-+/"

function qosh(a){
    console.log(a)
    if(a == "AC"){
        result.textContent = "0"
    }
    else if(a == "="){
        result.textContent = String(parseFloat(eval(result.textContent)).toFixed(2));
    }
    // else if(a == "."){   
    //     len = result.textContent.length
    //     if(!Number.isNaN(result.textContent[len - 1])){
    //         console.log(result.textContent[len - 1])
    //         result.textContent += a
    //     }
    // }
    else if(amallar.includes(a)){
        len = result.textContent.length
        if(amallar.includes(result.textContent[len - 1])){
            result.textContent = String(result.textContent).slice(0, len - 1) + a
        }
        else{
            result.textContent += a
        }
    }
    else{
        result.textContent += a
    }
}