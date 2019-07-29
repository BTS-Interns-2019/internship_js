/*july 23

#Objects

Create a file `homework_<name>.js` in your own branch in this folder

The file must contain your own function that mimics ( the same input, results in the same output comparing with the original method )
the folowing methods without ussing that method

```js
Object.assign()
Object.defineProperties()
Object.entries()
Object.freeze() // create new freezed object
Object.seal() // create new sealed object
Object.fromEntries()
Object.getOwnPropertiesDescriptors()
Object.isFrozen()
Object.isSealed()
Object.keys()
Object.values()
```

example:
```js
// Object.assign

function assign(){
  /* your code here 
}*/

function Main(){

//assign();
defineProperties();
//entries();
//freeze();
//seal();
//fromEntries();
getOwnPropertiesDescriptors();
//isFrozen();
//isSealed();
//keys();
//values();

}

Main();

function assign(){

    let obj1 = {a:1,b:2,c:3};
    let obj2 = {a:3,c:6,e:5};
    let obj3 = {};

    for (var prop1 in obj1){
        for (var prop2 in obj2 ){
           if (prop1 == prop2){
                obj3[prop2] = obj2[prop2];
                break;
           }else {
                obj3[prop1] = obj1[prop1];
           }
        }
    }
    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
}

function defineProperties(){
    
}

function entries(){
    let obj1 = {a:1,b:2,c:7,d:4};
    let arryTemp = new Array();
    var temp = Object.keys(obj1);
    let arry = new Array(temp.length);
    var temp2 = '';

    for (let x = 0; x<temp.length; x++){
        temp2 = temp[x];
        for (var y = 0; y < 2; y++){
            if (y == 0){
                arryTemp[y] = temp[x]; 
            }else if (y == 1){
                arryTemp[y] = obj1[temp2];
            }
        } 
        arry[x] = arryTemp;
        console.log(arry[x]);
    }
    console.log(arry);
}

function freeze(){
    let obj1 = {};

    Object.defineProperties(obj1, {
            a: {
                value: 23,
                writable: false,
                enumerable: false,
                configurable: false
            }
        }
    );
    console.log(obj1);
    obj1.a=34;
    obj1.b=0;
    console.log(obj1);
}

function seal(){
    let obj1 = {};

    Object.defineProperties(obj1, {
            a: {
                value: 23,
                writable: false,
                enumerable: false,
                configurable: false
            }
        }
    );
    console.log(obj1);
    obj1.a=34;
    obj1.b=0;
    console.log(obj1);
}

function fromEntries(){
    let arry = [['a',3],['b','remo',],['c',45]]
    let obj = {};

for ( var temp of arry){
    if (Array.isArray(temp)){
        obj[temp[0]] = temp[1];
    }
}
console.log(obj);
}

function getOwnPropertiesDescriptors(){

}

function isFrozen(){
    let obj1 = {};

    Object.defineProperties(obj1, {
            a: {
                value: 23,
                writable: false,
                enumerable: false,
                configurable: false
            }
        }
    );

    obj1.a = 35;
    if (obj1.a === 23){
        console.log('Objeto está freeze');
    } else {
        console.log('que loco');
    }

}

function isSealed(){
    let obj1 = {};

    Object.defineProperties(obj1, {
            a: {
                value: 23,
                writable: false,
                enumerable: false,
                configurable: false
            }
        }
    );

    obj1.a = 35;
    if (obj1.a === 23){
        console.log('Objeto está seal');
    } else {
        console.log('que loco 2');
    }
}

function keys(){
    let obj1 = {w:1,b:2,z:7,d:4};
    
    let temp = Object.getOwnPropertyNames(obj1);

    console.log(temp);
}

function values(){
    let obj1 = {w:1,x:2,c:'something',z:7,y:4};
    let arry = new Array(0);

    console.log(arry.length);

   for (let temp in obj1){
       arry[arry.length] = obj1[temp];
   }

   console.log(arry);
}