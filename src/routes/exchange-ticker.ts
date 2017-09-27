import { Response, Request, Router } from "express";
import ExchangeTicker from "../db/models/exchange-ticker";

const router = Router();

router.get("/exchange-ticker", async(req: Request, res: Response) => {
  try {
    const results = await ExchangeTicker.read();
    res.json(results.map((result: ExchangeTicker) => result.fields()));
  } catch (e) {
    console.log(e);
  }
});

export default router;