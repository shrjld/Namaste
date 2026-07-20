//namaste EP1,Ep2
////////////////////////////////////////
//ex1
let num = 3;

function myFun(myvalue) {
    let sum = myvalue + 2;
    return sum

}
let result = myFun(num);
console.log(result);
//////////////////////////////////////////

//ex2

let a = 10;
function Func(number) {
    let minus = number - 10;
    return minus
}
let answer1 = Func(a);
console.log(answer1);

let answer2 = Func(20);
console.log(answer2);
////////////////////////////////////////////
//EP3



var x = 2;

function myName() {
    console.log("Sahar Jalilvand");
}
myName();
console.log(x);

///////////////////////////////////////////////

typey();
console.log(y);

var y = true;

function typey() {
    console.log(typeof y);
}
////////////////////////////////////////////////
//arrow function

var language1 = () => {
    console.log("java script")
}
language1();

console.log(typeof typey);
console.log(typeof language1);

/////////////////////////////////////////////////
// language2();

var language2 = () => {
    console.log("python");
}

///////////////////////////////////////////////////
// another way to write function:

//language3();

var language3 = function () {
    console.log("c")

}
//////////////////////////////////////////////////
//EP4

var z = 2;

func1();
func2();

console.log(z);

function func1() {
    var z = 4;
    console.log(z);
}

function func2() {
    var z = 6;
    console.log(z);
}
///////////////////////////////////////////////////////
function name1() {
    var firstName = "sahar";
    console.log(firstName);
}
name2();
name1();

var firstName = "zahra";

function name2() {
    var firstName = "hana";
    console.log(firstName);
}


console.log(firstName);

//////////////////////////////////////////////////////
//EP5
let myLastName = "jalilvand";
let myFirstName = "Sahar";
console.log(myLastName);
console.log(myFirstName);

var age = () => {
    number = 50;
    console.log(number);

};
age()

//////////////////////////////////////////////////////

//EP 6
console.log(age1);
var age1 = 100;
console.log(age1);
// console.log(age2);

var age3;
console.log(age3);


//////////////////////////////////////////////////////

//EP 7


function funcA() {
    // funcA();
    var test="D access every thing"
    var testA = "C";

    function funcB() {
        console.log(testA);
        var testB = "JAVA SCRIPT";

        function funcC() {
            console.log(testB);
            var testC = "PYTHON";

            function funcD() {
                console.log(testC);
                console.log(test)

            } funcD();

        } funcC();

    } funcB();

}

var testScope = 90;
funcA();
/////////////////////////////////

function testNamasteEx1() {
    var namasteVar = 10;
    var namasteVar2 = 20;

    console.log(namasteVar2);

    testNamasteEx2()
    function testNamasteEx2() {
        console.log(namasteVar);

    }

}
// console.log(namasteVar);
// testNamasteEx2();
testNamasteEx1();

/////////////////////////////////////////////////////////

//EP8
console.log(testvar);
var testvar = 10 ;

// console.log(testlet);
let testlet = 11;

// console.log(testconst);
const testconst = 12;
///////////////////////
//var, let

let b = 8;
// let b =9;
console.log(b);

var c = 8;
var c =9;
console.log(c);
//////////////////////////

let t ;
var u;
// const i;

