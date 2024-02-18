const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors())

app.get("/api/home", (req, res) => {
  res.json({ message: "AYYYYYYY LMAO", people: ["Harry", "Jack", "Barry"] });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
