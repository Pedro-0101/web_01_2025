let dobrarArr = function(arr: number[]):number[]{

    for(let i: number = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }

    return arr;

}

let dobrarArr1 = (arr: number[]) => {
    
    for(let i: number = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }

    return arr;
};

console.log(dobrarArr([10, 20, 40, 50]))
console.log(dobrarArr1([10, 20, 40, 50]))