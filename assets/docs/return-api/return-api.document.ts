
import {lookupReturnListPerDayDocument} from "./ko/lookup-return-list-per-day.document";
import {lookupReturnListPerMinuteDocument} from "./ko/lookup-return-list-per-minute.document";
import {lookupReturnProductDocument} from "./ko/lookup-return-product.document";
import {confirmReceiptOfProductDocument} from "./ko/confirm-receipt-of-product.document";
import {returnApprovalProcessingDocument} from "./ko/return-approval-processing.document";
import {lookupReturnShippingFacilityDocument} from "./ko/lookup-return-shipping-facility.document";
import {createReturnShippingFacilityDocument} from "./ko/create-return-shipping-facility.document";

export const returnApiDocs = {
  ko:[],
  en:[]
};

returnApiDocs.ko.push(lookupReturnListPerDayDocument);
returnApiDocs.ko.push(lookupReturnListPerMinuteDocument);
returnApiDocs.ko.push(lookupReturnProductDocument);
returnApiDocs.ko.push(confirmReceiptOfProductDocument);
returnApiDocs.ko.push(returnApprovalProcessingDocument);
returnApiDocs.ko.push(lookupReturnShippingFacilityDocument);
returnApiDocs.ko.push(createReturnShippingFacilityDocument);
