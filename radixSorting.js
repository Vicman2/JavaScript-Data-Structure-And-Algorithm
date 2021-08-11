
const getMaxCount = num => {
    if(num === 0) return 1
    return  Math.floor(Math.log10(Math.abs(num))) + 1
}

const getDigit = (integerValue, index )=> {
    return Math.floor(Math.abs(integerValue)/ Math.pow(10, index)) % 10
}

const  mostDigits= arr => {
    let max = 0; 
    const convertedField = arr.map(num => num.toString())
    for(let i = 0; i<convertedField.length; i++){
        max = Math.max(max,convertedField[i].length)
    }

    return max
}


const radixSort = arr => {
    const count  = mostDigits(arr)
    for(let k = 0; k<count; k++){
        let digitBucket = Array.from({length: 10}, () => [])
        for(let i = 0; i < arr.length; i++ ){
            let digit = getDigit(arr[i], k)
            digitBucket[digit].push(arr[i])
        }
        arr = [].concat(...digitBucket)
    }
    return arr
}


console.log(radixSort([500, 2, 40, 5900, 2032, 7200, 233, 100]))