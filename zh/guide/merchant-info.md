---
outline: deep
---

# 用户余额查询

查询用户账号余额。

## 请求地址

- **类型** : `POST`
- **地址** : `/api/merchant/info`


## 请求参数

### 字段说明
| 参数名		| 参数类型							|    是否必填				| 字段说明	       |
| ----------| -------------------------------	|----------------------	|-------------|
| appId	| `string`							|是						| APPID		     |
| appSecret	| `string`							|是						| appSecret		 |
| t	| `string`							|是						| 毫秒时间戳		     |

### 请求示例

## 返回响应
### 字段说明
### 响应示例
```json
{
  "code": 200, //code
  "msg": "操作成功",
  "data": {
    "money": 10101.0000 //余额
  }
}
```
