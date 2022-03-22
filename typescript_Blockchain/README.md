# 강의 설명 모음

`※ #0.5 Types in Typescript (07:28) 부분까지 봤음`

## 1. 에러 감지

내가 매게변수 3개를 받는 함수를 생성했다. 호출할 때 매개변수를 2개만 넣어줘서 실행하면 일반 js 에서는 빠졌는지도 모르지만, typescript에서는 빠졌음을 감지하고 에러를 발생시켜준다.  
ex)

```typescript

const sayHi = (name, age, gender) => {
    console.log(`${name}, ${age}, ${gender}`)
};

sayHi("jangHyuck", "00"); // error: 한개 빠졋따고 컴파일도 안됨..

// const sayHi = (name, age, gender?) => {
// 위에처럼 매개변수 옆에 ? 붙이면 선택형 매개변수로 없어도 컴파일 잘 됨

```

## 2. 매개변수에 타입 추가

```typescript

// 아래처럼 매개변수, 함수에 타입을 지정할 수 있다.
// 당연하지만 다른 타입의 값을 입력 시 에러가 난다.
const sayHi = (name: string, age: number, gender: string): void => {
    console.log(`${name}, ${age}, ${gender}`)
};

```

### 2-1 tsc-watch

tsc-watch란 ts 파일이 업데이트됨을 감지하고 자동으로 컴파일 해준다.
                              
먼저 프로젝트 최상위 폴더에 `dist`, `src` 폴더를 각각 생성해준다.  
`dist` 폴더에는 컴파일된 파일이, `src` 폴더엔 원본 파일을 옮겨준다.    

다음으로 터미널에 `yarn add tsc-watch --dev` 입력해준다.  
다음에 tsconfig.js를 아래처럼 수정한다.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

마지막으로 package.json에 "scripts" 부분을 수정해준다.

```json
{
  "scripts": {
    "start": "tsc-watch --onSuccess \"node dist/index.js\" "
  }
}
```
 다 했으면 터미널에 `yarn start` 명령어를 입력해보자.  

 > 만약 `Cannot find module 'typescript/bin/tsc'` 같은 에러 발생 시,  
 > 터미널에 `yarn add @types/node typescript ts-node` 명령어 입력 후 다시 `yarn start` 를 입력하면 잘 될것이다.
 >