import {Movie} from "@prisma/client";
import {prisma} from "../../../../prisma/client";

export class GetMovieByReleaseDateUseCase{
  async execute():Promise<Movie[]>{
    const movies = await prisma.movie.findMany({});
    return movies;
  };
};
