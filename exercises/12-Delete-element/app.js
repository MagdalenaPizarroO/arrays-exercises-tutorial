let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below

function deletePerson(name) {
    return people.filter(person => person !== name);
}


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
