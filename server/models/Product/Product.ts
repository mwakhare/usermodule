import {ProductInfo} from '../types/ProductInfo';
import {ProductBase} from './ProductBase';

export class Product extends ProductBase {
	constructor( id: number, product_info: ProductInfo) {
		super(id, product_info);
	}
	product_info: ProductInfo;
	save = (): void => {}
	delete = (): boolean => { return false; }
}