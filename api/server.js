import  express, {json}  from "express";

import authorsRouter from './authors.js'
import booksRouter from './books.js';
import bookstoreRouter from './bookstores.js';
const server = express();
server.use(json())
server.use("/api/authors",authorsRouter)
server.use("/api/books", booksRouter)
server.use("/api/bookstores", bookstoreRouter)


export default server;
