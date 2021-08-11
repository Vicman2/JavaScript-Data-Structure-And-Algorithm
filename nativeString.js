

function searchString(longString, shortString){
    let count = 0; 
    let firstLetter = shortString[0]
    for(let i=0; i< longString.length; i++){
        if(firstLetter === longString[i]){
            let allComplete = true;
            for(let j = 1; j < shortString.length; j++){
                if(shortString[j] !== longString[i+ j]){
                    allComplete = false
                    break;
                }
            }
            count = allComplete? count + 1 : count
        }
    }
    return count
}

console.log(searchString("wowomgzomg", "omg"))

