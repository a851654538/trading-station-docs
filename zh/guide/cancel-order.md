---
outline: deep
---

# 取消订单

取消订单。

## 请求地址

- **类型** : `POST`
- **地址** : `/api/productOrder/cancelOrder`


## 请求参数

### 字段说明
| 参数名		           | 参数类型							      |    是否必填				| 字段说明	       |
|-----------------|------------------|----------------------	|-------------|
| appId	          | `string`							  |是						| APPID		     |
| appSecret	      | `string`							  |是						| appSecret		 |
| t	              | `string`							  |是						| 毫秒时间戳		     |
| orderId	   | `string`							  |是						| 平台订单ID		    |
### 请求示例

## 返回响应
### 字段说明
### 响应示例
```json
{
  "code": 200,
  "msg": "操作成功"
}
```
