# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## 배운점

### styled components

#### type 추가 하는 법

```typescript

interface ContainerProps {
    bgColor: string;
}

// styled component에 타입을 지정하는 방법
const Container = styled.div<ContainerProps>`
  ${({ bgColor }) => css`
    background-color: ${bgColor};
  `}
`;

```

---

#### as

```javascript
const Btn = styled.button = `...`;

return(
    <Btn as ="a">Login</Btn> // html 태그 = button: x / a: o
);
```

#### 동일 속성 추가 = attrs

```javascript
const Input = styled.input.attrs({required: true})`...`;
```

### useState 함수에 타입 지정하는 방법

```typescript

const [value, setValue] = useState<string | number>("");
setValue("asf");
...

```

### form 등 event에 타입 지정하는법

```typescript

  const [value, setValue] = useState("");
    
    // React.FormEvent 안에 제너릭을 생성해 input, form 등 여러 태그에 관련된 이벤트를 추가할 수 있다.
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        // 구조 분해 할당을 통해 원하는 값을 가져온다.
        // react? ts 에서는 event.target이 아닌 currentTarget을 사용한다.
        const {currentTarget: {value}} = event;

        setValue(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("user", value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={onChange} placeholder="username"/>
                <button>Login</button>
            </form>
        </div>
    );

```