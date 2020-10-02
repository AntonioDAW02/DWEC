var var1 = null == undefined;
var var2 = "NaN" == NaN;
var var3 = 5 == NaN;
var var4 = NaN == NaN;
var var5 = NaN !== NaN;
var var6 = false == 0;
var var7 = true == 1;
var var8 = true == 2;
var var9 = undefined == 0;
var var10 = null == 0;
var var11 = "5" == 5;

//Son iguales porque js realiza coerción y convierte la parte de undefined en null.
alert("El resultado de null == undefined es: " + var1);

//No son iguales porque esta comparando una cadena con un NaN.
alert("El resultado de 'NaN' == NaN es: " + var2);

//No son iguales porque está comaprando un número con un NaN.
alert("El resultado de 5 == NaN es: " + var3);

//No son iguales porque es indeterminado.
alert("El resultado de NaN == NaN es: " + var4);

alert("El resultado de NaN != NaN es: " + var5);

//Son iguales porque el 0 equivale a false.
alert("El resultado de false == 0 es: " + var6);

//Son iguales porque el 1 equivale a true.
alert("El resultado de true == 1: " + var7);

//No son iguales porque compara el booleano true con el número 2.
alert("El resultado de true == 2: " + var8);

//No son iguales porque 0 no es igual a que una variable no está definida.
alert("El resultado de undefined == 0: " + var9);

//No son iguales porque null es que está vacío y eso no es igual a 0.
alert("El resultado de null == 0: " + var10);

//Son iguales porque en ambos casos es el número 5 y no es igualdad estricta.
alert("El resultado de '5' == 5: " + var11);