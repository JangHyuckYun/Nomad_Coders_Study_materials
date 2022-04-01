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