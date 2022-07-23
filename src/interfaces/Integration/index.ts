export * as RequestParams from "@interfaces/Integration/RequestParams";

export interface Response {
    Success: boolean;
    Message: string;
    ErrorCode: number;
    Result: any;
}
