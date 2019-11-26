/*var basePrice = 1500;
var getPrice = function (time, urgency){
  var price = basePrice;
  if (urgency === true){
    var halfTime = time/2;
    var urPrice = price *2.5;
    price = halfTime * urPrice;
    if (halfTime >= 150){
      price = (urPrice - 250) * halfTime;
      }
     
  }
  else if ((urgency === false) && (time>150)){
    price = time * (price-250);
  }
  else {
    price = time * price
  };
  
  return price;
  
};

console.log(getPrice(320, true));

*/
/* Техническое задание

Мяу! Напиши программу для расчёта стоимости проекта.

Назови функцию getPrice. У неё должно быть два параметра:

- время (в часах), которое нужно потратить на проект;
- булево значение, которое указывает на срочность проекта — true для срочного заказа и false для обычного.

Названия параметров могу быть любыми.

Для каждого проекта есть фиксированная ставка — 1500 рублей в час. Расчёт стоимости проектов выглядит так: время * ставка в час.

Есть несколько нюансов. Если проект срочный, то часы уменьшаются в два раза, а ставка за час повышается в 2.5 раз.

А если время проекта больше 150 часов, ставка в час уменьшается на 250 рублей.

В первую очередь проверяй срочность. Функция должна возвращать стоимость проекта.

*/



/*var numbers = [1, 4, 5, 9, 2, 5, 1];
var uniqueNumbers = [];

for (var i=0; i<numbers.length; i++){
   if (numbers.indexOf([i],i+1) =-1){
      uniqueNumbers.push(numbers[i]);
   }
console.log(uniqueNumbers);
}
*/

/*var indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
var levels = [8, 15, 9, 12, 11];
var trainingTime = 30;
var indexElem;

if (trainingTime<=30){
  indexElem = indicators.indexOf('скорость');
  levels.splice(indexElem, 1, levels[indexElem]+3);
  indexElem = indicators.indexOf('ловкость');
  levels.splice(indexElem, 1, levels[indexElem]+3);
  }
  else if (trainingTime>30 && trainingTime<=60){
    indexElem = indicators.indexOf('гибкость');
    levels.splice(indexElem, 1, levels[indexElem]+3);
    }
    else if(trainingTime>60){
      indexElem = indicators.indexOf('сила');
      levels.splice(indexElem, 1, levels[indexElem]+2);
      indexElem = indicators.indexOf('выносливость');
      levels.splice(indexElem, 1, levels[indexElem]+2);
      }
  console.log (levels);
*/

/* Техническое задание

Напиши программу, которая будет следить за моими спортивными показателями.

В переменную indicators записан массив с моими спортивными характеристиками.

В массив levels записаны уровни каждого показателя. Каждый элемент этого массива соответствует по индексу элементу массива indicators.

В зависимости от времени тренировки, прокачиваются разные показатели. Время тренировки указано в минутах и записано в переменную trainingTime.

Если тренировка длится до 30 минут включительно, увеличивай скорость и ловкость на 3.

Если тренировка от 30 минут (не включая это значение) до одного часа (включая это значение), увеличивай гибкость на 3.

Если тренировка длится больше одного часа (не включая это значение), увеличивай силу и выносливость на 2.

*/

/*// Алфавит
var symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Смещение
var shift = 10;

// Закодированное сообщение
var encodedMessage = [62,28,31,56,42,40,43,27,23,56,37,28,56,25,51,39,40,38,41,32,48,52,56,40,51,24,34,43,56,43,56,45,38,31,55,32,37,23,57];

// Раскодированное сообщение
var decodedMessage = '';


for (var i=0; i<encodedMessage.length; i++){
   if (encodedMessage[i]+10>symbols.length){
   var a = encodedMessage[i]+10 - symbols.length;
   }
   else   
  a = encodedMessage[i]+10;
  decodedMessage += symbols[a];
  }
  console.log (decodedMessage);*/