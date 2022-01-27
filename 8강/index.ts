// ✨Literal Types로 만드는 const 변수 유사품

// Literal Types 👉 무조건 이 값만 들어가야 한다고 '더' 엄격하게 지정
let naming: 123; // '숫자형'을 넘어서 아예 123만 들어가야 한다.

// Union Type으로 값을 여러개 지정도 가능하다.
let 접니다: "대머리" | "솔로";
접니다 = "대머리";
접니다 = "솔로";

// return 값도 '더' 엄격한 지정이 가능하다.
function solution(a: "hello"): 1 | 0 {
    return 1;
}
solution("hello");

// ###################################################

// ✨ 함수호출에서 특정값("kim")만 들어갈 수 있다고 해서 생김새가 특정값이면 다 들어갈 수 있는건 아니다.
// '특정값' 자체가 타입이라는 뜻이며, 무조건 특정값을 그대로 넣어야만 들어간다.
// 임의의 변수 안에 있는 값(자료.name)이 특정값과 같을 경우, 임의의 변수 안에 있는 값을 파라미터로 넣으면 에러가 뜬다.
// 임의의 변수 안에 있는 값은 타입 자체는 'string'이기 때문이다. ('kim' !== 'string')
var 자료 = { name: "kim" };
function 내함수(a: "kim") {}
// 내함수(자료.name)
// 👆 자료.name의 타입 자체를 묻는 것이기 때문에 'string'은 'kim'과 다르므로 에러가 뜬다.

// as const 👉 호출함수의 파라미터로 임의의 변수 값을 넣기 위한 수단!
// 효과1. object value 값을 그 자체로 타입으로 지정해준다.
// 효과2. object 속성들에 모두 readonly 상태로 만들어준다.
var 자료2 = { name: "kim" } as const;
function 내함수2(a: "kim") {}
내함수2(자료2.name);

// ###################################################

// (문제)
// 1. '가위' '바위' '보'만 파라미터로 입력 가능
// 2. '가위' '바위' '보'만 들어가는 array를 return 해야한다.
type Solution2Type = "가위" | "바위" | "보";
function solution2(a: Solution2Type): Solution2Type[] {
    return [a];
}
solution2("바위");
