let titulo = document.getElementById('titao');
//alert(titulo.innerHTML);
titulo.style = 'border:3px dotted blue;font-size:30pt;'
//document.querySelector('#var').value = 3.5;
//let vesao = document.querySelector('#var').value = 3.5;
//vesao = 4.5;
let primeironum = document.querySelector('#var')
let segundonum = document.querySelector('#var1')
function pereiraRes(){
    resultado.innerHTML = 'Informe algum valor diferente de 0'
};
document.querySelector('#var').onmouseout = function(){
    resultado.innerHTML = ''
};
document.querySelector('#bot').onclick = function(){
    if (parseFloat(primeironum) > parseFloat(segundonum )){resultado.innerHTML = 'O primeiro valor é maior'}
    else if(parseFloat(primeironum) < parseFloat(segundonum )){resultado.innerHTML = 'O segundo valor é maior'}
    else{resultado.innerHTML = 'os valores sao iguais'}

};