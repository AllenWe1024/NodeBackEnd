基于node.js的后台管理系统

测试账号：admin1

测试密码：admin1

# 概况
项目的请求根路径为 http://letsrun.plus:10003

以 /api 开头的请求路径，不需要访问权限

以 /my 开头的请求路径，需要在请求头中携带 Authorization 身份认证字段，才能正常访问成功

# 登录注册

## 注册
- 用户注册接口

- POST

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |



```
{
  "status": 0,
  "message": "注册成功！"
}
```

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 登录

- `/api/login`

- POST

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

```
{
  "status": 0,
  "message": "登录成功！",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI"
}
```

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |
| token   | string | 用于有权限接口的身份认证       |
