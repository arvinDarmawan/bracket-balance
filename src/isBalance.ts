import {Stack} from './stack'

export function isBalance(data: string) : boolean {

    const arrChars = data.split('');
    const stack = new Stack<string>();

    for(var i =0; i < arrChars.length; i++){
        const char = arrChars[i];

        if(char === '('){
            stack.push(char);
        } else {

            if(stack.isEmpty()){
                return false;
            } else {
                const popChar = stack.pop();
                if(popChar === ')' && char !== '(') return false;
            }
        }
    }


    if(stack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}