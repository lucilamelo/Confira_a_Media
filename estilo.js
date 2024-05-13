var div = document.getElementById("resp");

function verifica(){

    let num_1 = parseFloat(document.getElementById("num_1").value);
    let num_2 = parseFloat(document.getElementById("num_2").value);
    let num_3 = parseFloat(document.getElementById("num_3").value);
    let media = ((num_1 + num_2 + num_3) /3).toFixed(2)
    let text = "";
    
    if (media >= 6){
        text = `A sua média é: ${media}, você foi aprovado "Parabéns"!`;        

    }else{
        text = `A sua média é: ${media}, você foi reprovado "Tente melhorar"!.`;

    }
    div.innerHTML=text;
}