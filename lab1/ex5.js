const n = parseInt(process.argv[2]);

for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n - i - 1; j++) {
        line += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        if (j === 0 || j === 2 * i) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.info(line);
}

for (let i = n - 2; i >= 0; i--) {
    let line = '';
    for (let j = 0; j < n - i - 1; j++) {
        line += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        if (j === 0 || j === 2 * i) {
            line += '*';
        } else {
            line += ' ';
        }
    }
    console.info(line);
}

// node lab1/ex5.js 4
