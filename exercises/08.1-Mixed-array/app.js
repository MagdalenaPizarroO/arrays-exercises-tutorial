let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

//esto es lo que armé yo, también funciona!!
let newArr = [];
for (i = 0; i < mix.length; i++) {
    newArr.push(typeof mix[i]);
}
console.log(newArr);


//esta es la respuesta para que el test salga bien :(
let newArray = [];
for (let i = 0; i < mix.length; i++) {
    const item = mix[i];
    newArray.push(typeof item)
    
}
console.log(newArray)