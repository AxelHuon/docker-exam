const express = require("express");
const config = require("./db.config");


const db = require("knex")({
  client: "mysql2",
  connection: {
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
  },
});


const cors = require("cors");
const app = express();

const port = 4001
app.use(express.json());
app.use(cors());



app.get("/todos", async (req, res) => {
  try {
    const todos = await db.select("*").from("todos");
    res.send(todos);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving todos" });
  }
});

app.post("/todos", async (req, res) => {
  const { title, description } = req.body;
  
  if (!title) {
    res.status(400).send({ message: "Title is required" });
    return;
  }
  
  try {
    const [id] = await db("todos").insert({ title,description });
    const todo = await db("todos").where("id", id).first();
    res.send(todo);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

app.delete("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  
  try {
    await db("todos").where("id", todoId).del();
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ message: "Error deleting todo" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
