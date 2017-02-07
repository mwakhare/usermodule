import * as express from "express";
import {AuthRoute} from './auth.route';
import {ProductRoute} from './product.route';

let router = express.Router();

router.get('/health-check', (req, res) => {
	res.json('OK');
});

let authRoute = new AuthRoute();
let productRoute = new ProductRoute();

router.use('/auth', authRoute.route());
router.use('/product', productRoute.route());

export = router;