import express from "express";
import "dotenv/config";
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      content: "this is joke 1",
    },
    {
      id: 2,
      title: "joke 1",
      content: "this is joke 1",
    },
    {
      id: 3,
      title: "joke 1",
      content: "this is joke 1",
    },
    {
      id: 4,
      title: "joke 1",
      content: "this is joke 1",
    },
  ];
  res.json(jokes);
});
app.listen(PORT, (req, res) => {
  console.log(`server started at ${PORT}`);
});
