"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.coinpaprika.com/v1/coins/btc-bitcoin"
      );
      const data = await response.json();
      setCoinData(data);
    }
    fetchData();
  }, []);

  if (!coinData) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Bitcoin Information
      </h1>
      <table className="min-w-full bg-white border border-gray-200 text-black">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
              Attribute
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">ID</td>
            <td className="py-2 px-4 border-b border-gray-200">
              {coinData.id}
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">Name</td>
            <td className="py-2 px-4 border-b border-gray-200">
              {coinData.name}
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">Symbol</td>
            <td className="py-2 px-4 border-b border-gray-200">
              {coinData.symbol}
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">Rank</td>
            <td className="py-2 px-4 border-b border-gray-200">
              {coinData.rank}
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">Type</td>
            <td className="py-2 px-4 border-b border-gray-200">
              {coinData.type}
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">Active</td>
            <td className="py-2 px-4 border-b border-gray-200">
              {coinData.is_active ? "Yes" : "No"}
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">Is New</td>
            <td className="py-2 px-4 border-b border-gray-200">
              {coinData.is_new ? "Yes" : "No"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
