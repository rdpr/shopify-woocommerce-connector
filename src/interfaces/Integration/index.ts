export * as RequestParams from "@interfaces/Integration/RequestParams";
export {Article, ArticleStockData} from "@interfaces/Integration/Article";
export {DocumentInfoData} from "@interfaces/Integration/OnlineOrder";

import {Article, ArticleStockData} from "@interfaces/Integration/Article";
import {DocumentInfoData} from "@interfaces/Integration/OnlineOrder";
export interface ResponseParams {
    Success: boolean;
    Message: string;
    ErrorCode: number;
    Result: Article[]|ArticleStockData[]|DocumentInfoData;
}

