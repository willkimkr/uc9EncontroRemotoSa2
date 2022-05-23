$(document).ready(function(){

    $("#barras").click(function(){
        $("#menu").toggleClass("#menu-ativo")
})          
})

$(document).ready(function(){
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()
})


setInterval(slide,3000)

function slide(){
    if($(".banner-ativo").next().length){
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    } 
}


//     $("#barras").click(function(){
//         if($("#menu").hasClass("#menu-nativo")){
//             $("#menu").removeClass("#menu-ativo")
//         }else{
//             $("#menu").addClass("menu-ativo")
//         }
//     })   
// })

//  function mostrarPopup(){
//     window.alert("Hello World")
// }
let email = document.getElementById("campo-email");


function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

let listaNoticias = [
    {
        titulo: "EA ira demitir cerca de 100 funcionarios",
        descricao: "Apos rompimento com a FIFA no inicio de maio quebrando tradicao de decadas"
    },
    {
        titulo:"A SONY volta para o BRASIL",
        descricao:"Apos mais de 2 anos a fabricante de eletronicos SONY volta para o Brasil com um ivestimento bilionario gerando mais de 100 mil empregos novos"
    },
    {
        titulo:"EA ira demitir cerca de 100 funcionarios",
        descricao:"Apos rompimento com a FIFA no inicio de maio quebrando tradicao de decadas"
    },
    {
        titulo:"A SONY volta para o BRASIL",
        descricao:"Apos mais de 2 anos a fabricante de eletronicos SONY volta para o Brasil "
    },
    {
        titulo:"EA ira demitir cerca de 100 funcionarios",
        descricao:"Apos rompimento com a FIFA no inicio de maio quebrando tradicao de decadas"
    },
    {
        titulo:"A Konami anuncia eFootball",
        descricao:"A Konami anunciou que o seu simulador de futebal gratuito vai receber no dia 2 de junho uma nova atualizacao"
    },
]

function renderizarNoticias() {
    let espaco = document.getElementById("espaco-noticias")

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticias = listaNoticias[index];
        
        template +=`<div class="cardnews">
        <img src="img/cards.svg" alt="foto gameover de noticias">
        <h3>${noticias.titulo}</h3>
        <p>${noticias.descricao}</p>
    </div>`
    }

    espaco.innerHTML = template;
}
