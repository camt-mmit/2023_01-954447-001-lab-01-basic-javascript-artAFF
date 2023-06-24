const n = parseInt(process.argv[2]);

for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.info(line);
}

// node lab1/ex4.js 3