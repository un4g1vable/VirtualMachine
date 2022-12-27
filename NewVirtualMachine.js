let fs = require('fs');
let arg = process.argv;
let mem = new Array();
let text = fs.readFileSync(arg[2]);
text = text.toString(); //строковое представление объекта
mem = text.split(/\r\n| /); //разделение по пробелу
ip = 0;
flag = true;
while (flag)
    switch (mem[ip]) {
        case 'setfromarg':
            mem[mem[ip + 1]] = parseFloat(arg[parseInt(mem[ip + 2])])
            ip += 3;
            break;

        case 'setzeroflag':
            mem[mem[ip + 1]] = parseFloat(mem[ip + 2]);
            ip += 3;
            break;

        case 'outputmore':
            if (mem[mem[ip + 1]] === 1)
                console.log(mem[mem[ip + 2]]);
            ip += 3;
            break;

        case 'outputless':
            if (mem[mem[ip + 1]] === 0)
                console.log(mem[mem[ip + 2]]);
            ip += 3;
            break;

        case 'substructmore':
            if (mem[mem[ip + 1]] === 1)
                mem[mem[ip + 4]] = mem[mem[ip + 2]] - mem[mem[ip + 3]];
            ip += 5;
            break;

        case 'substructless':
            if (mem[mem[ip + 1]] === 0)
                mem[mem[ip + 4]] = mem[mem[ip + 2]] - mem[mem[ip + 3]];
            ip += 5;
            break;

        case 'morenumber':
            if (mem[mem[ip + 1]] > mem[mem[ip + 2]]) {
                mem[mem[ip + 3]] = 1;}
            ip += 4;
            break;

        case 'jumpifzero':
            if (mem[mem[ip + 1]] === 0){
                ip = parseInt(mem[ip + 2])}
            ip += 3;
            break;

        case 'jump':
            ip = parseInt(mem[ip + 1])
            break;

        case 'сheckiflesszero':
            if (mem[mem[ip + 1]] <= 0){
                ip = parseInt(mem[ip + 2])}
            ip += 3;
            break;

        case 'set':
            mem[mem[ip + 1]] = parseFloat(mem[ip + 2]);
            ip += 3;
            break;

        case 'getcountofaddition':
            mem[mem[ip + 1]] = mem[mem[ip + 1]] - 1;
            ip += 2;
            break;

        case 'output':
            console.log(mem[mem[ip + 1]]);
            ip += 2;
            break;

        case 'addition':
            mem[mem[ip + 3]] = mem[mem[ip + 1]] + mem[mem[ip + 2]];
            ip += 4;
            break;

        case 'rewrite':
            mem[mem[ip + 2]] = mem[mem[ip + 1]];
            ip += 3;
            break;

        case 'jumpifnotzero':
            if (mem[mem[ip + 1]] != 0)
                ip = parseInt(mem[ip + 2])
            else
                ip += 3;
            break;

        case 'checkifsetfromarglesszero':
            if (mem[mem[ip + 1]] < 0){
                ip = parseInt(mem[ip + 2])}
            ip += 3;
            break;

        case 'checkifsetfromarg0':
            if (mem[mem[ip + 1]] === 0){
                ip = parseInt(mem[ip + 2])}
            ip += 3;
            break;

        case 'checkifsetfromarg1':
            if (mem[mem[ip + 1]] === 1){
                ip = parseInt(mem[ip + 2])}
            ip += 3;
            break;

        case 'exitwitherror':
            console.log("Аргументы были переданы неверно")
            flag = false;

        case 'exit':
            flag = false;
    }