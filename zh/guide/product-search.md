---
outline: deep
---

# 饰品列表查询

饰品列表筛选。

## 请求地址

- **类型** : `POST`
- **地址** : `/api/product/search`


## 请求参数

### 字段说明
| 参数名		           | 参数类型							      |    是否必填				| 字段说明	                       |
|-----------------|------------------|----------------------	|-----------------------------|
| appId	          | `string`							  |是						| APPID		                     |
| appSecret	      | `string`							  |是						| appSecret		                 |
| t	              | `string`							  |是						| 毫秒时间戳		                     |
| pageNo	         | `Integer`							 |是						| 页码		                        |
| pageSize	       | `Integer`							 |是						| 每页多少条		                     |
| marketHashName	 | `string`							  |是						| steam唯一名称market_hash_name		 |
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
        "store": 2, //库存
        "marketHashName": "AWP | 二西莫夫 (久经沙场)", //名称
        "iconUrl": "https://igstatic.igxe.cn/steam/image/730/7ebc80509abf40dd39befc48d9ce1c84.png", //图片
        "exteriorWear": null, //磨损
        "minPrice": "0.03" //最低售价
        "agsAutoSaleCount": 4, //自动发货在售数量
        "agsManualSaleCount": 34, //手动发货在售数量
        "agsAutoMinPrice": 210.7836, //自动发货在售最低价
        "agsManualMinPrice": 195.0771 //手动发货在售最低价
      }
    ],
    "isMore": 1 //1：更多
  }
}
```
