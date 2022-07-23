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

export interface GenerateOnlineOrder {
    document: DocumentData;
}

interface DocumentData {
    DocumentTypeShortDigits: string;
    StoreShortDigit: string;
    DocumentDate?: Date;
    DocumentNumber?: string;
    Observations?: string;
    FiscalNumber?: string;
    CustomerSearchType: string;
    CustomerCode: string;
    ReservationStoreShortDigit: string;
    OrderStatus: "99"|"0"|"1"; // Pending/Confirmed/Canceled
    CustomerData?: CustomerData;
    Lines: LineData[];
    PaymentMethods: PaymentData[];
    InvoiceAddress?: InvoiceAddress;
    DeliveryAddress?: DeliveryAddress;
    DocumentCustomerName?: string;
    ExpeditionCode?: string;
    DocumentCustomerName2?: string;
}

interface CustomerData {
    CustomerCode: string;
    CustomerCardNumber: string;
    CustomerName1: string;
    CountryCode: string;
    FiscalNumber: string;
    ContactEmail: string;
    ContactPhone: string;
    BirthDate: Date;
    InvoiceAddressCode: string;
    DeliveryAddressCode: string;
    PaymentAddressCode: string;
    GenericText1: string;
    GenericText2: string;
    GenericText3: string;
    SubjectVatPassive: 0|1;
    Addresses: EntityAddressData[];
}

interface LineData {
    ArticleID: string;
    Reference: string;
    Barcode?: string;
    Quantity: number;
    UnitPriceWithVat: number;
    DiscountPercentage1?: number;
    DiscountPercentage2?: number;
    Observations?: string;
    LineNumber?: number;
    DiscountValue?: number;
}

interface PaymentData {
    Code: string;
    PaymentValue: number;
    ChangeValue?: number;
    PointsValue?: number;
}

interface Address {
    AddressLine1: string;
    AdressLine2?: string;
    ZipCode?: string;
    ZipCodeLocation?: string;
    CountryCode?: string; // ISO Alpha 2 country code
}

interface InvoiceAddress extends Address {}

interface DeliveryAddress extends Address {}

interface EntityAddressData extends Address {
    Code: string;
}

export interface ChangeOnlineOrderStatus {

}

