import {createSellerProductDocument} from "./ko/create-seller-product.document";
import {modifySellerProductDocument} from "./ko/modify-seller-product.document";
import {deleteSellerProductDocument} from "./ko/delete-seller-product.document";
import {lookupSellerProductDocument} from "./ko/lookup-seller-product.document";
import {lookupSellerProductListDocument} from "./ko/lookup-seller-product-list.document";
import {lookupSellerProductListPagingDocument} from "./ko/lookup-seller-product-list-paging.document";
import {requestApprovalSellerProductDocument} from "./ko/request-approval-seller-product.document";
import {lookupProductModifyHistoryDocument} from "./ko/lookup-product-modify-history.document";
import {lookupProductSummaryDocument} from "./ko/lookup-product-summary.document";
import {lookupCategoryListDocument} from "./ko/lookup-category-list.document";
import {lookupSubcategoryListDocument} from "./ko/lookup-subcategory-list.document";
import {lookupCategoryMetaInfoDocument} from "./ko/lookup-category-meta-info.document";
import {lookupReturnShippingFacilityListDocument} from "./ko/lookup-return-shipping-facility-list.document";
import {lookupOutboundShippingFacilityListDocument} from "./ko/lookup-outbound-shipping-facility-list.document";
import {lookupQuantityPriceStatusByProductDocument} from "./ko/lookup-quantity-price-status-by-product.document";
import {changeQuantityByProductDocument} from "./ko/change-quantity-by-product.document";
import {changePriceByProductDocument} from "./ko/change-price-by-product.document";
import {changeSaleStatusToResumptionByProductDocument} from "./ko/change-sale-status-to-resumption-by-product.document";
import {changeSaleStatusToStopByProduct} from "./ko/change-sale-status-to-stop-by-product.document";
import {changePriceBasedOnDiscountRateByProductDocument} from "./ko/change-price-based-on-discount-rate-by-product.document";
import {lookupExposureProductListPagingDocument} from "./ko/lookup-exposure-product-list-paging.document";
import {lookupExposurePagingDocument} from "./ko/lookup-exposure-category.document";
import {lookupExposureCategoryFullListDocument} from "./ko/lookup-exposure-category-full-list.document";
import {lookupProductCertificationInformationDocument} from "./ko/lookup-product-certification-information.document";
import {exposureCategoryValidationDocument} from "./ko/exposure-category-validation.document";
import {createOutboundShippingFacilityDocument} from "./ko/create-outbound-shipping-facility.document";
import {lookupOutboundShippingFacilityDocument} from "./ko/lookup-outbound-shipping-facility.document";
import {modifyOutboundShippingFacilityDocument} from "./ko/modify-outbound-shipping-facility.document";
import {sellerProductCashbackSettingDocument} from "./en/seller-product-cashback-setting.document";

export const productApiDocs = {
  ko:[],
  en:[]
};

productApiDocs.ko.push(createSellerProductDocument);
productApiDocs.ko.push(modifySellerProductDocument);
productApiDocs.ko.push(deleteSellerProductDocument);
productApiDocs.ko.push(lookupSellerProductDocument);
productApiDocs.ko.push(lookupSellerProductListDocument);
productApiDocs.ko.push(lookupSellerProductListPagingDocument);
productApiDocs.ko.push(requestApprovalSellerProductDocument);
productApiDocs.ko.push(lookupProductModifyHistoryDocument);
productApiDocs.ko.push(lookupProductSummaryDocument);
productApiDocs.ko.push(lookupCategoryListDocument);
productApiDocs.ko.push(lookupSubcategoryListDocument);
productApiDocs.ko.push(lookupCategoryMetaInfoDocument);
productApiDocs.ko.push(lookupReturnShippingFacilityListDocument);
productApiDocs.ko.push(lookupOutboundShippingFacilityListDocument);
productApiDocs.ko.push(lookupQuantityPriceStatusByProductDocument);
productApiDocs.ko.push(changeQuantityByProductDocument);
productApiDocs.ko.push(changePriceByProductDocument);
productApiDocs.ko.push(changeSaleStatusToResumptionByProductDocument);
productApiDocs.ko.push(changeSaleStatusToStopByProduct);
productApiDocs.ko.push(changePriceBasedOnDiscountRateByProductDocument);
productApiDocs.ko.push(lookupExposureProductListPagingDocument);
productApiDocs.ko.push(lookupExposurePagingDocument);
productApiDocs.ko.push(lookupExposureCategoryFullListDocument);
productApiDocs.ko.push(lookupProductCertificationInformationDocument);
productApiDocs.ko.push(exposureCategoryValidationDocument);
productApiDocs.ko.push(createOutboundShippingFacilityDocument);
productApiDocs.ko.push(lookupOutboundShippingFacilityDocument);
productApiDocs.ko.push(modifyOutboundShippingFacilityDocument);
productApiDocs.ko.push(sellerProductCashbackSettingDocument);

