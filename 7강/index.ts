//  ✨타입도 변수에 담아쓰세요 type 키워드 써서 & readonly

// type alias 👉 타입을 변수로 만드는 것(전문용어임)

// 유니온 타입을 변수로 뽑기
type AnimalType = string | number | undefined;
let 동물: AnimalType = "kim";

// 오브젝트 타입을 변수로 뽑기
type AnimalType2 = { name: string; age: number };
let 동물2: AnimalType2 = { name: "kim", age: 21 };

// readonly 👉 object의 자료수정 막기. 변수 수정이 불가능하게 되며, 오로지 읽기 전용으로 된다.
type Season = { readonly name: string };
const 계절: Season = { name: "여름" };

// 타입 Extend 👉 변수로 지정된 타입끼리 합친다.

// Union Type으로 합치기
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY; // {x: number, y: number}

// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 속성이 하나만 들어간다.

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈
type HomeworkType = {
    color?: string;
    size: number;
    readonly position: number[];
};

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
type HomeworkType2 = { name: string; phone: number; email: string };

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
type Adult = { adult: boolean };
type Result = HomeworkType2 & Adult;
