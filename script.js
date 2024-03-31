let str = prompt('iltimos matn kriting')
while(str==0){
  let str = prompt('xatolik yuz berdi iltimos boshqattan yozing')
}
let arr = str.split('')
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'o' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'a' || arr[i] == 'u') {
        arr.splice(i,1)
    }
}
let string = arr.join('')
console.log(string);
