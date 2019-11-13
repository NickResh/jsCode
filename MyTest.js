function extractCurrencyValue(str){
    let valueFromString = +str.slice(1);
    return valueFromString;
}
alert (extractCurrencyValue('$12032'));

/*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, 
заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
function truncate (str, maxlength){
    let stringLenght = str.length;
    if (stringLenght>=maxlength){
        let a = str.substr (0, maxlength);
        let b = a.slice(0, maxlength-1) + "...";
        return alert (b);
    }
    else return alert(str);
}
//truncate();
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);*/