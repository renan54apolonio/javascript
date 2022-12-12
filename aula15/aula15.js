let num = [5, 7, 9, 2]

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro vetor é ${num[0]}`)
console.log(`o segundo vetor é ${num[1]}`)
console.log(`o terceiro vetor é ${num[2]}`)
console.log(`o quarto vetor é ${num[3]}`)
num.sort()
console.log('em ordem cescente')
console.log(num)
num.push(1)
console.log(num)
let achar = num.indexOf(7)
console.log(`o valor 7 está na posção ${achar}`)

let valores = [2, 3, 4, 7, 8, 9, 1, 11, 22, 44]
for(let pos = 0; pos < valores.length; pos ++) {
    console.log(`a posição ${pos + 1} tem o valor ${valores[pos]}`)
}

let valores2 = [21, 34, 24, 7, 8, 97, 1, 11, 22, 44]
for(let pos in valores2) {
    console.log(`a posição ${pos} tem o valor ${valores2[pos]}`)
}