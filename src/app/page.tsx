import axios from "axios";
type CoinData = {
  id: string;
  name: string;
  quotes: {
    USD: {
      price: number;
    };
  };
};

export default async function Home() {
  const res = await fetch("https://api.coinpaprika.com/v1/tickers");
  const data: CoinData[] = await res.json();

  // Filter for specific coins (Bitcoin, Ethereum, Litecoin, Dogecoin)
  const coins = [
    "btc-bitcoin",
    "eth-ethereum",
    "ltc-litecoin",
    "doge-dogecoin",
  ];
  const filteredData = data.filter((coin) => coins.includes(coin.id));

  // Create a map for easier access
  const coinMap = filteredData.reduce((map, coin) => {
    map[coin.id] = coin;
    return map;
  }, {} as Record<string, CoinData>);

  return (
    <div className=" mt-4 p-4 bg-cyan-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Price Info</h1>
      <ul className="list-disc list-inside">
        <li>Bitcoin: ${coinMap["btc-bitcoin"]?.quotes.USD.price}</li>
        <li>Ethereum: ${coinMap["eth-ethereum"]?.quotes.USD.price}</li>
        <li>Litecoin: ${coinMap["ltc-litecoin"]?.quotes.USD.price}</li>
        <li>Dogecoin: ${coinMap["doge-dogecoin"]?.quotes.USD.price}</li>
      </ul>
    </div>
  );
}
