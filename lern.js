function sumInput() {
    let a = [];
    let value;
    do{
        value = prompt (`Введите число:`, 0);
        a.push (+value);
        console.log(a);
    }
    while (isFinite(value) && value !== null && value !== `` && value !== NaN);
        a.pop();

        console.log(a);
    
        let sum = 0;
   for (let i=0; i<a.length; i++){
       sum += a[i];
   }
   return sum;
}

alert (sumInput());

//sumInput();

/*let styles = [`Джаз`, `Блюз`];

styles.push (`Рок-н-ролл`);
console.log (styles);
styles[Math.floor((styles.length-1)/2)] = `Классика`;
alert (styles.shift(0));
styles.unshift (`Рэп`, `Рэгги`);    
console.log (styles);*/