import * as express from "express";
import * as expressValidation from "express-validation";
import * as expressJwt from "express-jwt";
import paramValidation from '../../config/param-validation';
import {UserController} from '../controllers/user.controller';
import * as config from '../../config/env';

export class UserRoute {
	private _router;

	constructor() {
		let user = new UserController();
		this._router = express.Router();
		this._router.route('/').get(expressJwt({ secret: (<any>config).jwt_secret }), user.list);
		this._router.param('userID', user.load);
		this._router.route('/:userID')
			.get(expressJwt({ secret: (<any>config).jwt_secret }), user.get)
			.post(expressJwt({ secret: (<any>config).jwt_secret }), user.update)
			.delete(expressJwt({ secret: (<any>config).jwt_secret }), user.remove);
	}

	public route() {
		return this._router;
	}
}