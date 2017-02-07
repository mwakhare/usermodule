import * as express from "express";
import {AuthRoute} from './auth.route';
import {UserRoute} from './user.route';

let router = express.Router();

router.get('/health-check', (req, res) => {
	res.json('OK');
});

let authRoute = new AuthRoute();
let userRoute = new UserRoute();

router.use('/auth', authRoute.route());
router.use('/user', userRoute.route());

export = router;