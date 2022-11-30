
/*
     Desenvolvido por: Johnny 
     Instagram:https://www.instagram.com/jhs_ms/  
     ou jhs_ms se gostou do meu trabalho segue-la e mande um Oiiii!
*/


/* variavel botao recebe calcular */
var botao=document.getElementById("calcular");  
/*  quando clickado no botao faca */
botao.addEventListener("click",aviso=()=>{
    
    /* coverta o valor de pr em numero verifique se ele e NaN. se o valor de NaN for true faca */
    isNaN(Number(document.getElementById("pr").value))===true?
    /* adicione uma class com o nome caracter */
    document.getElementById("pr").classList.add("caracter")
    /*se nao remova um class com o nome caracter */
    :document.getElementById("pr").classList.remove("caracter");
     /*converta o valor de vl por numero verifique se ele e NaN, se o valor de NaN for true faca */
    isNaN(Number(document.getElementById("vl").value))===true?
    /*adicione um class com o nome caracter */
    document.getElementById("vl").classList.add("caracter")
    /*remova um class com o nome caracter */
    :document.getElementById("vl").classList.remove("caracter")
   
}
)
/* crie uma variavel com o nome block que recebera um documento do html com o Id block  */
var block=document.getElementById("block")  
/*quando clickado em block faca */
block.addEventListener("click",block=(e)=>{
    /*prevent cacelando eventos padroes */
    e.preventDefault()
    /*variavel pr busca dentro da form uma tag que contenha a com o Id pr */
    var pr = document.querySelectorAll('form #pr')
    /* verifique se na arrey pr no indice 0 com o nome disabled esta felse */
    pr[0].disabled=false
    /* defina/adicione um atributo com o nome hidden com o valor true em block */
    document.getElementById("block").setAttribute("hidden",true)
    /* remova a class material-icons de block */
    document.getElementById("block").classList.remove("material-icons")
    /*remova block de lt */
    document.getElementById("lt").classList.remove("block")
    /*remova a class block de pr */
    document.getElementById("pr").classList.remove("block")


})

/*
     Desenvolvido por: Johnny 
     Instagram:https://www.instagram.com/jhs_ms/  
     ou jhs_ms se gostou do meu trabalho segue-la e mande um Oiiii!
*/
