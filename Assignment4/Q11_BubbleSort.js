function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}

let arr=[1,10,22,11,3323,3324,34343,13143,4343,22,0,9,9]
bubbleSort(arr)
console.log(bubbleSort(arr))

