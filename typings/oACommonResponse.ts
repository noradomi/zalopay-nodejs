
export class OACommonResponse {
    /**
    * Return codes:  1 - SUCCESS  2 - FAIL  3 - PROCESSING  -500 - SYSTEM_ERROR  -429 - LIMIT_REQUEST_REACH  406 - ILLEGAL_STATUS  -405 - ILLEGAL_CLIENT_REQUEST  -403 - ILLEGAL_SIGNATURE_REQUEST  -402 - ILLEGAL_APP_REQUEST  -401 - ILLEGAL_DATA_REQUEST
    */
    'return_code'?: number;
    'return_message'?: string;
    /**
    * Possible codes:  1 - Giao dịch thành công  -32 - Hệ thống đang có lỗi, vui lòng quay lại sau.  -33 - Ứng dụng đang bảo trì, vui lòng quay lại sau.  -34 - Kênh thanh toán đang bảo trì, vui lòng chọn kênh khác.  -35 - Kênh thanh toán không hỗ trợ hoặc đang bảo trì, vui lòng chọn kênh khác.  -43 - Ngân hàng đang bảo trì, vui lòng chọn ngân hàng khác.  -88 - Chức năng này đang bảo trì, vui lòng quay lại sau.  -101 - Hoàn tiền thành công. Chủ thẻ ATM, Thẻ VISA/Master/JCB sẽ được hoàn tiền trong 3-5 ngày làm việc.  -135 - Hệ thống đang bảo trì, vui lòng quay lại sau.  -301 - Hệ thống đang có lỗi. Vui lòng thử lại sau.  -322 - Payment Code hết hạn, giao dịch thất bại, tài khoản chưa bị trừ tiền. Vui lòng thực hiện lại.  -329 - User huỷ giao dịch thanh toán.
    */
    'sub_return_code'?: number;
    'sub_return_message'?: string;

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
        }    ];

    static getAttributeTypeMap() {
        return OACommonResponse.attributeTypeMap;
    }
}
