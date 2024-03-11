function same(arr1, arr2){ //timeComplexity will be O(n^2) and space will be O(n)
    let l1 = arr1.length
    let l2 = arr2.length
    if(l1!==l2) return false
    for(let i =0; i<l1; i++){
        let sq = Math.pow(arr1[i],2)
        if(arr2.includes(sq)){
            let index = arr2.indexOf(sq)
            if(index >=-1){
                arr2.splice(index,1)
            }
        }
        else{
            return false
        }
    }
    if(arr2.length===0){
        return true
    }else{
        return false
    }
    
}
let a = [1,2,2]
let b =[4,1,4]
console.log(same(a,b))

// optimize and refectored solution
function isSame(arr1, arr2){//timeComplexity will be O(n) and space will be O(n)
    if(arr1.length !== arr2.length) return false
    let freq1 = {}
    let freq2 = {}
    for(let i of arr1){
        freq1[i]  = (freq1[i]||0) + 1
    }
    for(let i of arr2){
        freq2[i]  = (freq2[i]||0) + 1
    }
    for(let key in freq1){
        if(!(key**2 in freq2)) return false
        if(freq2[key**2]!=freq1[key]) return false
    }
    return true
}
let arr1 = [2,2,1,1]
let arr2 = [4,1,4,1]
console.log(isSame(arr1, arr2))
