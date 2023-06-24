const n = parseInt(process.argv[2]);

for(let i = 0; i < n; i++) {
    let line = '';
    for(let j = 0; j < n; j++) {
        line += (j >= n - i - 1) ? '*' : ' ';
    }
    console.info(line);
}

/* () node lab1/ex2.js */
