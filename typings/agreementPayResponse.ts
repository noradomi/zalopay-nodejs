
export class AgreementPayResponse {
            /**
            * 1: Success, 2: Failed, 3: Processing
            */
        'return_code'?: number;
            /**
            * Description of return code
            */
        'return_message'?: string;
            /**
            * Detail error code
            */
        'sub_return_code'?: number;
            /**
            * Detail error message
            */
        'sub_return_message'?: string;
            /**
            * TXID of order transaction
            */
        'app_trans_id'?: string;
            /**
            * The ZaloPay\'s transaction code
            */
        'zp_trans_id'?: number;

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
            "name": "app_trans_id",
            "baseName": "app_trans_id",
            "type": "string"
        },
        {
            "name": "zp_trans_id",
            "baseName": "zp_trans_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AgreementPayResponse.attributeTypeMap;
    }
}
