
function getLetter(s) {
    let letter;
    let fLetter=s.charAt(0);
    // Write your code here
    const cases = {0:'aeiou',
                1:'bcdfg',
                2:'hjklm',
                3:'npqrstuvwxyz'


    }

    // console.log(fLetter)

    // Object.keys(obj).find(val=>obj.val==item)

    const caseEval = (obj,letter)=>{
    
    let valArr = Object.values(obj)

    for(item of valArr){
       if(item.includes(letter))
       {val = Object.keys(obj).find(val=>obj[val]==item) 
       } else continue;
    } 
    
    return parseInt(val)};

    const caseIndex=caseEval(cases,fLetter)

    console.log(caseIndex);



    //SWITCH
    switch (caseIndex){
        case 0:letter="A";break;
        case 1:letter="B";break;
        case 2:letter="C";break;
        case 3:letter="D";break;
        default:letter="not found"
    }


    return letter;
}


console.log(getLetter("aaahshs"));