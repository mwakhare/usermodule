import {AttributesData} from './AttributesData';
import {StockData} from './StockData';
import {SalePriceData} from './SalePriceData';

export type ProductInfo = {
	name: string,
	sku_number: string,
	description: string,
	price: number,
	category_id:number,
	featured_image: string,
	image_gallery: string[],
	type: number,
	attributes: AttributesData[],
	variation: number[]
	stock: StockData[],
	sale_price: SalePriceData,
	sale_duration: Date,
	tags: string[],
};