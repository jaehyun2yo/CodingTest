### **문제 설명**

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT`

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

### 제한 조건

- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

### **입출력 예**

[제목 없음](https://www.notion.so/5e12798a89e94c748cc99655b96ccee7)

# 내풀이

```jsx
function solution(a, b) {
    const dayArray = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var answer = dayArray[new Date(`2016-${a}-${b}`).getDay()];
    return answer;
}
```

date 기본내장메소드를 사용해서 파라미터로 받은값으로 해당날짜의 getDay를 구하고 

그 구한인덱스값의 dayArray 를 리턴해준다

# 좀더 간편한 풀이

```jsx
function solution(a, b) {
		let date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}
```

더 간편하게 적을수있지만 오래걸리므로 비추 !

---

### **문제 설명**

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### 제한 조건

- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

### 입출력 예

[제목 없음](https://www.notion.so/92f811ac47a74d9ca1c9047f8568eb32)

# 나의 풀이

```jsx
function solution(s, n) {
    let cipher = "abcdefghijklmnopqrstuvwxyz";
    const lower_cipher = cipher.split("");
    const upper_cipher = cipher.toUpperCase().split("");
    let answer = [];
    
    function index_cal(index) {
        return index > 25 ? index -26 : index
    }

    for(let x of s.split("")){
        if (x != x.toLowerCase()) {
            upper_cipher.map((curr, index) =>{
                if(x === curr){
                    answer.push(upper_cipher[index_cal(index+n)]);
                }
            });
        }else if (x == " "){
            answer.push(" ");
        }
        
        
        else {
            lower_cipher.map((curr, index) => 
            {
            if(x === curr){
                answer.push(lower_cipher[index_cal(index+n)]);
            };
        });
    }
    
}
let result = answer.join("");
return result;
}
```

굉장히 복잡하게 짠거같다 먼저 암호와 매칭시킬 코드들을 문자열로 변수에 선언해주고 그 변수를 가지고 소문자 , 대문자 배열을 생성했다 이제 이배열들을 활용할껀데  for 반복문을 통해 받은 배열로 바꾼 s 문자열을 돌아주면서 해당값이 대문자인지 소문자인지 확인해준다 확인됬다면 map 메소드를 통해 기존에 생성해놨던 배열들과 매칭시켜 맞는값의 인덱스를 얻어오고 인덱스 + n 값을 더해준다 

다만 이 인덱스가 z 일경우는 25 가 되는데 매칭시켜줄 배열의 길이는 최대 25이기에 한바퀴 돌게 설계해야된다

이를 확인해주기위해 인덱스값을 변형시켜줄 function 하나를 생성하고 25 이상이라면 계산을통해 -26을 통해서 0부터 다시돌게해준다 ( 인덱스 값은 0 부터 시작이니깐 ) 

그리고 공백이 x 값에 있다면 answer에 push 해준다 

이렇게 시저암호로 교환된 데이터들을 문자열로 바꿔주기위해 join 을 사용해 result 변수에 담아주고 

해당값을 리턴한다

# 다른사람 풀이

```jsx

function solution(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}
```

소문자 대문자를 한번에 놔서 map을 통해 인덱스값을 확인한뒤 맞는값을 join 통해 문자열로 바꿔준다 

..굿굿 내꺼와 로직은 비슷하지만 이게 훨씬 간결하고 명확하다...
