import * as express from "express";
import * as expressValidation from "express-validation";
import * as expressJwt from "express-jwt";
import paramValidation from '../../config/param-validation';
import {AuthController} from '../controllers/auth.controller';

export class AuthRoute {
	private _router;

	constructor() {
		let auth = new AuthController();
		this._router = express.Router();

		this._router.route('/login').post(expressValidation(paramValidation.login), auth.login);
		this._router.route('/register').post(expressValidation(paramValidation.register), auth.register);
	}

	public route() {
		return this._router;
	}
}