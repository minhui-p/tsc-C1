// 문자열(string)

const a: string = "";
const b: string = "";
const c: string = ``; //템플릿 리터럴

let myName: string = "Minhui";
let message: string = `Hello ${myName}`;

// 숫자 타입 (number)

let n: number = 100;

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

// 불리언 타입 (boolean)

let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log("hello we are open");
}
if (!isCompleted) {
  console.log("we are not completed");
}

// && || !

let isAvailable: boolean = isOpen && isCompleted;

//null 타입

let user: string | null = null;

function login(username: string) {
  user = username;
}
function logout() {
  user = null;
}

login("Joey");
logout();

//any 타입 (임시적으로만 사용.)

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
