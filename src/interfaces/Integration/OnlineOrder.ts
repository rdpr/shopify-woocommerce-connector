export interface DocumentInfoData {
    Id: string;
    DocumentNumber: string;
    DocumentTypeShortDigits: string;
    AtDocCode: string;
    DocumentDate: Date;
    PdfFile: string; // Base64
    DocumentTotal: number;
    IsReturn: boolean;
    //Vouchers: IssuedVoucherInfo[]; // Missing interface
    Lines: DocumentLineInfoData[];
    CustomerCode: string;
    ExternalDocumentNumber: string;
}

interface DocumentLineInfoData {
    Id: string;
    ArticleReference: string;
    LineDescription: string;
    ApparelColumnDimensionValueId: string;
    ApparelColumnDimensionValueCode: string;
    ApparelRowDimensionValueId: string;
    ApparelRowDimensionValueCode: string;
    Quantity: number;
    UnitPrice: number;
    VatRate: number;
    Barcode: string;
}

