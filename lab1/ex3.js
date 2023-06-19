const n = parseInt(process.argv[2]);

for(let j = 0; j < n; j++) {
    let line = ' ';
    for(let i = 0; i < n ; i++) {
            line += 
            ( i + j >= n - 1
                )? '*' : ' '; 
    }
    console.info(line);
}