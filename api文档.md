API文档
====


目录
----
> 用户管理

登录 &emsp;
添加用户 &emsp;
更新用户 &emsp;
获取所有用户列表 &emsp;
删除用户 &emsp;

> 分类管理

获取树型分类列表 &emsp;
添加分类 &emsp;
更新分类 &emsp;

-------------------------------------------

用户管理
-
- 登录
请求URL:  http://www.spartan-home.com/login 
请求方式: POST
参数类型:
username    *   string  用户名
passworad   *   string  密码
返回示例:
``` 
{
  "status": 0,
  "data":{}
}
```
---
商品分类
-
- 获取分类树形结构数据  
  URL: http://www.spartan-home.com/api/v1/pjjp/category/tree  
  Method: GET  
```json
# 参数类型:
{}
```
```json
# 响应:
{
  status: true,
  code: 200,
  message: "",
  data: [
    {
      id: 1,
      name: "U系列",
      parent_id: null,
      sort: 0,
      level: 0,
      path: "/",
      children: [
        {
          id: 2,
          name: "家具",
          parent_id: 1,
          sort: 0,
          level: 1,
          path: "/1/",
          children: [
            {
            id: 3,
            name: "沙发",
            parent_id: 2,
            sort: 0,
            level: 2,
            path: "/1/2/"
            },
            {
            id: 4,
            name: "桌几",
            parent_id: 2,
            sort: 0,
            level: 2,
            path: "/1/2/"
            }
          ]
        }
      ]
    }
  ]
}
```

- 获取分类数据  
  URL: http://www.spartan-home.com/api/v1/pjjp/category/add  
  Method: POST  
```json
# 参数类型:
{}
```

- 添加分类  
  URL: http://www.spartan-home.com/api/v1/pjjp/category/add  
  Method: POST  
```json
# 参数类型:
{}
```

- 编辑分类  
  URL: http://www.spartan-home.com/api/v1/pjjp/category/upd  
  Method: POST  
```json
# 参数类型:
{}
```
---
商品规格
-
- 获取规格数据  
  URL: http://www.spartan-home.com/api/v1/pjjp/spec  
  Method: GET  
```json
# 参数类型:
{}
```
- 添加规格  
  URL: http://www.spartan-home.com/api/v1/pjjp/spec/add  
  Method: POST  
```json
# 参数类型:
{}
```
- 编辑规格  
  URL: http://www.spartan-home.com/api/v1/pjjp/spec/upd  
  Method: POST  
```json
# 参数类型:
{}
```
---
商品规格选项
-
- 获取规格数据  
  URL: http://www.spartan-home.com/api/v1/pjjp/param  
  Method: GET  
```json
# 参数类型:
{}
```
- 添加规格选项  
  URL: http://www.spartan-home.com/api/v1/pjjp/param/add  
  Method: POST  
```json
# 参数类型:
{}
```
- 编辑规格选项  
  URL: http://www.spartan-home.com/api/v1/pjjp/param/upd  
  Method: POST  
```json
# 参数类型:
{}
```


内置方法
----

通过 `this.$refs.table` 调用

`this.$refs.table.refresh(true)` 刷新列表 (用户新增/修改数据后，重载列表数据)

> 注意：要调用 `refresh(bool)` 需要给表格组件设定 `ref` 值
>
> `refresh()` 方法可以传一个 `bool` 值，当有传值 或值为 `true` 时，则刷新时会强制刷新到第一页（常用户页面 搜索 按钮进行搜索时，结果从第一页开始分页）


内置属性
----
> 除去 `a-table` 自带属性外，还而外提供了一些额外属性属性  

  
| 属性           | 说明                                            | 类型              | 默认值 |
| -------------- | ----------------------------------------------- | ----------------- | ------ |
| alert          | 设置是否显示表格信息栏                          | [object, boolean] | null   |
| showPagination | 显示分页选择器，可传 'auto' \| boolean          | [string, boolean] | 'auto' |
| data           | 加载数据方法 必须为 `Promise` 对象 **必须绑定** | Promise           | -      |


`alert` 属性对象：

```javascript
alert: {
  show: Boolean, 
  clear: [Function, Boolean]
}
```

注意事项
----

> 你可能需要为了与后端提供的接口返回结果一致而去修改以下代码：
(需要注意的是，这里的修改是全局性的，意味着整个项目所有使用该 table 组件都需要遵守这个返回结果定义的字段。)

修改 `@/components/table/index.js`  第 132 行起



```javascript
 
```
返回 JSON 例子：
```json 
```



更新时间
----

该文档最后更新于： 2019-01-21 AM 08:37
