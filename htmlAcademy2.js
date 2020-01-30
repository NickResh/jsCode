/*
Деление на остаток
function getDayOfWeek(dayWeek, data){
  var week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
  //var indexDay = ;
  var FDay = week[((week.indexOf(dayWeek)+ data)-1)%7];
  return FDay
}

console.log(getDayOfWeek("вторник", 15))
*/ 

/*
EVAL сумма и поиск в массиве

function getYears (startYear, finishYear, sumNumber){
  var lengthYear = finishYear-startYear;
  var mass = [];
  var mass2 = [];
  
  for (var i=0; i<=lengthYear; i++){
    mass.push(startYear+i);
}
  for (var j=0; j<mass.length; j++){
   var a = eval(mass[j].toString().split('').join('+'));
     if (a == sumNumber){
       mass2.push(mass[j]);
    }
}   
  
    return mass2;
}

console.log(getYears(2005, 2050, 9));
*/ 