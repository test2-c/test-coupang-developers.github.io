
export const lookupSettlementInfoByOrderIdDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `settlement-api`,   // input category ex) exchange-service-api
    id: `lookup-settlement-info-by-order-id`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_settlement_info_by_order_id`,
    name: `특정 주문 정산내역 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },
  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/orders/{orderId}/settlementDetails`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/orders/{orderId}/settlementDetails`,
    _description: `주문에 포함되어 있는 업체 주문상세 검색`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `이 API는 '매출내역 조회'의 upgrade버전이며 현재 Close Beta상태에 있는 API입니다,
               안정화 된 이후 공개 될 예정입니다.`,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체코드`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
      {
        name: `orderId`,
        require: true,
        _description: `주문번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: [
      {
        name: `nextToken`,
        require: true,
        _description: `다음 데이터를 호출하기 위한 키값, 기존 응답의 값을 그대로 전달`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    bodyParameters: false
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `결과코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `hasNext`,
      type: `Boolean`,
      _description: `has next data`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `nextToken`,
      type: `String`,
      _description: `더보기를 위한 Key값, 다음 더보기 요청시에 searchDTO의 nextFetchKey 전달 필요`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `amount`,
          type: `Number`,
          _description: `금액`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `cancelDeliveryPrice`,
          type: `Number`,
          _description: `취소 일반 배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `cancelRemoteAreaDeliveryPrice`,
          type: `Number`,
          _description: `취소 도서산간 배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `dcCoupangShareAmount`,
          type: `Number`,
          _description: `할인쿠폰 당사부담금`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `dcSellerShareAmount`,
          type: `Number`,
          _description: `할인쿠폰 업체부담금`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `estimatedSettlementAmount`,
          type: `Number`,
          _description: `정산 예정 금액`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `estimatedSettlementDate`,
          type: `String`,
          _description: `구매확정 예정일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `estimatedPayDate`,
          type: `String`,
          _description: `지급 예정일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `fee`,
          type: `Number`,
          _description: `수수료`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `feeRatio`,
          type: `Number`,
          _description: `수수료율(VAT포함)`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `feeRatioWithoutVAT`,
          type: `Number`,
          _description: `수수료율(VAT미포함)`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `lastCanceledAt`,
          type: `String`,
          _description: `최근 취소일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `lastCoupangConfirmReceiptAt`,
          type: `String`,
          _description: `최근 쿠팡확인요청일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `lastDeliveryStatus`,
          type: `String`,
          _description: `최근 배송 상태`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `lastDeliveryStatusChangedAt`,
          type: `String`,
          _description: `최근 배송 상태 변경일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `lastPurchaseConfirmedAt`,
          type: `String`,
          _description: `최근 구매확정일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `orderDeliveryPrice`,
          type: `Number`,
          _description: `주문 일반 배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `orderId`,
          type: `Number`,
          _description: `주문번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `orderRemoteAreaDeliveryPrice`,
          type: `Number`,
          _description: `주문 도서산간 배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `orderedAt`,
          type: `String`,
          _description: `주문일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `paidAt`,
          type: `String`,
          _description: `결제일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `paidPrice`,
          type: `Number`,
          _description: `결제금액`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `paidQuantity`,
          type: `Number`,
          _description: `결제수량`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `purchaseConfirmAmount`,
          type: `Number`,
          _description: `구매확정금액`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `purchaseConfirmQuantity`,
          type: `Number`,
          _description: `구매확정수량`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `quantity`,
          type: `Number`,
          _description: `수량`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `shipmentBoxId`,
          type: `Number`,
          _description: `배송 Box Id`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `vendorId`,
          type: `String`,
          _description: `업체아이디`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `vendorItemId`,
          type: `Number`,
          _description: `상품ID`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `vendorItemName`,
          type: `String`,
          _description: `상품명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/greatwall_api/apis/api/v2/providers/openapi/apis/api/v4/vendors/T00065340/orders/10000003907450/settlementDetails?nextToken=`,
    code: [
      {
        language: `http`,
        codeblock: {
        }
      }
    ],
    response: {
      "code": "200",
      "message": "ok",
      "data": [
        {
          "vendorItemName": "허번스 겨울용 골프장갑/남성용, 그레이, 허번스 겨울용-남성용, (양손착용)22호",
          "vendorItemId": 3041841882,
          "vendorId": "T00065340",
          "shipmentBoxId": 344543911,
          "quantity": 1,
          "purchaseConfirmQuantity": -9999,
          "purchaseConfirmAmount": -9999,
          "paidQuantity": 1,
          "paidPrice": 6500,
          "paidAt": "2017-01-11 00:44:01",
          "orderedAt": "2017-01-11 00:41:54",
          "orderRemoteAreaDeliveryPrice": 0,
          "orderId": 10000003907450,
          "orderDeliveryPrice": 2500,
          "lastPurchaseConfirmedAt": null,
          "lastDeliveryStatusChangedAt": "2017-01-12 16:17:01",
          "lastDeliveryStatus": "E",
          "lastCoupangConfirmReceiptAt": null,
          "lastCanceledAt": null,
          "feeRatio": 11,
          "fee": 798,
          "estimatedSettlementDate": "2017-01-20",
          "estimatedSettlementAmount": 8202,
          "dcSellerShareAmount": 0,
          "dcCoupangShareAmount": 0,
          "cancelRemoteAreaDeliveryPrice": -9999,
          "cancelDeliveryPrice": -9999,
          "amount": 6500,
          "estimatedPayDate": null,
          "feeRatioWithoutVAT": 10
        }
      ],
      "nextToken": null,
      "hasNext": false
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
};
