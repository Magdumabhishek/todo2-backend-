const {getTodo,postTodo,putTodo,deleteTodo} = require("../controller/todoController")
const express = require("express")
const route = express.Router()

route.get("/",getTodo)
route.post("/",postTodo)
route.put("/:id",putTodo)
route.delete("/:id",deleteTodo)

module.exports = route