let a ='asdasd123433%%'
let sum=0
for(let el of a){ //wrong one
    if(Number(el)!=isNaN){
     let n = parseInt(el)
     sum += n
    }
}
console.log(sum)
for(let el of a){ //correct one
    if(!isNaN(Number(el))){
     let n = Number(el)
     sum += n
    }
}
console.log(sum)