//var 이름; //선언
//이름 = 'Youn'; //할당 / 한번 더 할당하면 재할당

//var 이름name = 'Youn'; //재선언 재할당 전부 가능
//let 이름 = 'Youn'; //재선언 불가능 재할당 가능 실수 방지 가능
//const name = 'Youn'; //재선언 재할당 전부 불가능 변하면 안되는 값을 보관하기 좋음

let 나이 = 19;
const 출신지역 = '충청남도 천안시 서북구 두정동';


//다음을 실행했을 때 콘솔창에서 출력되는 것
var name = 'park';
var id = 0;

function showName(){
    var name = 'kim';
    var id = 1;
    console.log(name);
}

showName();
console.log(id);