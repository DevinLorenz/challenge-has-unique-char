// Write your code below

function hasUniqueChars(string) {
    string.split('')
    let count = 0
    for(i = 0 ; i < string.length ; i++){
        for(j = 0;j < string.length ; j++){
            if(string[i] === string[j]){
                count += 1
            }
        }
        if(count > 1){
            console.log(false)
            return;
        } else {
            count = 0
        }
    }
    console.log(true)
} 
hasUniqueChars('David')
hasUniqueChars('DAVID')
hasUniqueChars('david')
hasUniqueChars('daviD')