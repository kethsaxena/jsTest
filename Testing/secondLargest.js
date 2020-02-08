function getSecondLargest(nums) {
    // Complete the function    
    let num2 =function uniq(a) {
        var seen = {};
        return a.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }
    const uniqueNums = num2(nums);
    
    uniqueNums.sort((a, b)=>{return a - b}).pop()
    const val=uniqueNums.pop() 
    return val


}

console.log(getSecondLargest([6,4,5,1,3]))
//  console.log(getSecondLargest([3,4,5,1,3]))
