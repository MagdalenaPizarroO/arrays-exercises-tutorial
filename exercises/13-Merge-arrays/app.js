let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

//esta es la solución de ellos... súper complicada para mi gusto xd
const mergeArrays = (firstArray, secondArray) => {
    // this array with contain items from both original arrays
    let newArray = []
    
    // loop the first array and add each item to newArray
    firstArray.forEach(item => {
        newArray.push(item)
    })
    // loop the SECOND array and add each item to newArray
    secondArray.forEach(item => {
        newArray.push(item)
    })

    //return merged array
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));


//esta es mi solución .-. ; tienen el mismo resultado xddd

const both = chunk_one.concat(chunk_two);
console.log(both)