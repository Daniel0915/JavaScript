// 마지막 글자를 * 처리한다. (ex. 홍길동 -> 홍길*)

function maskingName(strName) {
    if(strName === undefined || strName === '' ) {
        return '';
    }
    // const pattern = /.$/; // 뒷 글자만 정규식( $ -> 줄(Line)의 끝에서 일치, /xyz$/ ) 
    // const pattern = /(?<=.{0})./; // 앞글자 하나만 마스킹 처리 
    // const pattern = /(?<=.{1})./; // 앞에서 두번째 글자 하나만 마스킹 처리 
    const pattern = /(?<=.{1})./gi; // 김도형 -> 김** 
    
    return strName.replace(pattern, "*");
}

// 뒤에서 부터 3글자를 * 처리한다. (ex. 12가3456 -> 12가3***)
function maskingCar(strCar) {
    if (strCar == undefined || strCar === '') {
        return '';
    }
    const pattern = /.{3}$/; // 정규식 
    return strCar.replace(pattern, "***");
}

// 마스킹 이메일 처리 (ex. to9251@naver.com)
function maskingEmail(email) {
    
    const len = email.split('@')[0].length;  // ******@naver.com
    const len2 = email.split('@')[0].length-3;  // to9***@naver.com 
    return email.replace(new RegExp('.(?=.{0,' + len + '}@)', 'g'), '*');
}


// Test
console.log(maskingName('김도도'));
console.log(maskingCar('12가3456'));
console.log(maskingEmail('to9251@nvaer.xcom'));

