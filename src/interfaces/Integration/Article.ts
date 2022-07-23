export interface Article {
    Id: string;
    Reference: string;
    Description: string;
    Price: number;
    Barcodes: ArticleBarcode;
    Unit: Unit;
    Brand: Brand;
    Family: Family;
    Collection: Collection;
    CreationDate: Date;
    UpdateDate: Date;
    Generic_0: string;
    Generic_1: string;
}

interface ArticleBarcode {
    Barcode: string;
    RowCode: string;
    RowDescription: string;
    ColumnCode: string;
    ColumnDescription: string;
    Price: number;
}

interface Unit {
    Code: string;
    Description: string;
}

interface Brand {
    Code: string;
    Description: string;
}

interface Family {
    Description: string;
}

interface Collection {
    Code: string;
    Description: string;
}

export interface ArticleStockData {
    StoreShortDigits: string;
    WarehouseCode: string;
    ArticleId: string;
    Reference: string;
    Barcode: string;
    RowCode: string;
    ColumnCode: string;
    StockQuantity: number;
    ReservedQuantity: number;
}
