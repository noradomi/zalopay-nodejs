
export class OACreateOrderResponse {
    /**
    * Return codes:  1 - SUCCESS  2 - FAIL
    */
    'return_code'?: number;
    'return_message'?: string;
    /**
    * The detailed reason explains why the operation has failed. Possible codes are:  -33 - APP_MAINTENANCE - The app is in maintenance  -68 - ALREADY_EXISTS - The order is already exists  -401 - INVALID_ARGUMENT - The request is invalid  -402 - UNAUTHENTICATED - The app is unauthenticated  -500 - SYSTEM_ERROR - The system is error
    */
    'sub_return_code'?: number;
    'sub_return_message'?: string;
    'zp_trans_token'?: string;
    'order_url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "return_code",
            "baseName": "return_code",
            "type": "number"
        },
        {
            "name": "return_message",
            "baseName": "return_message",
            "type": "string"
        },
        {
            "name": "sub_return_code",
            "baseName": "sub_return_code",
            "type": "number"
        },
        {
            "name": "sub_return_message",
            "baseName": "sub_return_message",
            "type": "string"
        },
        {
            "name": "zp_trans_token",
            "baseName": "zp_trans_token",
            "type": "string"
        },
        {
            "name": "order_url",
            "baseName": "order_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OACreateOrderResponse.attributeTypeMap;
    }
}
