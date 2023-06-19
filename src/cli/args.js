process.argv.push('--propName', 'value');
process.argv.push('--propName2', 'value2');

const parseArgs = () => {
    const args = process.argv.slice(2);

    const parsedArgs = [];

    for (let i = 0; i < args.length; i += 2) {
        parsedArgs.push(`${args[i].slice(2)} is ${args[i + 1]}`);
    }

    console.log(parsedArgs.join(', '));
};

parseArgs();