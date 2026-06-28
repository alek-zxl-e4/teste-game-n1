const botao1 = 
document.getElementById("botao1");
const botao2 =
document.getElementById("botao2");
const botao3 =
document.getElementById("botao3");

botao1.addEventListener("click", () => {
    console.log("iniciando jogo...");
});

botao2.addEventListener("click", () => {
    console.log("abrindo configurações...");
});

botao3.addEventListener("click", () => {
    console.log("abrindo créditos...");
});

const titulo =
document.getElementById("titulo");
let y = -500;
let velocidade = 0;
const gravidade = 0.8;
const chao = 0;
let quicadas = 0;

function animar() {
    velocidade += gravidade;
    y += velocidade;

    if (y >= chao) {
        y = chao;
        velocidade *= -0.45;
        quicadas++;

        if (quicadas >= 3 && Math.abs(velocidade) < 2) {
            velocidade = 0;
            y = chao;
            titulo.style.transform = `translateY(${y}px)`;
            return;
        }
    }
    titulo.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(animar);
}
animar();