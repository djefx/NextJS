import axios from "axios";
interface CoinData {
  id: string;
  name: string;
  quotes: {
    USD: {
      price: number;
    };
  };
}

export default async function Home() {
  const res = await fetch("https://api.coinpaprika.com/v1/tickers");
  const data: CoinData[] = await res.json();

  // Filter for specific coins (Bitcoin, Ethereum, Litecoin, Dogecoin)
  const bitcoin = data.find((coin) => coin.id === "btc-bitcoin");
  const ethereum = data.find((coin) => coin.id === "eth-ethereum");
  const litecoin = data.find((coin) => coin.id === "ltc-litecoin");
  const dogecoin = data.find((coin) => coin.id === "doge-dogecoin");

  return (
    <div className="m-4 p-4 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
      <ul className="list-disc list-inside">
        <li>Bitcoin: ${bitcoin?.quotes.USD.price}</li>
        <li>Ethereum: ${ethereum?.quotes.USD.price}</li>
        <li>Litecoin: ${litecoin?.quotes.USD.price}</li>
        <li>Dogecoin: ${dogecoin?.quotes.USD.price}</li>
      </ul>
    </div>
  );
}
