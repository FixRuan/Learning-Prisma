import {Router} from "express"
import {movieRoutes} from "./movie.route";
import {userRoutes} from "./user.route";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);

export {routes};
