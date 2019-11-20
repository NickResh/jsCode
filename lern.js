// Алфавит
var symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Смещение
var shift = 10;

// Закодированное сообщение
var encodedMessage = [62,28,31,56,42,40,43,27,23,56,37,28,56,25,51,39,40,38,41,32,48,52,56,40,51,24,34,43,56,43,56,45,38,31,55,32,37,23,57];

// Раскодированное сообщение
var decodedMessage = '';
var massive;
var a;
for (var i=0; i<encodedMessage.length; i++){
   if (encodedMessage[i]+10>symbols.length){
    a = encodedMessage[i]+10 - symbols.length;
   }
   else   
  a = encodedMessage[i]+10;
  decodedMessage += symbols[a];
  }
  console.log (decodedMessage);

/*function sumInput() {
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

alert (sumInput());*/

//sumInput();

/*let styles = [`Джаз`, `Блюз`];

styles.push (`Рок-н-ролл`);
console.log (styles);
styles[Math.floor((styles.length-1)/2)] = `Классика`;
alert (styles.shift(0));
styles.unshift (`Рэп`, `Рэгги`);    
console.log (styles);*/