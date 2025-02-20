/*variáveis que se referem a um grupo inteiro de itens da mesma classe*/ 
var menuItem=document.querySelectorAll(".Elementos");

function inativo(){
    /* plavra "item" é um parâmetro(uma variável criada na função.)*/
    /* "ativo se refere a uma classe que supostamente estaria dentro da classe "elementos"
    seria responsável por deixar o item em estado expandido quando a barra lateral for ativada */
    menuItem.forEach((item) => item.classList.remove(".ativo"));
}

// caaso alguém puder me ajudar nisso, seria bom, tentei explicar como eu entendi do tutorial do youtube :)
//link pra vcs saberem de onde eu tirei isso:
//https://www.youtube.com/watch?v=mm4TAzPYvm4
//https://www.youtube.com/watch?v=Poh9zuXp0YA
