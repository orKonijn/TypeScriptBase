




const getAverage=(numbers: number[]) :number => {
    let sum =0;
    numbers.forEach(element => {
        sum  += Number(element);
    });
    return sum/numbers.length;
}

const avg = getAverage([0,100,2]);
console.log(avg);