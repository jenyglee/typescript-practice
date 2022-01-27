// ✨타입을 미리 정하기 애매할 때 (union type, any, unknown)

// Union Type : 타입을 2개 이상 지정
let 회원: string | number = "kim";

// 숫자열과 문자열이 가능한 배열 지정
let 회원들: (number | string)[] = [1, "2", 3];

// 숫자열과 문자열이 가능한 오브젝트 지정
let 오브젝트: { a: string | number } = { a: 123 };

// : any 👉 모든 자료형을 허용!
// 이것을 쓰면 사실상 타입스크립트를 쓰는 의미가 없다.
// 주로 타입쉴드 해제용으로 쓴다.
let 모든이름: any;
모든이름 = "lee jaewon";
모든이름 = 123;
모든이름 = ["Lee", "Kim"];

// : unknown 👉 : any 와 같은 기능!
// 차이점은 : unknown 인 상태에서 변수를 수정하면 수정된 값의 자료형으로 지정하게 되어서
// 타입쉴드가 적용된 다른 변수에 위 변수를 넣을 경우 자료형 검사를 하게됨
let 언노운: unknown;
언노운 = "kim";
언노운 = {};
// let 새변수: string = 언노운;
// 👆새변수는 문자열만 가능한데 언노운이 {} 이므로 에러발생
// 하지만 :any는 타입쉴드를 해제해버려서 어떤 자료형이든 에러가 발생하지 않음.

let num: string | number;
// num + 1
// 👆 string | number 으로 지정했을 땐 연산자를 쓰는 것도 불가능하다. 오로지 : number만 있어야 가능하다.

let num2: unknown = 1;
// num2 -1
// 👆 : unknown 이것도 모든 자료형을 허용했지만 연산은 불가능하다. 오로지 : number로 되어있어야 가능하다.

// (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
// age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.
let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// (숙제2) 학교라는 변수에 타입지정해보십시오.
let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
} = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
