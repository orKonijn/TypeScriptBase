




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
const avg = getAverage([0,100,2]);
console.log(avg);
const getpositive = getAmountOfPositive([1,3,-4,3,2,-5]);
console.log(getpositive);