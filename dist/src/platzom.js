'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;

  //Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
  var reverse = function reverse(str) {
    return str.toLowerCase().split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str.toLowerCase() == reverse(str)) {
    return minMay(str);
  }

  //Si la palabra termina en 'ar' se quitan esos dos ultimos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  //Si la palabra inicia con 'z' se le agrega 'pe' al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  //Si la palabra traducida tiene 10 o mas letras se parte por la mitas y unir con un guion del medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondtHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondtHalf;
  }

  return translation;
}