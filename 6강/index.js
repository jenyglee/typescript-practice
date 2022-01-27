// ✨ 타입 확정하기 Narrowing & Assertion
// Narrowing 문법 👉 타입을 확인해서 기능을 부여한다.
function solution(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
solution(123);
// Assertion 문법(as) 👉 타입 덮어쓰기
// 유니온타입의 파라미터 뒤에 as + '자료형'을 붙이면 자료형을 정해서 넣어줄 수 있다. 불필요한 if문과 typeof를 줄일 수 있다.
// ✨ assertion 문법의 용도 : 두가지 이상의 자료형 중 하나를 고를 때만 사용한다. 한가지 자료형을 다른 자료형으로 바꾸는게 아니다.
function solution2(x) {
    var array = [];
    array[0] = x;
}
solution2(123);
// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function solution3(numArr) {
    var newArr = [];
    numArr.forEach(function (v) {
        newArr.push(+v);
    });
}
solution3(["1", 2, "3"]);
// (숙제2) 다음과 같은 함수를 만들어보십시오.
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
// 철수쌤같은 선생님 object 자료를 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.
function solution4(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
}
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
console.log(solution4(민수쌤));
