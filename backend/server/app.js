import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";
import passportConfig from "./passport/index";
//passport 연결
passportConfig();

require("dotenv").config();

const app = express();
const port = 7000;

//보안 설정
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());
} else if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//파싱 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors 설정
app.use(cors());
//라우팅 설정
//app.use("/api/post", require("./routes/post"));

mongoose.connect(process.env.MONGO_URI).then(() => console.log("connected"));

app.listen(port, () => {
  console.log("port on localhost:7000");
});
