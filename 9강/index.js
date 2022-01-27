// ✨ 함수와 methods에 type alias 지정하는 법
// 함수표현식에만 type alias 적용이 가능하다.
var 함수 = function () {
    return 10;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (a) {
    var newArr = a.split("");
    if (newArr[0] === "0")
        newArr.shift();
    return newArr.join("");
};
var removeDash = function (a) {
    var result = "";
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var x = a_1[_i];
        if (x !== "-")
            result += x;
    }
    return +result;
};
console.log(cutZero("0ABC"));
console.log(removeDash("032-636-5242"));
// (숙제3) 함수에 함수를 집어넣고 싶습니다.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
// 이 함수는 어떻게 만들면 될까요?
// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
var 만들함수 = function (a, func1, func2) {
    console.log(func2(func1(a)));
};
만들함수("010-1111-2222", cutZero, removeDash);
