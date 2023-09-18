let numbers = [0,1,2,3,4,5,6,7,8,9];

permutate(numbers);

function permutate(arr){

    let count = 0;
    let num = "";

    for(let a1 = 0; a1<arr.length; a1++){
        for(let a2 = 0; a2<arr.length; a2++){
            if(a1 != a2){
                for(let a3 = 0; a3<arr.length; a3++){
                    if(a3 != a2 & a3!= a1){
                        for(let a4 = 0; a4<arr.length; a4++){
                            if(a4!=a3&a4!=a2&a4!=a1){
                                for(let a5 = 0; a5<arr.length; a5++){
                                    if(a5!=a4&a5!=a3&a5!=a2&a5!=a1){
                                        for(let a6 = 0; a6<arr.length; a6++){
                                            if(a6!=a5&a6!=a4&a6!=a3&a6!=a2&a6!=a1){
                                                for(let a7 = 0; a7<arr.length; a7++){
                                                    if(a7!=a6&a7!=a5&a7!=a4&a7!=a3&a7!=a2&a7!=a1){
                                                        for(let a8 = 0; a8<arr.length; a8++){
                                                            if(a8!=a7&a8!=a6&a8!=a5&a8!=a4&a8!=a3&a8!=a2&a8!=a1){
                                                                for(let a9 = 0; a9<arr.length; a9++){
                                                                    if(a9!=a8&a9!=a7&a9!=a6&a9!=a5&a9!=a4&a9!=a3&a9!=a2&a9!=a1){
                                                                        for(let a10 = 0; a10<arr.length; a10++){
                                                                            if(a10!=a9&a10!=a8&a10!=a7&a10!=a6&a10!=a5&a10!=a4&a10!=a3&a10!=a2&a10!=a1){
                                                                                count++;
                                                                                if(count == 1000000){
                                                                                    console.log("Permutation :" + arr[a1] + arr[a2] + arr[a3] + arr[a4] + arr[a5] + arr[a6] + arr[a7] + arr[a8] + arr[a9] + arr[a10]);
                                                                                    return true;
                                                                                }
                                                                            } 
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}