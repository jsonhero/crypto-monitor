import { Response, Request, Router } from "express";
import Currency from "../db/models/currency";

const router = Router();

router.get("/currency", async(req: Request, res: Response) => {
    const results = await Currency.read();
    res.json(results.map((result: Currency) => result.fields()));
});

export default router;