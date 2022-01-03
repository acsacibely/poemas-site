 
//FILTRO DOS POEMAS
var bts = document.getElementsByClassName("filter-btn");
for(bt of bts){
    adEvent(bt.id);
}
/*ADICIONA EVENTO DE CLICK NOS BOTÕES DOS CARDS

DESSA FORMA, AO CLICAR NO NOME DOS AUTORES INDIVIDUALMENTE

A ANIMAÇÃO FILTRARÁ APENAS OS POEMAS DO AUTOR ESCOLHIDO

E ESCONDERÁ OS OUTROS POEMAS
*/
function adEvent(bt){
    let botao = document.getElementById(bt);
    botao.addEventListener("click", () => {
        //altera botão ativo
        for(elemento of bts){
            elemento.className = "main-btn filter-btn";
        }
        botao.className = "main-btn filter-btn active";
        //filtragem
        let todosElem = document.getElementsByClassName("project-box");
        let tipo = bt.substr(0, 3);
        for(imgs of todosElem){
            if(tipo == "all"){
                imgs.removeAttribute("hidden");
            }else{
                imgs.removeAttribute("hidden");
                if(imgs.className != ("col-sm-3 project-box "+tipo)){
                    let att = document.createAttribute("hidden");
                    imgs.setAttributeNode(att);
                }
            }
        }
    });
}

//ANIMAÇÃO MÁQUINA DE ESCREVER NO TÍTULO
function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML= '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 135 * i);
    });
}

const titulo = document.getElementById('title');
typeWriter(titulo);

/*

COM ESSA FUNÇÃO, O TÍTULO DO SITE NO ARQUIVO index.html TEM A ANIMAÇÃO DE MÁQUINA DE ESCREVER

PARA ISSO, AS LETRAS DO TÍTULO FORAM SEPARADAS COM .split E FOI USADA A FUNÇÃO forEach, OU SEJA,

PARA CADA LETRA, DEVE-SE AGUARDAR UM TEMPO PARA APARECER, TEMPO ESSE QUE FOI ESTIPULADO COM O 

setTimemout()

*/