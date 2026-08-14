function generateSignal(price, direction = "BUY") {
  const risk = price * 0.002;

  if (direction === "BUY") {
    return {
      signal: "BUY",
      entry: Number(price.toFixed(2)),
      sl: Number((price - risk).toFixed(2)),
      tp: Number((price + risk * 3).toFixed(2)),
      rr: "1:3",
      confidence: "Setup-based — not guaranteed"
    };
  }

  return {
    signal: "SELL",
    entry: Number(price.toFixed(2)),
    sl: Number((price + risk).toFixed(2)),
    tp: Number((price - risk * 3).toFixed(2)),
    rr: "1:3",
    confidence: "Setup-based — not guaranteed"
  };
}

module.exports = { generateSignal };
