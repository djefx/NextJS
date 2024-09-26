import axios from "axios";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    const response = await axios.get(
      "https://api.coinpaprika.com/v1/tickers/btc-bitcoin"
    );
    console.log(response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { GET };
