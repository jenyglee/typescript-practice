// ✨타입스크립트 기본 타입 정리 (primitive types)

let 이름: string = "kim";
let 나이: number = 50;
let 결혼했니: boolean = true;

// 배열의 자료형 지정.
// 객체가 숫자열이면 에러가 뜬다.
let memberStr: string[] = ["kim", "john"];

// 오브젝트의 값 자료형 지정.
// 배열의 자료형보다 좀더 직관적으로 지정해줄 수 있다.
let memberObj: { member1: string; member2: string } = {
    member1: "kim",
    member2: "john",
};

// 사실 하나하나 지정해줄 필요가 없다. 알아서 된다.
let 네임 = "kim"; //  네임: string
let 에이지 = 50; // 에이지: number
let 메리드 = true; // 메리드: boolean

// 과제
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let myName = "Lee Jaewon";
let myAge = 30;
let myArea = "Bucheon";

//  Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let mySongInfo: { song: string; singer: string } = {
    song: "celebrate",
    singer: "아이유",
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project: { member: string[]; days: number; started: boolean } = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
