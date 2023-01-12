console.log("here2");
import * as fs from 'fs';
console.log("here3");
fs.readFile('currencies.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const currencies: {[key: string]: number} = {};
    const lines = data.split('\n');

    for (const line of lines) {
        const currency = line.split(':');
        currencies[currency[0].trim()] = Number(currency[1]);
    }
    console.log(currencies);
});



const getAverage=(numbers: number[]) :number => {
    let sum =0;
    numbers.forEach(element => {
        sum  += Number(element);
    });
    return sum/numbers.length;
}



const getAmountOfPositive = (numbers: number[]) :   number =>{
    let sum =0;
    numbers.forEach(element => {
        if(element>0){
            sum++;
        }
    });
    return sum;
}



const sortList=(numbers: number[]) : number[] =>{
    return numbers.sort();
}






const GetFromUser=():string=>{
    const Currency : string | null = prompt("Enter your Currency");
    if(typeof Currency == "string"){
        return Currency;
    }
    else{
        throw "null";
    }
   
}

const GetFromUserAmount=():number=>{
    const num : string | null = prompt("sss");
    let  amount :number;
    if(typeof num == "string"){
        amount=+num;
        return amount;
    }
    else{
        throw "null";
    }
    
}





const GetCurr = ():string=>{
    const form : HTMLFormElement | null = document.querySelector('#myform');
    if (form != null) {
    form.onsubmit = () => {
      const formData = new FormData(form);
    
      const text = formData.get('textInput') as string;
      alert(text);
      console.log(text);
      return text;
    };
    }
    throw "null";
}



const GetValue =():void=>{

}


const GetAmount =():void=>{

}


const LoopCurrencies =():void=>{
    let inputs: string | null  ="";
    let num : number= +inputs;
    let Currency : string | null = "";
    while(num!=-1 && inputs!=null){
        inputs =prompt("enter currency");
        if(inputs!= null){
            num = +inputs;
        }
        Currency = prompt("Enter your Currency");
        
    }

    
}

const CheckOptions= (currency:string , amounts:number ,txts:string):void =>{
    switch(txts){
        case "get value":
            const x=GetValue();
            break;
        case  "get amount":
            const y = GetAmount();
            break;
        case "loop currencies":
            const z=LoopCurrencies();
            break;
    }
}



  export function Startf():any{
    console.log("here1");
    const x =fs.writeFileSync('C:\Users\OR\Documents\TypeScriptBasic\TypeScriptBase\src\Currencies.txt','utf8');
    console.log(x);
    const curr = GetFromUser();
    const amount = GetFromUserAmount();
    const txt =GetCurr();
    const checkOption = CheckOptions(curr,amount,txt);
    console.log(txt);
    
}



Startf();

//const avg = getAverage([0,100,2]);
//console.log(avg);
//const getpositive = getAmountOfPositive([1,3,-4,3,2,-5]);
//console.log(getpositive);
