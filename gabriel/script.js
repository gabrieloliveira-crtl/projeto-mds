// seleciona o elemento que contem todas as imagens do carrossel pelo ID 'carouselTrack'
const track = document.getElementById('carouselTrack');

// Seleciona todos os elementos com a classe 'carousel-item' e os armazena em uma node list
const items = document.querySelectorAll('.carousel-item');
let index = 0; // variavel que mantem o indice da imagem atual exivida no carrossel (começa em 0, a primeira imagem)

//função que move o carrossel para a proxima imagem
function moveCarousel() {
    //incrementa o indice em 1 para avançar para a proxima imagem
    index++;

    // verifica se o idice atual é maior ou igual a o numero de imagens (menos uma)
    // isso significa que o carrossel esta no final e precisa voltar ao inicio
    if (index >= items.length - 1) { // em JavaScript, a propriedade length é usada para retornar o numero de elementos em uma estrutura de dados, como string, um array ou uma lista de elements do DOM.

        //exemplo: "Hello".length       retorna 5, pois a string "Hello" tem 5 caracteres


        // Define um atraso de 500 milissegundos antes de executar a função de retorno ao inicio
        setTimeout(() => {


            track.style.transition = 'none';// Remove a transição para que o retorno ao inicio seja instantaneo e sem animação

            index = 0; // Move o carrossel de volta para a primeira imagem (posilçao inicial)

            track.style.transform = `translateX(0)`; // Move para a primeira imagem
            

        }, 500);//tempo suficiente para completar a transição visivel
        
    } else {
        //Caso o indice ainda nao tenha atingido o final, move o carrossel para a proxima imagem

        //adiciona uma transição suave de 0.5 segundos para o movimento do carrossel
        track.style.transition = 'transform 0.5s ease' // move o carrossel para a esquerda, usando o indice atual para calcular o deslocamento
        
        //exemplo: se index = 1, desloca -100%, se index = 2, desloca -200%, etc.
        track.style.transform = `translateX(-${index * 100}%)`; //desloca o carrossel
    }
};

//define um intervalo para chamar a funçao moveCarousel a cada 3000 milissegundos (3 segundos)
// Isso faz com que o carrossel se mova automaticamente a cada 1 segundo
setInterval(moveCarousel, 1000);