function takeValue(x) {
    console.log(x)
    document.getElementById('Result').innerHTML += x;
}

function clearInput() {
    document.getElementById('Result').innerHTML = "";
}

function calculateResult() {
    var result = eval(document.getElementById('Result').innerHTML);
    document.getElementById('Result').innerHTML = result;
}

function Fcero() {
    if (document.getElementById('Result').innerHTML !='') {
        takeValue(0);
    } 
    
}
function Funo() {
    takeValue(1);
}
function Fdos() {
    takeValue(2);
}
function Ftres() {
    takeValue(3);
}
function Fcuatro() {
    takeValue(4);
}
function Fcinco() {
    takeValue(5);
}
function Fseis() {
    takeValue(6);
}
function Fsiete() {
    takeValue(7);
}
function Focho() {
    takeValue(8);
}
function Fnueve() {
    takeValue(9);
}
function Fsuma() {
    takeValue("+");
}
function Fresta() {
    takeValue("-");
}
function Fmultiplicacion() {
    takeValue("*");
}
function Fdivision() {
    takeValue("/");
}
function Fporcentaje() {
    takeValue("/100");
    calculateResult();
}
function Fnegativo() {
    takeValue("-");
}
function Fdecimal() {
    if (document.getElementById('Result').innerHTML !='') {
        takeValue(".");
    } 
}
function Fresultado() {
    calculateResult();
}

