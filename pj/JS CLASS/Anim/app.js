

let a=document.getElementById("v");
a.innerHTML="I am Engineer";

let b=document.getElementById("b");



let heading=true;


function vikram(){
    if(!heading){// (!a)
        document.getElementById("v").innerText="i am solider";
        b.style.backgroundColor="pink";
        b.style.color="red";

    }else{
        a.textContent="i am doctor";
        b.style.backgroundColor="blue";
        b.style.color="red";

    }
    heading=!heading;



}


function sum(a,b){
    return a+b;   
}

let result=sum(5,6);
console.log("sum of two num :"+result)

