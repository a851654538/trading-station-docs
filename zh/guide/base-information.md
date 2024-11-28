---
outline: deep
---

# xxx饰品开放平台 是什么？ {#what-is-vitepress}

xxx饰品开放平台 是一个[交易平台](https://baidu.com) (SSG)，专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。


## 前提条件 {#use-cases}

接入方需要准备以下信息

- **获取CS2DT账号**

  后续如果迭代了购买功能, 您需要预充值账户余额, 才能完成购买饰品的操作, 需要您自行通过接口进行余额查询, 以及进行充值, 保证账户余额充足, 以免影响使用.

- **app-key**

  app-key: 所有接口都需要在 query parameter 中填写您的 app-key, app-key可以在个人中心-api管理查看. [使用示例](https://openapi.cs2dt.com/v1/user/v1/t-coin/balance?app-key=appkey-example)	
  
## 请求结构 

调用开放平台的接口时,是指通过向我们的服务地址发送请求, 需要按照接口的地址, 请求方式, 请求参数构造请求, 否则不能调用成功. 一条查询余额的请求示例如下

``` json
curl -XGET "https://openapi.cs2dt.com/v1/user/v1/t-coin/balance?app-key=app-key-example"
```

### 服务地址

CS2DT开放平台已有的服务接入地址如下


| 服务地域	| 说明								|    备注				|
| ----------| -------------------------------	|----------------------	|
| 国内外		| `https://openapi.cs2dt.com/`		|开放平台OpenAPI接入地址	|

### 通信协议

提供的所有接口均通过 HTTPS 进行通信，提供高安全性的通信通道。

### 请求方式

根据各个接口的具体需求，选择 GET 或 POST 方式发起请求。

### 请求参数

在发起请求时，请求体中可能会包含两类参数：公共请求参数和接口特有的业务参数。

- 公共请求参数是每一个接口需要包含的，目前为query参数中的app-key。
- 接口特有的业务参数是各个接口特有的，参考各接口的参数描述。

### 字符编码

请求及返回结果使用 UTF-8 的字符集进行编码。

## 签名机制

目前无

## 返回结果

API请求返回以下结果

### 调用成功

``` json5
{
    "success": true,
    "data": {
        "userId": 0000000000000000000,
        "name": "usdt_money",
        "data": "0.02"
    },
    "errorCode": 0,
    "errorMsg": null,
    "errorData": null
}
```

### 调用失败
``` json5
{
    "success": false,
    "data": null,
    "errorCode": 140020,
    "errorMsg": "请求需要参数app-key",
    "errorData": null
}
```

### 字段说明

| 字段            | 类型                                       | 是否一定返回|说明|
| --------------- | ------------------------------------------ |-----|----|
| success |  `Boolean`     |是|本次请求是否成功,未true代表服务端流程走完,没有异常;如果为false,则需要去看errorCode字段的错误码,根据此错误码业务上进行处理｜
| success |  `Boolean`     |是|本次请求是否成功,未true代表服务端流程走完,没有异常;如果为false,则需要去看errorCode字段的错误码,根据此错误码业务上进行处理｜


## 名词解释

| 选项				| 说明													|
| ---------------	| ------------------------------------------			|
| `--open [path]`	| 启动时打开浏览器 (`boolean \					 string`)	|
| `--port <port>`	| 指定端口 (`number`)										|
| `--base <path>`	| public base URL (默认值: `/`) (`string`)				|
| `--cors`			| 启用 CORS												|
| `--strictPort`	| 如果指定的端口已被占用则退出 (`boolean`)					|
| `--force`			| 强制优化程序忽略缓存并重新绑定 (`boolean`)					|