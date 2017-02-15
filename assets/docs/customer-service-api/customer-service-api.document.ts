
import {lookupCustomerInquiryByProductDocument} from "./ko/lookup-customer-inquiry-by-product.document";
import {customerEnquiryResponseDocument} from "./ko/customer-enquiry-response.document";
import {lookupCustomerServiceCenterEnquiryDocument} from "./ko/lookup-customer-service-center-enquiry.document";
import {customerServiceCenterEnquiryResponseDocument} from "./ko/customer-service-center-enquiry-response.document";
export const customerServiceApiDocs = {
  ko:[],
  en:[]
};

customerServiceApiDocs.ko.push(lookupCustomerInquiryByProductDocument);
customerServiceApiDocs.ko.push(customerEnquiryResponseDocument);
customerServiceApiDocs.ko.push(lookupCustomerServiceCenterEnquiryDocument);
customerServiceApiDocs.ko.push(customerServiceCenterEnquiryResponseDocument);
