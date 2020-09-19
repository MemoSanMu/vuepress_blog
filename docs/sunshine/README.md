###### 常用方法

```
https://github.com/chenqf/technical-summary/tree/master/test_code
```
###### 问题
```
safari 浏览器scrollTop 兼容问题 》 app 盒子 家上overflow: auto; 导致
ios 苹果手机 不支持下载附件 
下载附件兼容火狐浏览器 a标签 
        let src = document.createElement('a')
        let url, downLoadUrl = '/contract-api/attachmentContext/download?uuid=' + this.id;
        src.href = url;
        src.download = this.previewFileName;
        document.body.appendChild(src)
        src.click()
        document.body.removeChild(src)

        火狐浏览器需添加至body内然后触发click事件才能达到在火狐浏览器下载附件的功能；其他浏览器正常href-download
```
###### isModile

```
const userAgent = navigator.userAgent.toLowerCase()
      const phoneReg = /iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/
```
###### 打开扫码登录窗口

```
window.open(openUrl, '_blank', 'height=500, width=600, top=200, left=200, toolbar=no, menubar=no, scrollbars=1, resizable=no, location=no, status=no')
```
###### 捕获错误

```
1：error 捕获error错误
2：unhandledrejection捕获promise async await（当promise被reject时，并且没有reject处理器是触发此事件）
3：vue.config.handleError vue 捕获error
```
###### 二维码 条形码 插件

```
qrcodejs2 JsBarcode
```
###### 富文本编辑器

```
TinyMCE：功能强大、所见即所得的富文本编辑器
```
###### 发送事件  发布订阅
```
window.dispatchEvent(new CustomEvent('dispatchName', {}) 自定义事件
window.addEventListener(eventName, () => {}) 监听事件
类似发布订阅
```
###### 常用正则

```
// 常用的正则规则
// eslint-disable-next-line
export const regExpConfig = {
  IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证
  mobile: /^1([3|4|5|7|8|])\d{9}$/, // 手机号码
  telephone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/, // 固定电话
  num: /^[0-9]*$/, // 数字
  phoneNo: /(^1([3|4|5|7|8|])\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$)/, // 电话或者手机
  policeNo: /^[0-9A-Za-z]{4,10}$/, // 账号4-10位数字或字母组成
  pwd: /^[0-9A-Za-z]{6,16}$/, // 密码由6-16位数字或者字母组成
  isNumAlpha: /^[0-9A-Za-z]*$/, // 字母或数字
  isAlpha: /^[a-zA-Z]*$/, // 是否字母
  isNumAlphaCn: /^[0-9a-zA-Z\u4E00-\uFA29]*$/, // 是否数字或字母或汉字
  isPostCode: /^[\d-]*$/i, // 是否邮编
  isNumAlphaUline: /^[0-9a-zA-Z_]*$/, // 是否数字、字母或下划线
  isNumAndThanZero: /^([1-9]\d*(\.\d+)?|0)$/, // 是否为整数且大于0/^[1-9]\d*(\.\d+)?$/
  isNormalEncode: /^(\w||[\u4e00-\u9fa5]){0,}$/, // 是否为非特殊字符（包括数字字母下划线中文）
  isTableName: /^[a-zA-Z][A-Za-z0-9#$_-]{0,29}$/, // 表名
  isInt: /^-?\d+$/, // 整数
  isTableOtherName: /^[\u4e00-\u9fa5]{0,20}$/, // 别名
  // isText_30: /^(\W|\w{1,2}){0,15}$/, // 正则
  // isText_20: /^(\W|\w{1,2}){0,10}$/, // 正则
  isText_30: /^(\W|\w{1}){0,30}$/, // 匹配30个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_50: /^(\W|\w{1}){0,50}$/, // 匹配50个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_20: /^(\W|\w{1}){0,20}$/, // 匹配20个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_100: /^(\W|\w{1}){0,100}$/, // 匹配100个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_250: /^(\W|\w{1}){0,250}$/, // 匹配250个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isNotChina: /^[^\u4e00-\u9fa5]{0,}$/, // 不为中文  IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证
  IDcardAndAdmin: /^(([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X))|(admin))$/, // 身份证或者是admin账号
  IDcardTrim: /^\s*(([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3})|([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X))|(admin))\s*$/, // 身份证
  num1: /^[1-9]*$/, // 数字
  companyNO: /^qqb_[0-9a-zA-Z_]{1,}$/, // 公司人员账号
  imgType: /image\/(png|jpg|jpeg|gif)$/, // 上传图片类型
  isChina: /^[\u4e00-\u9fa5]{2,8}$/,
  isNozeroNumber: /^\+?[1-9]\d*$/, // 大于零的正整数
  float: /^\d+(\.?|(\.\d+)?)$/, // 匹配正整数或者小数 或者0.这个特殊值
}
```
###### 

```
/**
   **datestr:形如‘2017-06-12’的字符串
  **return Date 对象
   **/
   function getDate (datestr) {
        var temp = datestr.split("-");
        if (temp[1] === '01') {
            temp[0] = parseInt(temp[0],10) - 1;
            temp[1] = '12';
        } else {
            temp[1] = parseInt(temp[1],10) - 1;
        }
        //new Date()的月份入参实际都是当前值-1
        var date = new Date(temp[0], temp[1], temp[2]);
        return date;
    }
  /**
  ***获取两个日期间的所有日期
  ***默认start<end
  **/
  function getDiffDate (start, end) {
        var startTime = getDate(start);
        var endTime = getDate(end);
        var dateArr = [];
        while ((endTime.getTime() - startTime.getTime()) > 0) {
            var year = startTime.getFullYear();
            var month = (startTime.getMonth()+1).toString().length === 1 ? "0" + (parseInt(startTime.getMonth().toString(),10) + 1) : (startTime.getMonth() + 1);
            var day = startTime.getDate().toString().length === 1 ? "0" + startTime.getDate() : startTime.getDate();
            dateArr.push(year + "-" + month + "-" + day);
            startTime.setDate(startTime.getDate() + 1);
        }
        return dateArr;
    }
```
###### 元素
```
break-inside: auto | avoid

auto: 元素可以中断
avoid: 元素不能中断
```
###### a标签下载download

```
const src = document.createElement('a')
src.href = downLoadUrl
src.download = fileName
document.body.appendChild(src)
src.click()
document.body.removeChild(src)
```
###### git commit
```
build:影响构建系统或外部依赖项的更改（示例范围：gulp，broccoli，npm）

ci: 对CI配置文件和脚本的更改（示例范围:Travis，Circle，BrowserStack，SauceLabs）

docs: 只更改文档

feat: 一项新功能

fix: bug修复

perf: 改进性能的代码更改

refactor: 代码更改既不修复错误也不添加功能

style: 不影响代码含义的更改（空格，格式，缺少分号等）

test: 添加缺失测试或更正现有测试
```
###### 用户引导

```
driver.js
```


