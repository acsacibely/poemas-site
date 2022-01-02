 
//filtro do poemas
var bts = document.getElementsByClassName("filter-btn");
for(bt of bts){
    adEvent(bt.id);
}
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

//animação da máquina de escrever
function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML= '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 135 * i);
    });
}

const titulo = document.getElementById('title');
typeWriter(titulo);