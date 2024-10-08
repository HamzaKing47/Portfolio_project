import express from "express";
import "dotenv/config";
import connectDb from "./db/config.js";
import userRouter from "./routes/user.route.js";
import formidableMiddleware from "./middlewares/formidable.middleware.js";
import blogRoute from "./routes/blog.route.js";

const app = express();
connectDb();

app.use(express.json());
app.use(formidableMiddleware())

app.use("/api/v1", userRouter, blogRoute);

const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
