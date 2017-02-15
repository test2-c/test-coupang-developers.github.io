import {lookupReturnProductCoupangConfirmDocument} from "./ko/lookup-return-product-coupang-confirm.document";
import {createReturnProductCoupangConfirmRequestDocument} from "./ko/create-return-product-coupang-confirm-request.document";
import {modifyReturnProductCoupangConfirmRequestDocument} from "./ko/modify-return-product-coupang-confirm-request.document";
import {cancelReturnProductCoupangConfirmRequestDocument} from "./ko/cancel-return-product-coupang-confrim-request.document";

export const returnProductCoupangConfirmApiDocs = {
  ko:[],
  en:[]
};

returnProductCoupangConfirmApiDocs.ko.push(lookupReturnProductCoupangConfirmDocument);
returnProductCoupangConfirmApiDocs.ko.push(createReturnProductCoupangConfirmRequestDocument);
returnProductCoupangConfirmApiDocs.ko.push(modifyReturnProductCoupangConfirmRequestDocument);
returnProductCoupangConfirmApiDocs.ko.push(cancelReturnProductCoupangConfirmRequestDocument);

