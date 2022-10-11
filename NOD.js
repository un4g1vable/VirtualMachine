let fs = require('fs');
let arg = process.argv;
let mem = new Array();

let text = fs.readFileSync('NOD.jss');
text = text.toString();

mem = text.split(/\r\n| /);


for (let i = 0; i < mem.length; i++)
	console.log(i, mem[i]);
ip = 0;
flag = true;
while (flag)
	switch (mem[ip]) {
		case 'set':
			mem[mem[ip + 1]] = parseFloat(mem[ip + 2]);
			ip += 3;
			break;

		case 'output':
			console.log(mem[mem[ip + 1]]);
			ip += 2;
			break;

		case 'substruct':
			mem[mem[ip + 3]] = mem[mem[ip + 1]] - mem[mem[ip + 2]];
			ip += 4;
			break;

		case 'morenumber':
			if (mem[mem[ip + 1]] > mem[mem[ip + 2]])
				mem[mem[ip + 3]] = mem[mem[ip + 1]];
			else
				mem[mem[ip + 3]] = mem[mem[ip + 2]];
			ip += 4;
			break;

		case 'lessnumber':
			if (mem[mem[ip + 1]] < mem[mem[ip + 2]])
				mem[mem[ip + 3]] = mem[mem[ip + 1]];
			else
				mem[mem[ip + 3]] = mem[mem[ip + 2]];
			ip += 4;
			break;

		case 'jumpifzero':
			if (mem[mem[ip + 1]] == 0)
				ip = parseInt(mem[ip + 2])
			else
				ip += 3;
			break;

		case 'jump':
			ip = parseInt(mem[ip + 1])
			break;

		case 'compare':
			if (mem[mem[ip + 1]] != mem[mem[ip + 2]])
				mem[mem[ip + 3]] = 0;
			else
				mem[mem[ip + 3]] = 1;
			ip += 4;
			break;

		case 'exit':
			flag = false;
	}
for (let i = 0; i < mem.length; i++)
	console.log(i, mem[i]);