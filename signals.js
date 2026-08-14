const express = require("express");
const { generateSignal } = require("./signals");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    app: "Your Trading AI",
    message: "Signal engine is running"
  });
});

app.get("/signal", (req, res) => {
  const price = Number(req.query.price);
  const direction = (req.query.direction || "BUY").toUpperCase();

  if (!price || !["BUY", "SELL"].includes(direction)) {
    return res.status(400).json({
      error: "Use /signal?price=100&direction=BUY"
    });
  }

  res.json(generateSignal(price, direction));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
