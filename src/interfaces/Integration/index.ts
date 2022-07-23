export * as RequestParams from "@interfaces/Integration/RequestParams";
export {Article, ArticleStockData} from "@interfaces/Integration/Article";

import {Article, ArticleStockData} from "@interfaces/Integration/Article";
export interface ResponseParams {
    Success: boolean;
    Message: string;
    ErrorCode: number;
    Result: Article[]|ArticleStockData[];
}

