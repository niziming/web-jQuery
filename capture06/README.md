| 函数                    | 描述                                          |
|-----------------------|---------------------------------------------|
| jQuery\.ajax\(\)      | 执行异步 HTTP \(Ajax\) 请求。                      |
| \.ajaxComplete\(\)    | 当 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。        |
| \.ajaxError\(\)       | 当 Ajax 请求完成且出现错误时注册要调用的处理程序。这是一个 Ajax 事件。   |
| \.ajaxSend\(\)        | 在 Ajax 请求发送之前显示一条消息。                        |
| jQuery\.ajaxSetup\(\) | 设置将来的 Ajax 请求的默认值。                          |
| \.ajaxStart\(\)       | 当首个 Ajax 请求完成开始时注册要调用的处理程序。这是一个 Ajax 事件。    |
| \.ajaxStop\(\)        | 当所有 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。      |
| \.ajaxSuccess\(\)     | 当 Ajax 请求成功完成时显示一条消息。                       |
| jQuery\.get\(\)       | 使用 HTTP GET 请求从服务器加载数据。                     |
| jQuery\.getJSON\(\)   | 使用 HTTP GET 请求从服务器加载 JSON 编码数据。             |
| jQuery\.getScript\(\) | 使用 HTTP GET 请求从服务器加载 JavaScript 文件，然后执行该文件。 |
| \.load\(\)            | 从服务器加载数据，然后把返回到 HTML 放入匹配元素。                |
| jQuery\.param\(\)     | 创建数组或对象的序列化表示，适合在 URL 查询字符串或 Ajax 请求中使用。    |
| jQuery\.post\(\)      | 使用 HTTP POST 请求从服务器加载数据。                    |
| \.serialize\(\)       | 将表单内容序列化为字符串。                               |
| \.serializeArray\(\)  | 序列化表单元素，返回 JSON 数据结构数据。                     |


## 01.jQuery.ajax()
01AJAX.html

jQuery 代码：
~~~
$(document).ready(function(){
  $("#b01").click(function(){
  htmlobj=$.ajax({url:"/jquery/test1.txt",async:false});
  $("#myDiv").html(htmlobj.responseText);
  });
});
~~~

参数
options
类型：Object

可选。AJAX 请求设置。所有选项都是可选的。

async
类型：Boolean

默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。

注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。

beforeSend(XHR)
类型：Function

发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。

XMLHttpRequest 对象是唯一的参数。

这是一个 Ajax 事件。如果返回 false 可以取消本次 ajax 请求。

cache
类型：Boolean

默认值: true，dataType 为 script 和 jsonp 时默认为 false。设置为 false 将不缓存此页面。

jQuery 1.2 新功能。

complete(XHR, TS)
类型：Function

请求完成后回调函数 (请求成功或失败之后均调用)。

参数： XMLHttpRequest 对象和一个描述请求类型的字符串。

这是一个 Ajax 事件。

contentType
类型：String

默认值: "application/x-www-form-urlencoded"。发送信息至服务器时内容编码类型。

默认值适合大多数情况。如果你明确地传递了一个 content-type 给 $.ajax() 那么它必定会发送给服务器（即使没有数据要发送）。

context
类型：Object

这个对象用于设置 Ajax 相关回调函数的上下文。也就是说，让回调函数内 this 指向这个对象（如果不设定这个参数，那么 this 就指向调用本次 AJAX 请求时传递的 options 参数）。比如指定一个 DOM 元素作为 context 参数，这样就设置了 success 回调函数的上下文为这个 DOM 元素。

就像这样：