import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from "dotenv";

import router from './routes/admin-routes';
import blogRouter from './routes/blog-routes';
import podcastRouter from './routes/podcast-routes';

dotenv.config();

const app = express();

app.use(cors({ origin: '*'}));
app.use(express.json());

app.use("/admin", router);
app.use("/api/blog", blogRouter);
app.use("/api/podcast", podcastRouter);

app.use("/", (req,res) => {
    res.send("My Blog")
})




const DB_CONNECTION = process.env.DATABASE_URL;
const PORT = process.env.PORT || 6000;

mongoose
    .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
    app.listen(PORT, () =>
    console.log(`Server is running @ http://localhost:${PORT}`)
    )
).catch((error) => console.error(error));
