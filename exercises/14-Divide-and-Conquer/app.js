let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
//su solución...
function mergeTwoList(array){
    let odd = []
    let even = []

    for (let i = 0; i < array.length; i++) {
        array[i] % 2 == 0 ? even.push(array[i]) : odd.push(array[i])
    }

    return odd.concat(even)
}
console.log(mergeTwoList(list_of_numbers));

//mi solución...
function mergeTwoList2() {
    let odd = [];
    let even = [];

    for (let i = 0; i < list_of_numbers.length; i++) {
        if (list_of_numbers[i]%2 === 0) {
            even.push(list_of_numbers[i])
        } else {
            odd.push(list_of_numbers[i])
        }
    }
    const all = [].concat(odd, even);
    return all;
}

console.log(mergeTwoList2(list_of_numbers));