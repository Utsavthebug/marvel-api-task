import { MD5 } from "crypto-js"

export const generateHash = (timestamp:string)=>{
    const public_key = process.env.REACT_APP_PUBLIC_KEY
    const private_key = process.env.REACT_APP_PRIVATE_KEY

    const hash = MD5(timestamp+private_key+public_key).toString()
    return hash
}


  export const hashStringHelper = ()=>{
    const ts = Date.now().toString()
    const hash = generateHash(ts)
    const hashkeystring = `ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
    return hashkeystring
}

//function to transform data to dropdown
export const formatFunction = (data:any)=>{
    const formattedData =  data?.map((d:any)=> (
      {
        value:d?.id,
        label:d?.title
      }
    ))
    return formattedData;
  }


//debounce function 
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return (...args: Parameters<F>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
};


