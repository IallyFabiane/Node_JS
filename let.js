// let -> tem que ser declarada antes de ser inicializada; seu valor pode ser reatribuído.
let forma = "retangulo";
let altura= 5;
let comprimento = 7;
let area;

if (forma === "retangulo") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2
}

console.log(area);