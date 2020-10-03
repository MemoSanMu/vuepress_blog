## vue 双向数据绑定

```
使用事件的发布与订阅，实现object.defineproperty() 内置set get，
watcher 实现与observer观察者 和 complile编译的桥梁通信作用，订阅到属性的变化，触发对应的回调函数执行，从而更新视图。
```

## webpack 使用过那些？热加载的实现原理？

```
mode devlopment|production
entry 入口
output 出口
babel 编译
loader 转换器
plugin 
css抽离，js压缩，打包分析数据，热加载

热更新
本地启动express服务，当浏览器访问资源时作出相应；
websoket实时与服务器长连接；
当编译代码js,json 文件被更改时，改动的代码文件会生成hash值；
编译完成后通过websoket向客户端推送hash戳；
客户端的websoket会监听到发送过来的hash文件，然后做对比，如果一样则走缓存，不一样则通过ajax或者jsonp向服务器发送最新的资源请求；
然后使用内存文件系统去替换有变更的文件实现局部刷新。
```


## h5适配

```
rem（没说明白） 媒体查询
```

## vue computed ？

```
计算属性，多个属性值印影响其状态值。
```


## 说说优化？

```
编码方面：使用eslint,sonar,sentry 检测代码质量，团队编码输出统一，保证代码的严谨，可读性，可维护性，健壮性。

打包方面：使用webpack打包js文件，抽离css文件，根据webpack-bunlde-analyzer分析打包后的关系情况选择第三方包的其他处理，按需引入；

加载页面方面：控制首屏请求并发量，减少请求合并请求，loading加载，骨架屏，图片懒加载，路由懒加载，按需加载，数据懒加载，cdn外链，将css放在head内部，将js放在body体尾部；

页面交互方面：防抖，节流处理，transtion 过度动画，anmanition自定义动画。
```

## 页面加载过程？

```
浏览器读取html文档
下载js，css文件解析
创建dom tree,css tree
layout布局计算位置
```

## event lop ？ (js执行机制)

```
js执行单线程-同步-异步-宏任务-微任务
```

## 遇到一个用户有唯一的问题！其他用户没有？怎么排查？

```
考虑缓存（清空缓存），网速（网络不稳定），或者说浏览器列：火狐在异步代码内部执行window.open 操作会被浏览器拦截处理。
```

## 防抖 节流？

```
防抖：首先用户触发事件，设置一个执行器，如果用户重复触发执行回调函数，那么清空之前的执行器，再设置一个新的执行器，以此循环，知道用户操作完毕，触发用户最后一次的执行器执行。

节流：用户频繁输入查询反复调接口获取数据，造成不必要的浪费开销，故设置一个执行器，在执行器执行完成的时间区间内再次触发回调函数的话，那么不予处理执行直接返回，直到执行器处理结束才执行后续的触发。
```


## 重绘 回流？是么时候触发执行它们？

```
重绘：更改css color bgcolor 执行
回流：更改边距padding margin width height 

进入页面肯定避免不了，浏览器加载html 下载css 生成html树 css树 然后结合生成渲染树，然后根据渲染树获得几何信息（元素大小位置信息）生成渲染到页面；

删除添加更改原素会造成，尺寸，位置，原素大小，窗口大小变化都会回流重绘，

```


## 算法 二分查找 ｜ 归并？

## 监听 onerror 返回的参数？

## 1px的一半怎么实现？、

```
transfrom: scale()
```
## 伪类？ 伪元素？

```
伪类： link,active,focus,hover,nth-child(),nth-type-,first-child,last-child()
伪元素：::after, ::before
```
## sass 占位符

```
通过%定义样式群集片段 通过extend 调用，类似于函数调用结果返回定义的代码段集合
```
## [] + {} 空数组+空对象值是什么？
```
答："[object Object]"
[]空数组和{}空对象都是引用类型，都会进行引式类型转换，
所以在他们加的时候，[]空数组会调用valueOf返回的是他的本身，然后在调用tostring返回空字符串，
{}空对象调用valueOf返回的也是他的本身，调用toString返回的是"[object Object]"，
所以空串加上"[object Object]" 为"[object Object]"
```
## Refs 转发

```
Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。对于大多数应用中的组件来说，这通常不是必需的。但其对某些组件，尤其是可重用的组件库是很有用的。最常见的案例如下所述。

在下面的示例中，FancyButton 使用 React.forwardRef 来获取传递给它的 ref，然后转发到它渲染的 DOM button：

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

这样，使用 FancyButton 的组件可以获取底层 DOM 节点 button 的 ref ，并在必要时访问，就像其直接使用 DOM button 一样。

以下是对上述示例发生情况的逐步解释：

我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。
我们通过指定 ref 为 JSX 属性，将其向下传递给 <FancyButton ref={ref}>。
React 传递 ref 给 forwardRef 内函数 (props, ref) => ...，作为其第二个参数。
我们向下转发该 ref 参数到 <button ref={ref}>，将其指定为 JSX 属性。
当 ref 挂载完成，ref.current 将指向 <button> DOM 节点。

```

```
注意

第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。

Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。
```
## 为什么 object.defineproperty  geter seter 不能监听数组的改变？

```
object.defineproperty 本身其实是能对数组做劫持响应的，只是vue内部没实现，是对于性能和用户体验考虑。
新增数组操作需要重新触发observer 观察者，
```
## object.defineproperty 与 proxy 区别？

```
object.defineproperty  只能对属性做劫持，如果属性是对象的话，只能做递归遍历处理，
proxy 能直接对数组对象劫持处理，劣势就是兼容性问题。
```
## http 和 tcp 的联系？

```
总结：
tcp 是建立连接，不涉及请求的实际数据；
http 是超文本传输协议，他是基于tcp链接的，他是做数据传输。

网上解：
http是要基于TCP连接基础上的，简单的说，TCP就是单纯建立连接，不涉及任何我们需要请求的实际数据，简单的传输。http是用来收发数据，即实际应用上来的。
```


