const n = parseInt(process.argv[2]);

for(let j = 0; j <= n; j++) {
    let line = ' ';
    for(let i = 0; i <= n; i++) {
            line += 
            ( i - j <= 0
                )? '*' : ' '; 
    }
    console.info(line);
}

/* () node src/mul-tab.js (number) */
