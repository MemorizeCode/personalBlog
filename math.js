// let n = 10
// let hislitel = 2 * n + 1
// let nvkv = Math.pow(n,2)
// function setfac(n){
//     return n ? n * setfac(n-1) : 1
// }
// let znamenatel = setfac(nvkv)
// let result = hislitel / znamenatel
// console.log(result)
// console.log(typeof nvkv)

let resultAll = 0


for(let n = 1;n<=10;n++){
    let hislitel = 2 * n + 1
    let nvkv = Math.pow(n,2)
    function setfac(nvkv){
        return nvkv ? nvkv * setfac(nvkv-1) : 1
    }
    let znamenatel = setfac(nvkv)
    let result = hislitel / znamenatel
    resultAll+=result
}
console.log(resultAll)