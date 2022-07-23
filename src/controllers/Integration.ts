import axios from "axios";
import {Integration} from "interfaces";
import {Schemas} from "@models";

export const changeOnlineOrderStatus = async (reqParams: Integration.RequestParams.ChangeOnlineOrderStatus) => {
    try {
        const response = await axios.post(process.env.INTEGRATION_BASE_URL + "/ChangeOnlineOrderStatus", reqParams);
        const {error, value} = Schemas.Integration.Response.validate(response.data);
        if (error) throw error;
        const changeOnlineOrderStatusRes: Integration.ResponseParams = value;
    } catch(err) {
        console.error(err);
    }
}

export const generateOnlineOrder = async (reqParams: Integration.RequestParams.GenerateOnlineOrder) => {
    try {
        const response = await axios.post(process.env.INTEGRATION_BASE_URL + "/GenerateOnlineOrder", reqParams);
        const {error, value} = Schemas.Integration.Response.validate(response.data);
        if (error) throw error;
        const generateOnlineOrderRes: Integration.ResponseParams = value;
    } catch(err) {
        console.error(err);
    }
}

