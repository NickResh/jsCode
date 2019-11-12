function readNumber () {
    this.number = +prompt ("Введите число", 0);
    if (typeof (this.number) === typeof number && this.number !=0){
        alert (this.number);
        console.log (this.number);
    }
    else {
        readNumber ();
    }
}
readNumber ();