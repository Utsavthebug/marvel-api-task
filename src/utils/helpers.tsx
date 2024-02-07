import { MD5 } from "crypto-js"

export const generateHash = (timestamp:string)=>{
    const public_key = process.env.REACT_APP_PUBLIC_KEY
    const private_key = process.env.REACT_APP_PRIVATE_KEY

    const hash = MD5(timestamp+private_key+public_key).toString()
    return hash
}

export const range = (start:number, end:number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

