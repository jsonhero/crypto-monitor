import { Response, Request, Router } from "express";
import currency from "../db/models/currency";

const router = Router();

router.get("/currency", async(req: Request, res: Response) => {
    const fields = await currency.read();
    res.json(fields);
});

export default router;