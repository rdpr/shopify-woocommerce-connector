import axios from "axios";
import {Integration} from "interfaces";
import Joi from "joi";

export const changeOnlineOrderStatus = async (reqParams: Integration.RequestParams.ChangeOnlineOrderStatus) => {
    try {
        const response = await axios.post(process.env.INTEGRATION_BASE_URL + "/ChangeOnlineOrderStatus", reqParams);
        const resParamsSchema = Joi.object({
            Success: Joi.boolean(),
            Message: Joi.string(),
            ErrorCode: Joi.number().integer(),
            Result: Joi.any() // Will add all response schemas in separate files
        });

        const {error, value} = resParamsSchema.validate(response.data);
        if (error) throw error;
        const changeOnlineOrderStatusRes: Integration.ResponseParams = value;
    } catch(err) {
        console.error(err);
    }
}

