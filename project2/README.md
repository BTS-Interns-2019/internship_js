# Projects V2.0

Today we will be focused on the **CODE** 👾💻👾.

Performance of code and **[code style](https://github.com/airbnb/javascript)** will be checked.

remember you have:

* One question per Team
* Array methods
* String methods
* Number methods
* A lot of utilities in javascript vanilla

1. Create a clean branch from master
1. Create a folder with the name of your team. inside project2
1. Create tests based on the documentation I gave you... for each function you create
1. Create your solutions/functions to solve the problem
1. Create a REAMDE.md file telling an horror story 😁 just kidding... maybe 😉, explain which were your issues while solving each of the following problems.


## Morse Code

### Explicación del Problema

El Código Morse es un medio de comunicación basado en la transmisión y recepción de mensajes empleando un alfabeto alfanumérico compuesto por *puntos* y *rayas*.

En este problema se busca decodificar la entrada de un mensaje escrito en código morse traduciendolo al alfabeto alfanumerico utilizado en el idioma ingles (letras A-Z y digitos 0-9).

Esta es la representacion del codigo morse para cada letra del alfabeto inglés y para cada digito del sistema númerico decimal.

![morse code](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/International_Morse_Code.svg/1200px-International_Morse_Code.svg.png)

### Explicacion de la Función

La función que se utilizará para resolver este problema llevará el nombre de <code>morse</code> la cual recibirá un solo parametro tipo <code>string</code> llamado <code>binaryMorseCode</code> el cual sera la representación del código morse en lenguaje binario y retornará como resultado un <code>string</code> que contendrá el mensaje traducido a alfabeto humano. Ejemplo:

javascript
morse("110011001100110000001100000011"){
  // Código que resuelve el problema\n
  return mensaje;
}


En este caso una unidad del codigo morse vendrá a ser representada por dos valores en lenguaje binario de la siguiente manera:

| *Elemento* | *Unidades* | *Representación Binaria* |
|--------------|--------------|----------------------------|
| Punto | 1 Unidad | 11 |
| Linea | 3 Unidades | 111111 |
| Espacio entre las partes de la misma letra | 1 Unidad | 00 |
| Espacio entre letras | 3 Unidades | 000000 |
| Espacio entre palabras | 7 Unidades | 00000000000000 |

### Solución del Problema

Para solucionar este problema se opto por llevar a cabo los siguientes pasos:

1. *Creación de la Tabla de Equivalencias:* Basicamente se trata de un array de dos dimensiones donde almacenaremos cada letra y digito junto a su representacion en codigo morse quedando algo así:

javascript
[
 ['A', '.-'],
 ['B', '-...'],
 ['C', '-.-.'],
 ...
 ['0', '-----']
]


2. *Separación del codigo en palabras, palabras en letras y letras en sus partes:* Se hizo un split para separar las palabras de acuerdo al separador entre palabras (00000000000000), a cada palabra se le hizo split para separar sus letras de acuerdo a su separador (000000) y a cada letra se le hizo split para ser separada en sus partes con su separador (00). Teniendolas separardas se fue iterando sobre cada palabra, letra y parte para ser decodificada una por una.

3. *Conversion Morse-Inglés:* Cuando se obtiene cada parte que conforma a una letra se unen en un string para ser buscada en la tabla de equivalencias, si la letra fue encontrada la concatenara con la variable que retornaremos al final, y si por el contrario esta no fuera encontrada no retornará valor alguno terminando con la función.
```

## Fibonacci sequence

### Introduccion
Es una serie que comienza con los números 0 y 1,2​ y a partir de estos, «cada término es la suma de los dos anteriores», es la relación de recurrencia que la define.
Un ejemplo de elloes la siguiente:

0,1,1,2,3,5,8,13,21,34...
**Ejemplo: (0+1=1 / 1+1=2 / 1+2=3 / 2+3=5 / 3+5=8 / 5+8=13 / 8+13=21 / 13+21=34...)

### Problema
El problema establecido tiene las siguientes requisitos:
- Usar BigInt
- Poder calcular el numero 2000 de fibonacci
- La funcion debe llamarse fibonacci

### BigInt
BigIntes un objeto incorporado que proporciona una forma de representar números enteros mayores que 2^53 , que es el número más grande que JavaScript puede representar de manera confiable.BigInt se puede usar para enteros grandes.

### Solucion
- La funcion recibe como parametro n que es el numero a calcular en la serie de fibonacci
---
function fibonacci(n) {
---

-Crea un objeto donde almacena los registros 

---
let fibo={}
---

- Valida que se cumplan las condiciones
---
  }
    if (n <= 1 || n === 2){// si la posicion es igual a 1 o 2 nos regresa 1
        return 1;
    }
---

- Guarda los registros anteriores y retorna con la conversion de BigInt y la operacion de los numeros
---
    return fibo[n]=BigInt(fibonacci(n - BigInt(1),fibo)) + BigInt(fibonacci(n - BigInt(2),fibo))
  }

 ejemplo: fibonacci(5)
 1,1,2,3,5
---
```

## Sum like kindergarten

A string representation of an integer will contain no characters besides the ten digits of "0" to "9".

you are not allowed to do
`strNum1 + strNum2`

function specs

```js
function (strNum1, strNum2) {

    return "sum of strNum1, strNum2"
}
```

### kSum()
- La funcion kSum() evalua los numeros recibidos en string estos asginalodos a num1 el mas grande y num2 el mas pequeño cada variable num1 y num2 se colocan en un arreglo con cada valor del mismo seguin cada digito de los datos resibidos se suma posicion por posicion num1[i] + num2[i] en res[i]sinedo i el indice. Si hubiera crecido el numero en logitud se guarda en aux y se suma al suigiente numero en evaluar.

##### *Por ejemplo


`-->1 llevamos `\
`   12'8'020 `\
` +   '3'025`\
` =131045`
