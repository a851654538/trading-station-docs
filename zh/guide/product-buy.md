---
outline: deep
---

# 购买饰品

购买饰品。

## 请求地址

- **类型** : `POST`
- **地址** : `/api/productOrder/productBuy`


## 请求参数

### 字段说明
| 参数名		           | 参数类型							      | 是否必填				 | 字段说明	            |
|-----------------|------------------|----------|------------------|
| appId	          | `string`							  | 是						  | APPID		          |
| appSecret	      | `string`							  | 是						  | appSecret		      |
| t	              | `string`							  | 是						  | 毫秒时间戳		          |
| marketHashName	 | `string`							  | 是						  | marketHashName		 |
| channelOrderNo	   | `string`							  | 是						  | 商户订单号		          |
| fetchTrackLink	   | `string`							  | 是						  | 收货人交易连接		        |
| maxPrice	   | `Number`							  | 是						  | 最高价格（四位小数）		     |
| deliveryType	   | `Number`							  | 否						  | 发货方式1:自动，2：人工		  |
| qty	   | `Number`							  | 是						  | 数量		             |
### 请求示例

## 返回响应
### 字段说明
### 响应示例
```json
{
  "msg": "success",
  "code": 200,
  "data": [
    {
      "channelOrderNo": "6848512", //商户订单号
      "totalAmount": 2.00, //金额
      "totalQty": 1, //数量
      "orderNumber": "321321", //平台主订单号
      "orderId": "321" //平台订单ID
    }
  ]
}
```
