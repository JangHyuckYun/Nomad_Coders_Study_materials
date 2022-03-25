# NextJS Introduction

`※ #1.6 Custom App(10:10) 까지 시청하였음`

 - NextJs 는 React.js 와 달리 프레임워크로 특정 규칙을 지키며 사용해야한다.
 - pages 폴더 안에 js 파일 이름이 곧 url 이름이 된다. (해당 파일의 함수명과는 상관 없다.)
 - 기존 React.js 는 Router, Route를 설정해야 하는 반면 NextJS는 위의 설명처럼 설계되어 있어 딱히 필요 없다. (useRouter 로 url 정보등 호출 가능)

## 장점

 - 기존 React.js는 CSR(Client Side Rendering)으로 사이트 접속하면 빈 태그에 js를 사용해 컴포넌트를 추가하는 형태로
하기 때문에 인터넷이 느린 지역은 흰색 화면이 보이는 경우가 있는 반면, next.js 는 SSR(Server Side Rendering) 으로 처음부터
태그가 추가된 상태로 사이트가 호출되기 때문에 흰색 화면이 보이지 않는다.
 
# CSS 추가 방식

오늘 배운것으로는 약 두가지가 있다.

 - CSS Modules
 - Styles JSX

## import CSS Modules

1. 다른곳에 `[fileName].module.css` 파일을 생성한다.
2. 해당 module.css파일에 일반적인 css문법으로 작성한다.
   1. 여기선 `.hi { color:red }` 를 예로 들겠다.
3. 사용하고싶은 곳(ex = pages/index.js )에 `import [styleName] from '[root..]/[fileName].module.css'`형식으로 불러온다.
4. 사용하고싶은 태그에 다음과 같은 속성을 추가한다. `className={[styleName].hi}`
   1. 위와 같은 형식으로 class 속성을 불러와 사용할 수 있다.
   2. 단점으론 일일이 기억해야 한단 것으로 노마드 코더는 jsx 형식의 스타일링 방식을 두번째로 선호한다고 하였다.

##  Styles JSX

```javascript

// NavBar.js
// ...

return (
    <nav>
        <Link href="/">
            <a className={"asdasd"}>Home</a>
        </Link>
        <Link href="/about">
            <a className={"asd2"}>About</a>
        </Link>
        <style jsx>{`
                 nav {
                  background-color: tomato;
                 }
                 a {
                  text-decoration: none;
                 }
            `}</style>
    </nav>
);

```

위의 코드에서 알 수 있듯이 아래쪽에 **style**태그 생성 후 jsx 속성을 추가한다.
다음으로 **style**태그 안에 중괄호를 열어주고 ``를 추가해준다. 그 안에 일반적인 css 코드를 작성한다.
(물론 ${} 을 추가함으로써 js 변수도 사용할 수 있다.)
