import Joi from "joi";


const ChangeOnlineOrderResult = Joi.object({
    Success: Joi.boolean(),
    Message: Joi.string(),
    ErrorCode: Joi.number().integer(),
    Result: Joi.any() // Will add all result schemas in separate files
});

//const IssuedVoucherInfo = Joi.object({
//
//});

const DocumentLineInfoData = Joi.object({
    Id: Joi.string().uuid().required(),
    ArticleReference: Joi.string().required(),
    LineDescription: Joi.string().required(),
    ApparelColumnDimensionValueId: Joi.string().uuid().required(),
    ApparelColumnDimensionValueCode: Joi.string().required(),
    ApparelRowDimensionValueId: Joi.string().uuid().required(),
    ApparelRowDimensionValueCode: Joi.string().required(),
    Quantity: Joi.number().required(),
    UnitPrice: Joi.number().required(),
    VatRate: Joi.number().required(),
    Barcode: Joi.string().required()
});

const GenerateOnlineOrderResult = Joi.object({
    Id: Joi.string().uuid().required(),
    DocumentNumber: Joi.string().required(),
    DocumentTypeShortDigits: Joi.string().required(),
    AtDocCode: Joi.string().required(),
    DocumentDate: Joi.date().required(),
    PdfFile: Joi.string().base64().required(), 
    DocumentTotal: Joi.number().required(),
    IsReturn: Joi.boolean().required(),
    //Vouchers: Joi.array().items(IssuedVoucherInfo), // Missing interface 
    Lines: Joi.array().items(DocumentLineInfoData),
    CustomerCode: Joi.string().required(),
    ExternalDocumentNumber: Joi.string().required(),
});

const Response = Joi.object({
    Success: Joi.boolean(),
    Message: Joi.string(),
    ErrorCode: Joi.number().integer(),
    Result: Joi.alternatives(GenerateOnlineOrderResult, ChangeOnlineOrderResult) // Will add all result schemas in separate files
});

export const Integration = {
    Response
}

