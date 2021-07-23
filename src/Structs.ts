
export interface Options{
    appShared : string
}

export const productURL = "https://buy.itunes.apple.com/verifyReceipt"
export const sandboxURL = "https://sandbox.itunes.apple.com/verifyReceipt"

export interface VerifyPostBody {
    "receipt-data": string,
    password: string,
}

export interface VerifyResult{
    environment : "Sandbox" | "Production";
    "is-retryable" : boolean;
    latest_receipt? : string; //Encoded as base64
    status : number;
    receipt: Receipt;
    latest_receipt_info? : Latest_Receipt_Info[];
    pending_renewal_info? : Pending_Renew_Info[];
}

//Docs : https://developer.apple.com/documentation/appstorereceipts/responsebody/receipt
interface Receipt{
    adam_id : number;
    app_item_id : number;
    application_version : string;
    bundle_id : string;
    download_id : number;

    expiration_date : string;
    expiration_date_ms : string;
    expiration_date_pst : string;

    in_app : In_App[];

    original_purchase_date : string;
    original_purchase_date_ms : string;
    original_purchase_date_pst : string;

    preorder_date : string;
    preorder_date_ms : string;
    preorder_date_pst : string;

    receipt_creation_date : string;
    receipt_creation_date_ms : string;
    receipt_creation_date_pst : string;

    receipt_type : "Production" | "ProductionVPP" | "ProductionSandbox" | "ProductionVPPSandbox";

    request_date : string;
    request_date_ms : string;
    request_date_pst : string;

    version_external_identifier : number;
    original_application_version : string;
}

//Docs : https://developer.apple.com/documentation/appstorereceipts/responsebody/receipt/in_app
interface In_App {
    product_id : string;
    quantity : string;
    transaction_id : string;

    purchase_date : string;
    purchase_date_ms : string;
    purchase_date_pst : string;

    cancellation_date? : string;
    cancellation_date_ms? : string;
    cancellation_date_pst? : string;
    cancellation_reason? : "1" | "0";

    is_in_intro_offer_period? : "true" | "false"

    web_order_line_item_id? : string;

    original_transaction_id : string;
    original_purchase_date : string;
    original_purchase_date_ms : string;
    original_purchase_date_pst : string;

    expires_date? : string;
    expires_date_ms? : string;
    expires_date_pst? : string;

    is_trial_period : "true" | "false";

    promotional_offer_id? : string;

    // Not in docs but in response ????
    in_app_ownership_type? : "PURCHASED" | "FAMILY_SHARED"
}

//Docs : https://developer.apple.com/documentation/appstorereceipts/responsebody/pending_renewal_info
interface Pending_Renew_Info {
    product_id : string;
    promotional_offer_id : string;
    original_transaction_id : string;

    auto_renew_product_id : string;
    auto_renew_status : "0" | "1";
    expiration_intent? : "1" | "2" | "3" | "4" | "5"

    grace_period_expires_date : string;
    grace_period_expires_date_ms : string;
    grace_period_expires_date_pst : string;

    offer_code_ref_name : string;
    is_in_billing_retry_period : string;

    price_consent_status? : "1" | "0"
}

//Docs : https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info
interface Latest_Receipt_Info {
    cancellation_date : string;
    cancellation_date_ms : string;
    cancellation_date_pst : string;
    cancellation_reason : "1" | "0";

    expires_date : string;
    expires_date_ms : string;
    expires_date_pst : string;

    in_app_ownership_type : "FAMILY_SHARED" | "PURCHASED"

    is_in_intro_offer_period : string;
    is_trial_period : "true" | "false"

    is_upgraded? : "true"

    offer_code_ref_name? : string;

    original_purchase_date : string;
    original_purchase_date_ms : string;
    original_purchase_date_pst : string;

    original_transaction_id : string;

    product_id : string;

    promotional_offer_id : string;

    purchase_date : string;
    purchase_date_ms : string;
    purchase_date_pst : string;

    quantity : string;

    subscription_group_identifier : string;

    web_order_line_item_id : string;

    transaction_id : string;
}