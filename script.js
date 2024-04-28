
 function myFunction(arr1,arr2) {
 
   if(arr1.length!==arr2.length){
    console.log("massiv olculeri beraber deyil")
   } 
   let newArr=[]
    for(let i=0; i<arr1.length;i++){
     newArr.push(arr1[i] * arr2[i]);
    }
    return newArr
  }
  console.log( myFunction([6,2,3,4,5],[6,7,8,4,5]) )
  