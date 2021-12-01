/*
    you are given an array of integers where each int represents
    heights in a bar chart. Return the two bars that will return
    the greatest area
    [1,8,6,2,9,4]
    area = LxW
    L = smallest element of two chosen elements, subtract indices of vals
    W = index distance from i to i2

    test cases
    [] => 0;
    [1] => 0;
*/
function containerWater(bars){ 
    let area = 0;
    let i = 0;
    let j = i + 1;
    for(i; i < bars.length; i++){
        for(j; j < bars.length; j++){
            let length = Math.min(bars[i], bars[j])
            let width = j - i;
            temp = length*width;
            if(temp > area){
                area = temp;
            } 
        }
    }
    return area
}
console.log(containerWater([7,1,2,3,12])); 