function checkSpam (str) {
    
    let lowCaseStr=str.toLowerCase();
    if (lowCaseStr.indexOf(`viagra`) !=-1 || lowCaseStr.indexOf(`xxx`) !=-1){
    console.log (lowCaseStr);
    alert (`true`);
    return true;

    }
   
    else {
        console.log (lowCaseStr);
    alert (`False`);
    return false;
}
}



checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

/*function ucFirst (str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}


alert (ucFirst (`;№;№!`));*/


/*function readNumber () {

    do {
        this.number = +prompt ("Введите число:", 0);
    }
    while (!isFinite(this.number));

    if (this.number === 0 || this.number === null) return null;

    return this.number;

}

alert (`Число- ${readNumber()} $`);*/