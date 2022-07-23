export interface GetAllArticles {
    corporateVatNumber: string;
    storeShortDigits: string;
}

export interface GetArticlesPartial {
    corporateVatNumber: string;
    storeShortDigits: string;
}

export interface GetStocksAll {
    corporateVatNumber: string;
    warehousesToInclude: string;
}

export interface GetStocksPartial {
    corporateVatNumber: string;
    warehousesToInclude: string;
}

