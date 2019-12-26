var minhaVar = 'minha variavel';
function minhaFun(x, y) {
    return x + y;
}
//ES6 ou ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//ES 2015
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
//transpiler - transforma o codigo de Typescript em Javascript.
var variavel = 1;
var variavel3;
variavel3 = 5;
