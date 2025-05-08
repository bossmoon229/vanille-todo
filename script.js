let str1 = "ABCABCABCABCABCABCABC",
  str2 = "ABC";

let res = "";

while(ok){

  if(str1.includes(str2)){
     res= str1.slice(0,str2.length)
  }
  else if(str2.includes(str1)){

     res= str2.slice(0,str1.length)
     
  }
  else{
      ok=false;
  }
  }

// if(str1.includes(str2)){

//   console.log(str1.slice(0,str2.length));
// }
// else{
//   console.log('fuck');
// }