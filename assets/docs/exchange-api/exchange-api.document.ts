import {lookupChangeRequestListDocument} from "./ko/lookup-change-request-list.document";
import {confirmationOfExchangeProductReceiptDocument} from "./ko/confirmation-of-exchange-product-receipt.document";
import {denyExchangeRequestDocument} from "./ko/deny-exchange-request.document";
import {createExchangeProductInvoiceDocument} from "./ko/create-exchange-product-invoice.document";
import {createExchangeProductCoupangConfirmRequestDocument} from "./ko/create-exchange-product-coupang-confirm-request.document";
import {cancelExchangeProductCoupangConfirmRequestDocument} from "./ko/cancel-exchange-product-coupang-confrim-request.document";

export const exchangeApiDocs = {
  ko:[],
  en:[]
};

exchangeApiDocs.ko.push(lookupChangeRequestListDocument);
exchangeApiDocs.ko.push(confirmationOfExchangeProductReceiptDocument);
exchangeApiDocs.ko.push(denyExchangeRequestDocument);
exchangeApiDocs.ko.push(createExchangeProductInvoiceDocument);
exchangeApiDocs.ko.push(createExchangeProductCoupangConfirmRequestDocument);
exchangeApiDocs.ko.push(cancelExchangeProductCoupangConfirmRequestDocument);
