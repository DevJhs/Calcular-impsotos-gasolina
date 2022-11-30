
/*
     Desenvolvido por: Johnny 
     Instagram:https://www.instagram.com/jhs_ms/  
     ou jhs_ms se gostou do meu trabalho segue-la e mande um Oiiii!
*/

/* constante que recebe o botao calcular */
const calcular=document.getElementById("calcular");  

/*evento de click quando click no botao ira validar e passar os resultados */
calcular.addEventListener("click",validar=(e)=>{
    /*prevent ira calcelar eventos padroes */
    e.preventDefault();
        /* variavel pr que receber um campo de input  */
        var  pr=document.querySelectorAll("form #pr")
        /* constante recebera campos de inputs com os valores*/
        const lt=document.getElementById("pr").value,
        vl=document.getElementById("vl").value;

        /*validacao se vl e lt estivere vazios faca */
if(vl==""&&lt==""){
    /* adicione uma class com o nome caracter */
    document.getElementById("vl").classList.add("caracter")
    /* se o indice 0 da arrey de pr for igual a false faca  */
    if(pr[0].disabled===false)
    /* se lt estiver vazio */
        if(lt==""){
            /* adicione um class em pr com o nome caracter */
            document.getElementById("pr").classList.add("caracter")       
    }
    /* return nao faca mais nada  */
    return
    
}
/* validacao se vl estiver vazio faca */
 if(vl==""){
    /*adicione um class com o nome caracter */
    document.getElementById("vl").classList.add("caracter");    
    /*nao faca mais nada */
     return 
} 
/* converte valor pr em numero verifica se ele e NaN. 
  se for false faca
*/
if( isNaN(Number(document.getElementById("pr").value))===false){
        
        /* escreva em Tx um numero que esta dentro de vl multiplique por 40 divida por 100 */
        document.getElementById("Tx").innerHTML=parseFloat(vl)*40/100;

    /* se na arrey de pr no indice 0 da arrey com nome disabled for igual a false faca  */
    if(pr[0].disabled===false)
     /* se lt for igual a vazio */
        if(lt==""){
           /* adicionando class rm pr com o nome caracter  */
            document.getElementById("pr").classList.add("caracter")
           
    }else{
        /* se nao, escreva em Lt um numero decimal de vl dividido ecreva apena 3 casa decimais*/
         document.getElementById("Lt").innerHTML=parseFloat(vl/lt).toFixed(3)
    }

  }
});

/*
     Desenvolvido por: Johnny 
     Instagram:https://www.instagram.com/jhs_ms/  
     ou jhs_ms se gostou do meu trabalho segue-la e mande um Oiiii!
*/


    