// let arr = [2,7,5,4,1];
let arr = [1];

function findSecSmallest(arr){
    if(arr.length < 2) return 'Second smallest not possible';

    let smallest = Infinity;
    let secSmallest = Infinity;

    for(let i =  0 ; i< arr.length ; i++){
        if(arr[i]< smallest){
            secSmallest = smallest;
            smallest = arr[i];
        }
        else if(arr[i] > smallest && arr[i] < secSmallest){
            secSmallest = arr[i]
        }
    }
    return secSmallest === Infinity 
        ? 'Second smallest not found'
        : secSmallest;
}
console.log(findSecSmallest(arr));
