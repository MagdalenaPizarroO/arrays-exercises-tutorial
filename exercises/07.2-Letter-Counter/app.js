let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let i in par) {
    const letter = par[i].toLowerCase(); 
    //si hago console.log(letter), me va a separar todas las letras.
    if(letter == " ") continue; //es decir, se salta los espacios
    else if(counts[letter] == undefined){
        counts[letter] = 1; // es decir, la primera vez que encuentra esa letra, le asigna el número 1
    }
    else{
        counts[letter] = counts[letter] + 1; // cada vez que la vuelva a encontrar, le suma 1
    }
}
console.log(counts);


