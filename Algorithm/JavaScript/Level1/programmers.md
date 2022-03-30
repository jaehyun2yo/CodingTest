# 📍문자열 다루기 기본
### **문제 설명**

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

### 제한 사항

- `s`는 길이 1 이상, 길이 8 이하인 문자열입니다.

### 입출력 예

|s|return|
|------|---|
|"a234"|false|
|"1234"|true|


# 내 풀이

```jsx
function solution(s) {
    return ( s.length === 4 || s.length === 6 ) && s == parseInt(s) ? true : false ;
}
```

s 문자열의 길이조건을 맞춘뒤 문자열을 숫자형으로바꿨을때 문자열과 같다면 숫자형이고 만약에 문자가 섞인 문자열을 숫자로 바꾸게된다면 NaN 이 출력되기때문에 이방법으로 풀이를 했다.
---

# 📍 **가운데 글자 가져오기**
### **문제 설명**

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

### 재한사항

- s는 길이가 1 이상, 100이하인 스트링입니다.


# 내 풀이

```jsx
function solution(s) {
    return s.length % 2 == 0 ? s.substr((s.length/2)-1, 2) : s.substr(s.length/2, 1);

}
console.log(solution("abde"));
```

글자길이가 짝수 홀수를 나누기위해서 문자열의 길이로 확인한뒤 짝수이면 substr함수를 사용해 문자열길이/2 -1 부터 ~ 두글자를 리턴해주고 홀수라면 문자열길이/2 인덱스부터 하나를 리턴해준다

# 문자열 자르기 사용할수있는 함수들

## substr()

<aside>
💡 str.substr(start[, length])
기존문자열의 start 위치에서 length 만큼 리턴한다

</aside>

## subString()

<aside>
💡 str.substring(indexStrat[,indexEnd])
strart인덱스 자리부터 end까지 잘라서 리턴한다.

</aside>

---
# 📍 **최소 직사각형**
### **문제 설명**

명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

|명함번호|가로 길이|세로길이 |
|------|---|---|
|1|60|50|
|2|30|70|
|3|60|30|
|4|80|40|

가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

---

### 제한사항

- sizes의 길이는 1 이상 10,000 이하입니다.
    - sizes의 원소는 [w, h] 형식입니다.
    - w는 명함의 가로 길이를 나타냅니다.
    - h는 명함의 세로 길이를 나타냅니다.
    - w와 h는 1 이상 1,000 이하인 자연수입니다.

---

### 입출력 예

|sizes|result|
|------|---|
|[[60, 50], [30, 70], [60, 30], [80, 40]]|4000|
|[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]|120|
|[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]|133|


---

### 입출력 예 설명

입출력 예 #1문제 예시와 같습니다.

입출력 예 #2명함들을 적절히 회전시켜 겹쳤을 때, 3번째 명함(가로: 8, 세로: 15)이 다른 모든 명함보다 크기가 큽니다. 따라서 지갑의 크기는 3번째 명함의 크기와 같으며, 120(=8 x 15)을 return 합니다.

입출력 예 #3명함들을 적절히 회전시켜 겹쳤을 때, 모든 명함을 포함하는 가장 작은 지갑의 크기는 133(=19 x 7)입니다.

# 내풀이

```jsx
function solution(sizes) {
    let max_arr = [];
    let min_arr = [];
    sizes.forEach(e => {
        max_arr.push(Math.max(...e));
        min_arr.push(Math.min(...e));
    });

    console.log(max_arr);
    console.log(min_arr);
    
    return Math.max(...max_arr) * Math.max(...min_arr);
    
}
```

문제내용을 보면 카드 가로세로 길이를 정렬해줘야되는데 sizes[0][0] 의 큰값을 max_arr로 작은값을 min_arr 배열로 정리해서 해당값에 가장큰값들을 곱해주면된다

# 다른 풀이

```jsx

function solution(sizes) {
    const newSizes = sizes.map(e => e.sort((a, b) => a - b));
    return Math.max(...newSizes.map(e => e[0])) * Math.max(...newSizes.map(e => e[1]));
}
```

위 내 문제풀이와 내용은 같지만 좀더 효율적이다

map 함수를 통해서 배열안에 배열값들을 오름차순으로 정렬한뒤 

max함수를 이용해 배열안에 배열값들의 작은값중에서 최대값을 구하고 

다음항의 최대값을 구한뒤 서로 곱해준다.


---
# 📍**같은 숫자는 싫어!** 
### **문제 설명**

배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

- arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
- arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

### 제한사항

- 배열 arr의 크기 : 1,000,000 이하의 자연수
- 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

---

### 입출력 예

|arr|answer|
|------|---|
|[1,1,3,3,0,1,1]|[1,3,0,1]|
|[4,4,4,3,3]|[4,3]|


### 입출력 예 설명

입출력 예 #1,2문제의 예시와 같습니다.

# 내 풀이

```jsx
function solution(arr){
    return arr.filter((v,i)=> v !== arr[i+1]);
}
```

filter함수를 사용해 해당값과 인덱스를 받아서 값과 인덱스+1 값이 틀릴때만 골라서 새로운 배열을 반환한다.

연속된 숫자이기때문에 옆에 같은숫자가있으면 지우고 다른숫자 가 나온다면 적는식으로 연속된숫자를 지울수있다.

```jsx

```
# **2016년** 

### **문제 설명**

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT`

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

### 제한 조건

- 2016년은 윤년입니다.
- 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

### **입출력 예**

|a|b|result|
|------|---|---|
|5|24|"TUE"|

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
---
---

# 📍**시저암호**


### **문제 설명**

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### 제한 조건

- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

### 입출력 예

|s|n|answer|
|------|---|---|
|"AB"|1|"BC"|
|"z"|1|"a"|
|"a B z"|4|"e F d"|

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
