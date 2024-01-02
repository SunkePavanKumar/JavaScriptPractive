const getMinMax = function(arr,n){
    //code here
    let minElement = Number.MAX_VALUE;
    let  maxElement = Number.MIN_VALUE;
    for(let i =0;i<n;i++){
        if(arr[i] < minElement){
            minElement = arr[i]
        }else if(arr[i] > maxElement){
            maxElement = arr[i]
        }
    }
    return [minElement, maxElement]
}
console.log(getMinMax([10,5,3,9,8,3], 6))