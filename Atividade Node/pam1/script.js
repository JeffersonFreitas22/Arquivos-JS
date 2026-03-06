// Leo
let Lnota1 = Number(document.querySelector(".Lnota1").textContent);
let Lnota2 = Number(document.querySelector(".Lnota2").textContent);
let Lnota3 = Number(document.querySelector(".Lnota3").textContent);
let mediaLeo = (Lnota1 + Lnota2 + Lnota3) / 3;
document.querySelector(".mL").textContent = mediaLeo.toFixed(2);

if (mediaLeo >= 6) {
    document.querySelector(".sL").textContent = "Aprovado";
} else {
    document.querySelector(".sL").textContent = "Reprovado";
}

// Jefferson
let Jnota1 = Number(document.querySelector(".Jnota1").textContent);
let Jnota2 = Number(document.querySelector(".Jnota2").textContent);
let Jnota3 = Number(document.querySelector(".Jnota3").textContent);
let mediaJefferson = (Jnota1 + Jnota2 + Jnota3) / 3;
document.querySelector(".mJ").textContent = mediaJefferson.toFixed(2);

if (mediaJefferson >= 6) {
    document.querySelector(".sJ").textContent = "Aprovado";
} else {
    document.querySelector(".sJ").textContent = "Reprovado";
}


// Miguel
let Mnota1 = Number(document.querySelector(".Mnota1").textContent);
let Mnota2 = Number(document.querySelector(".Mnota2").textContent);
let Mnota3 = Number(document.querySelector(".Mnota3").textContent);
let mediaMiguel = (Mnota1 + Mnota2 + Mnota3) / 3;
document.querySelector(".mM").textContent = mediaMiguel.toFixed(2);

if (mediaMiguel >= 6) {
    document.querySelector(".sM").textContent = "Aprovado";
} else {
    document.querySelector(".sM").textContent = "Reprovado";
}


// Diego
let Dnota1 = Number(document.querySelector(".Dnota1").textContent);
let Dnota2 = Number(document.querySelector(".Dnota2").textContent);
let Dnota3 = Number(document.querySelector(".Dnota3").textContent);
let mediaDiego = (Dnota1 + Dnota2 + Dnota3) / 3;
document.querySelector(".mD").textContent = mediaDiego.toFixed(2);

if (mediaDiego >= 6) {
    document.querySelector(".sD").textContent = "Aprovado";
} else {
    document.querySelector(".sD").textContent = "Reprovado";
}


// Felipe
let Fnota1 = Number(document.querySelector(".Fnota1").textContent);
let Fnota2 = Number(document.querySelector(".Fnota2").textContent);
let Fnota3 = Number(document.querySelector(".Fnota3").textContent);
let mediaFelipe = (Fnota1 + Fnota2 + Fnota3) / 3;
document.querySelector(".mF").textContent = mediaFelipe.toFixed(2);

if (mediaFelipe >= 6) {
    document.querySelector(".sF").textContent = "Aprovado";
} else {
    document.querySelector(".sF").textContent = "Reprovado";
}