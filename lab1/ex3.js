const n = parseInt(process.argv[2]);

for(let j = 0; j < n; j++) {
    let line = '';
    for(let i = 0; i < n; i++) {
        line += (i >= n - j - 1) ? '*' : ' ';
    }
    console.info(line);
}

// node lab1/ex3.js