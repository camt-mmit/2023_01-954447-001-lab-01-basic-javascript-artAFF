import { createInterface } from "node:readline";
const rl = createInterface(process.stdin, process.stdout);

rl.question('Input score: ' , (score) => {
    const socre = parseFloat(score);

    const grade = 
        (score >=80)? 'A' :
        (score >=70)? 'B' :
        (score >=60)? 'C' :
        (score >=50)? 'D' :
        'F' ; 
    console.info(`Your grade is ${grade}.`);
    
    rl.close();
}); 

// node lab1/ex1.js 

/*

import { createInterface } from "node:readline";
const rl = createInterface(process.stdin, process.stdout);

    rl.question('Input score: ' , (score) => {
        console.log(`Your grade is  ${grade}.`);
            if(score >= 80) {
                grade = 'A'
                    if (score >= 70) {
                        grade = 'B'
                    }
                    else if (score >= 60) {
                        grade = 'C'
                    }
                    else if (score >= 50) {
                        grade = 'D'
                    }
                    else if (score < 50) {
                        grade = 'F'
                    }
            }
    rl.close();
    })
 () ? */ 