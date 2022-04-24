//Ejercicio semana santa

//1.Bucles

console.log("Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.");

const uno=[];
    for(let i=4 ; i < 10 ; i++){
        uno.push(i);
    }
    console.log(uno);

console.log("Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.");

const dos=[];
    for(let i=3 ; i%2==1 && i<18 ; i++){
        dos.push(i);
        i++;
    }
    console.log(dos);

console.log("Utiliza la siguiente array para resolver los próximos ejercicios:");

    let gente = [
      {
        nombre: "Jamiro",
        edad: 45,
      },
      {
        nombre: "Juan",
        edad: 35,
      },
      {
        nombre: "Paco",
        edad: 34,
      },
      {
        nombre: "Pepe",
        edad: 14,
      },
      {
        nombre: "Pilar",
        edad: 24,
      },
      {
        nombre: "Laura",
        edad: 24,
      },
      {
        nombre: "Jenny",
        edad: 10,
      },
    ];

console.log(gente);

console.log("Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.");

const mayorq25 = [];
    for(const persona of gente){
      if(persona.edad>=25){
        mayorq25.push(persona.nombre);
      }
    }
    console.log(mayorq25);
  
console.log("Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.");

const empiezaJ =[];
    for(const letra of gente){
      if(letra.nombre.substring(0,1)==='J'){
        empiezaJ.push(letra.nombre);
      }
    }
    console.log(empiezaJ);

console.log("Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.");

const cuatroletra=[];
    for(const NLetra of gente){
      if(NLetra.nombre.length===4){
        cuatroletra.push(NLetra.nombre);
      }
    }
    console.log(cuatroletra);

console.log("Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.");

const EJMenor40 = [];
    for(const menor40 of gente){
      if((menor40.nombre.substring(0,1)==='J')&&(menor40.edad<40)){
        EJMenor40.push(menor40.nombre);
      }
    }
    console.log(EJMenor40);


  //2.Objetos

//------------------------------------------------------------------------------------------------------------------------------
console.log("Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'");
//------------------------------------------------------------------------------------------------------------------------------

const ordenador={
    marca:"La pava",
    tipo:"portátil",
    perifericos:["asd","touchPad"],
    almacenamiento:{
      discos:["sdf","HDD"],
      maestro:0,
    }

}

// TEST 1
if (typeof ordenador === "object") {    //?
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {         //?
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//------------------------------------------------------------------------------------------------------------------------------
console.log("Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'");
//------------------------------------------------------------------------------------------------------------------------------

const obj={
  a:{
    b:true,
    c:["asd",123],
  },
  d:6,
  f:"test",
}

// TEST 1
if (typeof obj === "object") {        //?
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (typeof obj.a.b === "boolean") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3
if (typeof obj.a.c[1] === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof obj.d === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (obj.d > 4 && obj.d < 8) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (typeof obj.f === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 7
if (obj.f.length === 4) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//------------------------------------------------------------------------------------------------------------------------------
console.log("Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'");
//------------------------------------------------------------------------------------------------------------------------------
const arr=[{
  name:"pepito",
  age:25
},{
  name:"pepito",
  age:10,
},{
  name:"Juan",
  age:9,
}];

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {       //?
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (arr[1].name === "pepito") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 8
if (arr[0].age === 25) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//3.Function

//Crea la función convierteString debe recibir un tipo number y devolver el número como string .
//Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

function convierteString(x){
  if(typeof x === 'number'){
    return x.toString();
  }else{
    return 'Debo ser ejecutada con un número';
  }
}
console.log(convierteString(2));

//Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
//Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
//Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial(i){
  if(typeof i == 'string' && i !== " "){
    return i.charAt(i.length0);
  }else if(typeof i !== 'string'){
    return 'Debo ser ejecutada con un string';
  }else if(i==" "){
    return  'Debo ser ejecutada con un string no vacío';
  }
}
console.log(caracterInicial(123))


//Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
//Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
//Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(a){
  if(typeof a === 'string'){
    return a.charAt(a.length-1);
  }else if(typeof a !== 'string'){
    return  'Debo ser ejecutada con un string';
  }else if(typeof a === ' '){
    return 'Debo ser ejecutada con un string no vacío';
  }
}
console.log(ultimoCaracter("dfg"))

//Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
//Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracteres(b){
  if(typeof b === 'string'){
    return b.length;
  }else if(typeof b !== 'string'){
    return 'Debo ser ejecutada con un string';
  }
}
console.log(cuentaCaracteres("asddfg"));

//Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades 
//separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función 
//no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'

function getCiudadesOrdenada(a,b,c){
  let d = new Array(a,b,c);
  if(typeof d[(0,1,2)].length == 0 || d === undefined){
    return 'no es un formato correcto';
  }else{
    return d.sort();
  }
}
console.log(getCiudadesOrdenada("Madrid","Barcelona","Valencia"))

//Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  
//Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
//Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'


function esPalindromo(x){
  if(typeof x == 'string' && x.length !== 0 && x !== ' '){
    const xReverse = x.split('').reverse().join('');{
        if(xReverse === x){
            return 'Es palindromo';
        }else{
            return 'No es palindromo';
        }
    }
  }else{
      return 'introduce un String valido o no vacio';
  }
}
console.log(esPalindromo(' '))

//Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
//Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(N){
  if(typeof N === "number"){
    return N.toFixed(2);
  }else{
    return "no es un formato correcto";
  }
}
console.log(getPrecioMostrar(56.123123123));

//Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

function division(a,b){
  console.log(arguments[0])
}
division(6/2)

  //Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(N){
  if(N%2==0){
    return "es par";
  }else{
    return "es impar";
  }
}
console.log(esPar(3));

//Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

const N = [923,234,545,456,167,678,289];

function ordenarArray2(arr){
  return arr.sort(function(a,b){
    return b - a;
  })
}
console.log(ordenarArray2(N));

//Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

const numerosImpares = [23,4,6,9,8,22,66];

function obtenerImpares(num){
  let x = numerosImpares.length;
  let newArray=[];
  for(let i = 0 ; i < x ; i ++){
    if(num[i]%2 !== 0){
      newArray.push(num[i]);
    }
  }
  return newArray;
}
console.log(obtenerImpares(numerosImpares));

//Crear la función sumarArray que acepte como argumento un array numérico y devuelva 
//la suma de los números en el array Array: [1, 2, 3] resultado: 6

const sumar=[]

function sumarArray(a,b,c){
  return a+b+c;
}
console.log(sumarArray(1,2,3))



//Crear la función multiplicarArray que acepte como argumento un 
//array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

const multiplica=[]

function multiplicarArray(a,b,c){
  return a*b*c;
}
console.log(multiplicarArray(2,3,4))

//Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. 
//Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

const numeros=[10,5,8,6,7,1,3];

function arraydenumeros(array,value){
  let len = numeros.length;
  let newArray=[];
  for(let i = 0 ; i < len ; i++){
    if(array[i] > value){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(arraydenumeros(numeros,5))

//Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro 
//para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 

function numeroprimo(x){
  for(let i = 2 ; i < x ; i ++){
    if(x%i == 0 ){
      return 'no es primo';
    }else{
      return 'es primo';
    }
  }
}
console.log(numeroprimo(66))

//Crea una función checkPasswordcon una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt),
// con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y 
//mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

const password = 'contrasenia'
//checkPasswordcon();

function checkPasswordcon(){
  let contador = 0;
  while (contador < 3){
    const logPassword = prompt('introduzca password, te quedan ${3 - contador} intentos');
    contador ++ ;
    if(password === logPassword){
      alert('Enhorabuena');
      break;
    }
    contador < 3 ? alert('Incorrecto, prueba otra vez') : alert('Incorrecto, Has gastado todos tus intentos');
  }
}


//Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), 
//según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
//+: suma los dos operadores.
//-: resta los operandos.
//*: multiplica los operandos.
///: divide los operandos, este debe dar un resultado con decimales (double)
//^: 1o operando como base y 2o como exponente.
//%: módulo, resto de la división entre operando1 y operando2.


function CalculadoraInversa(int,int1,string){

  switch(string){
    case '+':
      console.log(int + int1);
      break;
    case '-':
      console.log(int - int1);
      break;
    case '*':
      console.log(int * int1);
      break;
    case '/':
      console.log(int / int1);
      break;
    case '^':
      console.log(int ** int1);
      break;
    case '%':
      console.log(int % int1);
      break;
  }
}
CalculadoraInversa(2, 3, '/');