import express from "express";
import "dotenv/config";
import connectDb from "./db/config.js";
import userRouter from "./routes/user.route.js";
import formidableMiddleware from "./middlewares/formidable.middleware.js";
import blogRouter from "./routes/blog.route.js";
import skillRouter from "./routes/skill.route.js";
import resumeRouter from "./routes/resume.route.js";
import projectRouter from "./routes/project.route.js";
import contactRouter from "./routes/contact.route.js";
import cors from 'cors'

const app = express();
connectDb();

app.use(express.json());
app.use(formidableMiddleware());
// In backend
app.use(cors());

app.use(
  "/api/v1",
  userRouter,
  blogRouter,
  skillRouter,
  resumeRouter,
  projectRouter,
  contactRouter
);

const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
