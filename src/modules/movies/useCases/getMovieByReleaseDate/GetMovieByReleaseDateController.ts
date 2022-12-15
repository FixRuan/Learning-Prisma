import { Request, Response } from "express";
import {GetMovieByReleaseDateUseCase} from "./GetMovieByReleaseDateUseCase";

export class GetMoviesByReleaseDateController {
  async handle(req: Request, res: Response) {
    const getMoviesByReleaseDateUseCase = new GetMovieByReleaseDateUseCase();
    const result = await getMoviesByReleaseDateUseCase.execute();

    return res.status(201).json(result);
  };
}
