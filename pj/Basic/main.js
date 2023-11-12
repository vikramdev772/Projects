function pattern(n){
    for(var i=1;i<=n;i++){
      var print = "";
      for(var j=0;j<i;j++){
        print = print+"*";
      }
      console.log(print);
    }
  }
  
  pattern(8);
console.log("\n\t Star line \n")

  function starline(n){
    var answer=" ";
    for(var i=0;i<n;i++){
        answer=answer+" * * ";
    }
    console.log("\t"+answer);
  }
  
  starline(5);

  console.log("\n\t Stary pattern");
  function starypattern(n){
    for(var i=0;i<n;i++){
        starline(i);
    }
  }
  starypattern(10);

  function sumAll(starIndex , endIndex){
    var sum=0;
    for(var i=0;i<=endIndex;i++){
        sum+=i;
    }
    return sum;
  }
  
  function multiplyAll(starIndex , endIndex){
    return starIndex*endIndex;
  }
  function divide(index1,index2){
    return index1/index2;
  }

  function doArithematic(firstEl , secondEl,whatToDo){
    if(whatToDo === "sum"){
        var answer = sumAll(firstEl,secondEl);
        return answer;
    }
    if(whatToDo === "multiply"){
        var answer = multiplyAll (firstEl,secondEl);
        return answer;
    }

  }
  var ans = doArithematic(1,2,"sum");
  console.log("\n\t answer : "+ans);
