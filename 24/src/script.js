
const position = document.querySelector("#botaao")


position.addEventListener("click", botaao)



function botaao() {
    
    const primeiro = document.querySelector("#primeiro").value
    const segundo = document.querySelector("#segundo").value
    const porcentagens = document.querySelector("#select").value
    let resultado = (primeiro * porcentagens / segundo).toFixed(2)
    document.getElementById("valor").innerHTML = (resultado);
}   
