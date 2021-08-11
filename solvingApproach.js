

function same(arr1, arr2){
    let istrue = true

    const refactordArray = []

    for(let num of arr1){
        let theIndex;
        const theNuber = refactordArray
        .find((numObject, index) =>{
            theIndex = index
            return  numObject.num === num
        })
        if(!theNuber){
            refactordArray.push({
                num:num, 
                count: 1
            })
        }else{
            refactordArray[theIndex].count++
        }
    }

    refactordArray.forEach(eachNum => {
        const theNum = arr2.filter(num => num  == eachNum.num * eachNum.num)
        if(theNum.length !== eachNum.count){
            istrue = false
        }
    })
    return istrue
}


console.log(same([1,2,3], [4,1,9]))
