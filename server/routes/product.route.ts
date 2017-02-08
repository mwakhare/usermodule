import * as express from "express";
import * as expressValidation from "express-validation";
import * as expressJwt from "express-jwt";
import paramValidation from '../../config/param-validation';
import {ProductController} from '../controllers/product.controller';
import * as config from '../../config/env';


export class ProductRoute {
	private _router;
	constructor() {
		let product = new ProductController();
		this._router = express.Router();
		/*this._router.route('/').get(expressJwt({ secret: (<any>config).jwt_secret }), product.list);*/
		this._router.route('/').get(product.list);
		this._router.route('/:id').get(product.get);
		this._router.route('/:id').delete(product.remove);
		this._router.param('productID',product.load);
		this._router.route('/:productID')
			/*.get(expressJwt({ secret: (<any>config).jwt_secret }), product.get)*/
			.post(expressJwt({ secret: (<any>config).jwt_secret }), product.update)
			/*.delete(expressJwt({ secret: (<any>config).jwt_secret }), product.remove);*/
	}

	public route() {
		return this._router;
	}
}