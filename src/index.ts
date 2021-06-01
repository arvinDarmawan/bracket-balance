import {createInterface} from "readline";
import {isBalance} from "./isBalance";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input data : ', data => {

    if(data.trim().length === 1 || data.trim().length > 100000){
        console.error('Data must be more than 1 and less or equal with 100,000')
    } else {
        console.log(isBalance(data))
    }

    readline.close();
});