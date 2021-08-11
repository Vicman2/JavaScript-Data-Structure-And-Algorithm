

function BubbleSort(arr){
    for(let i = 0; i< arr.length; i++){
        for (let j = 0; j < arr.length-1; j++) {
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

function mergeSortedArray(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while( i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    while( i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while( j < arr2.length){
        result.push(arr2[j])
        j++
    }
    
    return result
}

console.log(mergeSortedArray([100, 200], [10, 15, 20, 25]))