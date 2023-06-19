import { createInterface } from "node:readline";
const rl = createInterface(process.stdin, process.stdout);

rl.question('Input name: ' , (name) => {

    console.log(`Hello ${name}.`);

    rl.close();
})



/* () console.log('finish!!!');  // node src/hello-me-readline.js --> result Input name: Art
Hello Art.*/