import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", (req, res) => {
  //숫자가 높을 수록 보안성이 좋아짐. 너무 높으면 성능이 낮아짐. 10~12
  const hashedPassword = bcrypt.hash(req.body.password, 10);
});
