export default function getWinner(arr: number[], k: number): number {
    let winner = arr[0]>arr[1]?arr[0]:arr[1];
    let wins = 0
    for(let i=1; i<arr.length; i++){
        if(winner>arr[i]) wins++
        else {winner=arr[i]; wins = 1}

        if(wins === k || wins === arr.length-1) break
    }
    return winner
}

let arr = [1,11,22,33,44,55,66,77,88,99]
let k = 2

console.log(getWinner(arr, k))