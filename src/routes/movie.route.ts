import {Router} from "express";
import {CreateMovieController} from "../modules/movies/useCases/createMovie/CreateMovieController";
import {CreateMovieRentController} from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import {GetMoviesByReleaseDateController} from "../modules/movies/useCases/getMovieByReleaseDate/GetMovieByReleaseDateController";

const createMovieController = new CreateMovieController();
const getMovieByReleaseDate = new GetMoviesByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMovieByReleaseDate.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export {movieRoutes};
