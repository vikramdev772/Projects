
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}
);

function add(a,b){
    return a+b;
}

rl.question('\n\t Enter a num 1 : ',(n1)=>{
    rl.question('\n\t Enter a num 2 :',(n2)=>{
        const result = add(parseInt(n1),parseInt(n2));
        console.log(`\n\t The num1 ${n1}  and num2 ${n2} : ${result} `);
        rl.close;
    })
})


