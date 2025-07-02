// 2. 타입, 값, 함수

// 프로그래밍 언어에서 표현하고 조작할 수 있는 값의 종류를 타입이라 부릅니다.
// 어떤 타입을 지원하는지가 프로그래밍 언어의 가장 기본적인 특징입니다.
// 프로그램에서 값을 나중에 사용하기 위해 유지하려면 변수에 값을 할당(저장)합니다.
// 변수에는 이름이 있으며, 프로그램은 변수 이름을 통해 값을 참조합니다.

// 2.1 숫자
// 자바스크립트의 숫자 타입은 number는 정수와 함께 실수를 대략적으로 표현합니다.

// 2.1.1 정수 리터럴
// 자바스크립트 프로그램에서 10진 정수는 연속된 숫자로 표현합니다.

// let num1 = 0;
// let num2 = 10;
// let num3 = 100;

//뿐만 아니라, 2진수, 8진수, 16진수도 정수 리터럴 방식으로 선언할 수 있습니다.

//16진수 리터럴은 0x나 0X로 시작하며 그 뒤에 16진수 숫자를 씁니다. 16진수 숫자는 0부터 9까지의 숫자 알파벳 a(A)부터 f(F)까지의 문자이며,

//문자는 10부터 15까지 나타냅니다.

// let num4 = Oxff; // 15*16 + 15 => 255

// 0b(0B)를 앞에 붙여 표현하면 2진수, 0o(0O)을 앞에 붙여 표현하면 8진수로 정수를 표현할수있음

// 2.1.2 부동 소수점 리터럴
// 부동 소수점 리터럴에는 소수점이 포함될 수 있습니다. 즉, 실수의 전통적 문법을 사용합니다.
// 값은 정수 부분, 소수점, 소수점 아래 부분을 순서대로 씁니다.

// let pi = 3.14;

let num5 = 123;

console.log(typeof pi); // number
console.log(num5 + undefined);
console.log(typeof (num5 + undefined));

let str1 = " ";
let str2 = "test code";
let str3 = "3.14";
let str4 = `Hello, world!`;

//이러한 문법을 보간법 이라고 함

let test1 = "안녕하세요";
let test2 = `${test1}`; // => 안녕하세요

// 백틱으로 감싼 문자열은 문자열 리터럴 안에 자바스크립트 표현식을 넣을 수 있음

let str5 = `Hello,`;
let str6 = "world~"; //문자열 방식을 리터럴로
let str7 = `${str5} ${str6}`;
console.log(str7);

// 백틱은 일반적인 문자열 리터럴 방식과는 약간의 차이가 있습니다.
// 임의의 자바스크립트 표현식을 넣을 수 있는 템플릿 리터럴이라고도 표현합니다
//  ${} 기호 안에 있는 것은 모두 자바스크립트 표현식으로 해석이 됩니다.
//  단, 중괄호 밖에 있는 것은 모두 일반적인 문자열 리터럴 텍스트 입니다.

////---------------------------------------------////

// 2.3 불리언(boolean)

// 불리언 값은 참 또는 거짓을 표현합니다.
// 이 타입에는 단 두 가지 값만 존재합니다.
// 바로 예약어인 true, false 입니다.
// 불리언은 조건문, 반복문 등에서 논리적 판단을 수행하는데 주로 사용됩니다.
// 앞서 말했듯이 true와 false라는 두 가지 값만 사용하는 논리 데이터이며,
// true는 긍정의 의미를 , false 부정의 의미를 가지고 있다.
const truthy = true;
const falsy = false;

if (truthy) {
  console.log("참 입니다.");
}

//2.4 null과 undefined

// null 값이 없음을 나타낼 때 사용하는 특별한 값.
// null에 typeof 연산자를 사용하면
// 이루 미루어 null은 ‘객체가 없다’는 것을 나타내는 특별한 객체 값이라고 볼 수 있다.
console.log(typeof null);
// null은 해당 타입의 유일한 멤버가로 인식되며, 객체 뿐만 아니라 숫자나 문자열에도 ‘값이 없다’ 는 의미로 사용될 수 있음

//------------------------------------------------------------/
//역사적 이유

//자바스크립트가 처음 설계될 때, 모든 객체의 타입을 확인하기 위한 방식이 있었고,
// 그 과정에서 null이 객체로 분류가 된 것. 이는 의도하지 않는 버그로 여겨지지만,
//  자바스크립트에서는 여전히 이 방식이 유지되고 있다.

//------------------------------------------------------------////
// undefined**

//undefined 역시 값이 없음을 나타내는 값, undefined는 좀 다른 의미에서 값이 없음을 나타냄
//이 값은 초기화되지 않는 변수의 값
//존재하지 않은 객체의 프로퍼티나 배열 요소에 접근했을 때 반환되는 값
//또한, 값을 명시적으로 반환하지 않는 함수의 반환값이며, 전달되지 않은 인자의 값이기도함.
//undefined에 typeof 연산자를 적용하면 문자열 “undefined”를 반환합니다.
//undefined 역시 특별한 타입, 멤버는 그 하나 뿐이란 뜻

//------------------------------------------------------//
//null과 undefined의 차이점**

//undefined의 경우, 시스템 레벨, 예측되지 않았거나 에러 비슷한 상황에서 값이 없는 것이라 간주하고
//null의 경우 프로그램 레벨, 정상적이거나 예측 가능한 상황에서 값이 없는 것이라 간주함

//------------------------------------------------------//

//null : 존재하지 않는다. 값이 비어있다. 값을 알 수 없다. 명시적/의도적 표현
//- 의도적으로 변수를 비우거나, 특정 상황에서 값이 없음을 나타내기 위해 사용됨
let value1 = null;
console.log(value1); // null

//undefined : 변수가 선언되었지만, 값이 할당되지 않았음을 나타냄
// 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을 경우에도 undefined가 반환된다.
let value2;
console.log(value2); //undefined

const user = {
  name: "9Diin",
  age: 30,
  email: null,
};

console.log(user.name); // 9Diin
console.log(user.age); //30
console.log(user.email); //undefined
console.log(user.password); //undefined

//2.6 배열 Array
// 자바스크립트에서 배열은 순서가 있는 데이터의 집합입니다.
// 인덱스를 사용하여 요소에 접근할 수 있습니다.

const fruits = new Array("사과", "바나나", "체리", "멜론", "수박", "딸기"); // 똑같이나옴
console.log(fruits);

//new array() 코드는 생성자 함수를 사용하여 배열을 생성하는 방법
//new array()를 사용할 때, 인자로 숫자 하나를 받으면, 해당 길이의 배열이 생성
// new array(5)는 길이가 5인 빈 배열을 생성

//생성자 함수를 사용하여 배열 데이터를 생성하는 것 말고도, 더 간편하게 대괄호([])를 사용하여 간편하게 만들 수 있다.
// 이를 리터럴 방식으로 배열을 생성한다 라고 함, 배열 리터럴 이라고함

/**
 * 배열 리터럴
 * 배열을 만드는 방식으로 대괄호([])라는 기호를 통해 만들었는데,
 * 이를 리터럴 방식으로 만들었다고 한다
 */

const animals = ["호랑이", "사자", "코끼리", "원숭이", "악어"];
console.log(animals); // 호라잉 사자 코끼리
console.log(animals[1]); // 사자 출력
console.log(animals.length); // 배열 길이 // 5
console.log(animals[animals.length - 1]); // 해당 배열의 가장 마지막 요소 조회
console.log(animals[0]); // 해당 배열의 가장 첫번째 요소
//animals라는 상수 식별자에 리터럴 방식으로 배열 데이터를 주입시킴.
// 해당 배열 안에는 요소의 타입이 문자열(string)인 데이터가 5개 있다.
// 이때, 배열의 번호는 0번부터 시작, 따라서 0번째 배열은 배열의 첫 번째 요소 의미

// 배열의 길이를 측정할 때는 , .length로 접근할 수 있따.

//-----------------------------------//
//2.7 객체 Object
// 자바스크립트에서 객체란, 이름-값(key-value)의 쌍으로 구성된 데이터의 집합입니다.
// 키는 문자열 또는 심벌이고, 값은 어떤 데이터 타입이든 가능하다.
// key는 속성 또는 프로퍼티(Property)라고 하며, value는 값이라고 부르기도 한다

// 데이터 이름은 붙여서 접근할 수 있다

//객체는 중복된 키르 허용하지 않는다
const newUser = new Object(); // {} > 생성자 함수를 통해 객체를 생성한다.
newUser.name = "9Diin";
newUser.age = 30;
newUser.job = "programmer";

console.log(newUser); //{name: "9Diin", age : 30, job : "programmer"}

// newUser = {name: "9Diin", age : 30, job : "programmer"};
// 위 예시도 생성자를 활용한 객체 생성 방법입니다.
// newObject()를 사용하여 빈 객체를 생성한 후, 점 표기법(.)을 통해 속성을 추가하고 있습니다.
// 결과적으로, newUser라는 객체는 이름-값(key-value) 쌍의 형태로 저장됩니다
// 객체 요소의 순서가 없다.

/**객체 리터럴
 * 객체를 만드는 방식으로 중괄호 {} 라는 기호를 통해 만들었습니다.
 * 이것을 리터럴 방식으로 만들었다고 합니다.
 *
 * 객체 데이터에서 key는 고유하며, 순서는 중요하지 않습니다.
 * 단 동일한 키 값일 경우, 나중에 작성된 값으로 덮어 씌워집니다.
 */

const mamber = {
  name: "9Diin",
  age: 40,
  job: "Office Worker",
};
console.log(mamber);
console.log(mamber.name);
console.log(mamber.age);
console.log(mamber.job);
console.log(mamber.email); //undefined
console.log(mamber["name"]); // 9Diin
console.log(mamber["age"]); // 40
console.log(mamber["job"]); // Office worker

const userA = {
  name: "유저 A",
  age: 10,
  gender: "male",
};

const userB = {
  name: "유저 B",
  age: 20,
  brother: userA,
};

console.log(userA.name); //유저A
console.log(userB.brother);
console.log(userB.brother["age"]); //10
console.log(userB["brother"].gender); //male

const family = [userA, userB];
console.log(family);
console.log(family[0].gender); // male
console.log(family[1]["name"]); // 유저 B

// 객체 리터럴 방식도 배열 리터럴 방식과 마찬가지로
// 객체를 만드는 방식을 중괄호 {}라는 기호를 통해 만드는 것을 말합니다.
// 이것 또한 리터럴 방식으로 만들었다고 말합니다.
