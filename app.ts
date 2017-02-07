import * as util from "util";
import * as config from './config/env';
import {Application} from './config/express';

let app = new Application();

app.listen((<any>config).app_port, (<any>config).env);
console.log('Something from here');