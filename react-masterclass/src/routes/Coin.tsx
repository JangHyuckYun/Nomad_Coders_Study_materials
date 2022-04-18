import { useParams } from 'react-router';

interface Params {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<Readonly<Params>>();
  console.log(coinId);

  return <h1>Coin: {coinId} </h1>;
}

export default Coin;
