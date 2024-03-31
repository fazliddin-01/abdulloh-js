let str = "Lorem ipsum, dolor sit, amet consectetur, adipisicing elit. fugit, accusamus?"
let arr = str.split('')
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'o' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'a' || arr[i] == 'u') {
        arr.splice(i,1)
    }
}
let string = arr.join('')
console.log(string);
