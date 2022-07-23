import Joi from "joi";

const ChangeOnlineOrder = Joi.object({
    Success: Joi.boolean(),
    Message: Joi.string(),
    ErrorCode: Joi.number().integer(),
    Result: Joi.any() // Will add all result schemas in separate files
});

const Response = {
    ChangeOnlineOrder
}

export const Schemas = {
    Response
}

