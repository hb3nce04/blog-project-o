import { Router } from "express";

const router = Router();

router.post("/search", async (req, res, next) => {
  const { text } = req.body;

  res.send(text);
});

export default router;
