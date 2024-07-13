document.getElementById('limpar').addEventListener('click', limpar);
document.getElementById('clear').addEventListener('click', clear);
document.addEventListener('keydown', teclado);

let expressao_str = "";
let expressao_display = "";

function expressao(char){
    let display = document.getElementById('display');

    if(char == "*"){
        expressao_str += char;
        expressao_display += "x";
    }else if(char == "/"){
        expressao_str += char;
        expressao_display += "÷";
    }else{
        expressao_str += char;
        expressao_display += char;
    }

    console.log(expressao_str);
    display.innerText = expressao_display;
}

function teclado(event){
    let display = document.getElementById('display');
    let char = "";

    switch(event.keyCode){
        case 48:
        case 96:
            char = "0";
            break;
        case 49:
        case 97:
            char = "1";
            break;
        case 50:
        case 98:
            char = "2";
            break;
        case 51:
        case 99:
            char = "3";
            break;
        case 52:
        case 100:
            char = "4";
            break;
        case 53:
        case 101:
            char = "5";
            break;
        case 54:
        case 102:
            char = "6";
            break;
        case 55:
        case 103:
            char = "7";
            break;
        case 56:
        case 104:
            char = "8";
            break;
        case 57:
        case 105:
            char = "9";
            break;
        case 106:
            char = "*";
            break;
        case 107:
            char = "+";
            break;
        case 109:
            char = "-";
            break;
        case 110:
            char = ".";
            break;
        case 111:
            char = "/";
            break;
        case 13:
            resultado();
            break;
        case 8:
            limpar();
            break;
        default:
            break;
    }

    if(char != ""){
        if(char == "*"){
            expressao_display += "x";
            expressao_str += char;
        }else if(char == "/"){
            expressao_display += "÷";
            expressao_str += char;
        }else{
            expressao_display += char;
            expressao_str += char;
        }
    
        display.innerText = expressao_display;
    }
    
}

function limpar(){
    let display = document.getElementById('display');

    if(expressao_str.length == 1){
        display.innerText = "0";
        expressao_str = "";
        expressao_display = "";
    }else if(expressao_str.length > 1){
        if(expressao_str.length > 0){
            let nova_expressao_str = expressao_str.slice(0, -1);
            expressao_str = nova_expressao_str;

            let novo_display = expressao_display.slice(0, -1);
            expressao_display = novo_display;
            display.innerText = expressao_display;
            
        }else{
            console.log(expressao_str)
        }
    }
    
}

function clear(){
    let display = document.getElementById('display');

    display.innerText = "0";

    expressao_str = "";
    expressao_display = "";
}

function resultado(){
    let display = document.getElementById('display');

    try{
        const resultado = eval(expressao_str);
        display.innerText = resultado;
        expressao_display = "";
        expressao_str = "";
    }catch(error){
        display.innerText = "Erro na sentença";
        expressao_display = "";
        expressao_str = "";
    }

}
