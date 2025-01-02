---
outline: deep
---

# 饰品列表查询

饰品列表。

## 请求地址

- **类型** : `POST`
- **地址** : `/api/product/list`


## 请求参数

### 字段说明
| 参数名		           | 参数类型							      |    是否必填				| 字段说明	       |
|-----------------|------------------|----------------------	|-------------|
| appId	          | `string`							  |是						| APPID		     |
| appSecret	      | `string`							  |是						| appSecret		 |
| t	              | `string`							  |是						| 毫秒时间戳		     |
| pageNo	         | `Integer`							 |是						| 页码		        |
| marketHashName	 | `string`							  |是						| steam唯一名称market_hash_name		     |
| deliveryType	   | `Integer`							  |是						| 发货方式1:自动，2：人工		     |
### 请求示例

## 返回响应
### 字段说明
### 响应示例
```json
{
  "msg": "success",
  "code": 200,
  "data": {
    "rows": [
      {
        "productId": "6848512", //饰品ID
        "deliveryType": 2, //发货方式1:自动，2：人工
        "marketHashName": "AWP | 二西莫夫 (久经沙场)", //名称
        "iconUrl": "https://igstatic.igxe.cn/steam/image/730/7ebc80509abf40dd39befc48d9ce1c84.png", //图片
        "exteriorWear": null, //磨损
        "price": "0.03", //售价￥
      }
    ],
    "isMore": 1 //1：更多
  }
}
```
