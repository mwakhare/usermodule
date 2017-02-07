
import {AttributesData} from './AttributesData';
import {TagData} from './TagData';
import {StockData} from './StockData';
import {Sale_PriceData} from './Sale_PriceData';
import {VariationData} from './VariationData';
import {ImageGalleryData} from './ImageGalleryData';

export type ProductInfo = 
					{
						Name:string,
						SKU_No:string,
						Desc:string,
						price:number,
						Cat_Id:number,
						Featured_Image:string,
						Image_Gallery:ImageGalleryData[],
						Type:number,
						Attributes:AttributesData[],
						Variation:VariationData[],
						Stock:StockData[],
						Sale_Price:Sale_PriceData[],
						Sale_Duration:string,
						Tag:TagData[],
					};