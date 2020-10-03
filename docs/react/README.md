### React 
---
> 用于构建用户界面的javascript库

## 用户界面 
> ++User Interface UI 的简称++

## 声明式
~~~~
React 可以非常轻松地创建用户交互界面，为你应用的每一个状态设计简洁的视图，在数据改变时 React也可以高效的更改渲染界面，
用声明式编写UI,他人那你的代码更加可靠，且方便调试
~~~~

## 组件化
`react 组件封装了html代码，取代了 javascript template 模板，通过扩展HTML元素 整合你的代码`

~~~~
创建好拥有各自的状态组件，再由组件构成更加复杂的用户界面；
无需再用模板代码，通过使用javascript 编写的组件可以更好的传递数据，将应用状态和DOM拆分开来；
~~~~

## jsx
`jsx是 javascript and xml 的简写`

#### 概念
`jsx 类似于xml的javascript的语法扩展`

`xml 指可扩展标记语言 被设计用来传输和存储数据`

`json 写发必xml简单，类似与js对象，以键值对的形式保存`

## 意义
++我们之前创建一个template 模板 想在js中写html 需要通过字符串拼接 ，插入变量的时候需要截断，非常麻烦，而且很容易处错，随后jsx 问世 相比之下 较为方便好用++



---
#### 虚拟Dom 

## 传统操作dom绑定数据的方式及调优 
1. document.createElement()
2. innerHTML 
    
`虚拟dom通过创建虚拟dom与原dom树的比较，插入更新模板 算法 diff算法`

####    `调优思路`
~~~~
通过createElement()创建 appendChild插入  和innerHTML 
的dom频繁的插入节点，导致页面进行大量重绘，性能很差，
我们可以通过document.createCreateFragement() 片段来完成dom 操作一次性插入到节点
~~~~

### 总结

~~~
react 综合渲染性能比较强 
它结合了jsx 以及 diff 算法， 通过虚拟dom与原dom树的比较，替换当前发生变化的数据完成模板的局部更新；

*** 一般情况下 原生实现的渲染性能好，从整体实用性来看,react的diff算法在前段框架中运用比较友好；
~~~
---

### 新版 context 使用方式

> context.js 

```
import React from 'react';

export default React.createContext() // 也可以不用添加默认值

export default React.createContext({ // 此处可以添加默认值
    defaultState: '默认值'
})

```
> parent.js

```
<context.Provider value = {
    {
        changeContext: this.changeContext
    }
}>
    <SonCom msg = { msg }/>
</context.Provider>
```
> sonComponent.js 

```
import React, { Component } from 'react';
import context from '../../../../utils/context'

class GarndSonCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMsg: '我希望你，是我独家的记忆！'
        }
    }
    
    render() {
        let { newMsg } = this.state;
        return (
            <div>
                this is GarndSonCom
                <context.Consumer>
                    {
                        (content) => {
                            return <button onClick = {()=> {
                                content.changeContext(newMsg)
                            }}>change content</button>
                        }
                    }
                </context.Consumer>
            </div>
        );
    }
}

export default GarndSonCom;

```
#### connect 模拟

> connect.js 

> 函数接收一个组件 返回一个操作后的 组件

```
import React from 'react';
import context from './context'

function connect(callback, dispatch){
    return (Components) => {
        return class extends React.Component {
            render() {
                return (
                    <context.Consumer>
                        {
                            (store) => {
                                let res = callback(store)
                                let mapDispatch = (ops) => {
                                    // 可以接受到组件发送的参数执行 然后反会执行结果 在映射到相应组件中即可this.props 访问
                                    return ops;
                                }
                                let ops = dispatch && dispatch(mapDispatch)
                                console.log(ops,'00')
                                return <Components { ...res } { ...ops } />
                            }
                        }
                    </context.Consumer>
                )
            }
        }
    }
}

export default connect;
```
> html 版本

```
 function Connect(callback, ops){ // 接收一个组件 返回一个新的组件
            let obj = {
                'info': {
                    name: '张富贵',
                    age: '24',
                    height: '170'
                }
            }
            let res = callback(obj) // 需要返回的值
            let dispatch = (res) => {
                console.log(res)
            }
            let result = ops(dispatch)
            return (Index) => {
               return class extends React.Component {
                    render() {
                        return (
                            <div>
                                <Index { ...res } { ...result }/>
                            </div>
                        )
                    }
                }
            }
        }
        
        const mapStateToProps = (obj) => {
            return obj['info'] // 此处就相当于 mapStateToProps redux 将参数映射到组件中
        }
        
        const mapDispatchToProps = (dispatch) => {
            return {
                changeName: () => {
                    return dispatch({
                        type: 'CHANGE_NAME',
                        payload: 'this is update user name'
                    })
                }
            }
        }

        let MegDom =  Connect(mapStateToProps, mapDispatchToProps)(Index) // 传入组件;
```



### react 生命周期 

##### 实例化
~~~
- getDefaultProps  获取默认props 属性 此时组件实例化对象还没有被创建出来
- getInitialState  初始化 设置默认状态 经过第二阶段，组件的状态就被创建出来了。因此在这个阶段才有机会为初始化状态赋值。 
ES6不在需要getInitialState方法，而是直接在constructor中直接用this.state即可，更加方便。 
- componentWillMount 实例前 渲染前 
- render 渲染
- componentDidMount 第一次渲染完成dom 组建一家构建完毕
~~~

##### 存在期
~~~ 
- componentWillReceiveProps 当接收到props改变时触发的 第一个参数表示新的属性 生命周期函数 
- shouldComponentUpdate  返回boolean值 true更新 false不更新 判断是否更改状态 更新 参数一表示新的属性 newProps 第二个参数表示状态 newState  
- componentWillUpdate   更新前期  
- render    渲染
- componentDidUpdate  更新完成后 更新完毕
~~~
##### 销毁期
~~~
- componentWillUnmount  卸载 销毁
~~~

> v17 版本后 将删除的 钩子函数 

```
    componentWillMount
    componentWillReceiveProps
    componentWillUpdate
```
> v17 版本后 将添加的 钩子函数 

```
    static getDreivedStateFromProps(nextProps, prevState){}
    getSnapshotBeforeUpdate(prevProps, prevState){}
```

#####  新增函数具体使用方法

## static getSnapshotBeforeUpdate
 
```
    参数
        nextProps
        prevState
    
    static getDreivedStateFromProps(nextProps, prevState){
        if ( nextProps.val !== prevState.val ) { // 如若不全等
            return {
                nextProps.val //返回最新值 
            }
        }
        return null;
    }
    
    返回值  如果返回一个Object，则相当于进行一次setState操作（注意，这里返回对象虽然改变了state，但不会再次触发此函数）
    如果为null，则不更新state
    如果无返回值（即默认return undefined），报错
    如果返回一个基本类型值（如return 666;），则与返回null无区别
    这里需要注意的是：
    
    getDerivedStateFromProps是一个静态方法，this为undefined，不指向实例，所以也拿不到实例的属性和方法。
    至于为什么要将此方法设计为静态方法，官方文档解释：以后的组件将进行异步渲染，
    防止实例属性的被不安全访问，编写出异步兼容的代码
    此方法不提供一个prevProps的参数，官方解释为，首次执行此方法，prevProps是null，
    那么每次调用此方法都要判断一次，很耗性能。其次，如果大家以后都习惯没有prevProps的日子，
    那么react就不保存prevProps的引用了，节省内存，提高性能（心里一万匹***奔腾而过）
    如果要访问prevProps，只能将一些props的属性记录到state里面去了
    不能同上述提到即将要被删除掉的三个生命周期钩子同时使用
    
```

## getSnapshotBeforeUpdate(prevProps, prevState) {}

```
    参数：prevProps, prevState（prevState为上一次更新中getDerivedStateFromProps方法执行后state的值）
    
    
    触发时间：update发生的时候，在render之后，在组件dom渲染之前
    
    返回值可以为任意值，且返回值将作为componentDidUpdate的第三个参数
    这里需要注意的是：
    与componentDidUpdate成对使用，否则会报错
    不能同上述提到即将要被删除掉的三个生命周期钩子同时使用

    getSnapshotBeforeUpdate(prevProps, prevState) { // 此方法的返回值为componentDidUpdate 函数的第三个参数
        return '独家记忆' // 任意值  
    }
    
    // 注 此生命周期钩子函数必须使用componentDidUpdate 结合使用 否则会报警告
    componentDidUpdate(prevProps, prevState, val) {
        val // 独家记忆
    }

```

---

### React组件
---
> 组件可以将ui切分成一些独立的，可复用性的部件，这样你就可以只专注于构建每一个单独的部件

> *组件从概念上看就像是函数，它可以接受任意的输入值（props），并返回一个需要在页面展示的React元素*

### 类定义组件

- import React from 'react'
- import ReactDom from 'react-dom'
       
~~~
    import React from 'react'
    class Sunshine extents React.Component {
        render(){
            <div>Wraper-container</div>
        }
    }
    
    //官方解构写发
    import Reacf,{Component} from 'react';
    class Shushine extends Component {
        render(){
            <div>Wraper-container</div>
        }
    }
~~~

### 函数定义组件 (无状态组件)
> 函数式组件又被称为无状态组件 
~~~
    const Sunshine = (props)=>{
         // 如果容器节点子节有多个，官方建议在容器外包裹（）小括号
        return (
            <div>
                my name is zhangfugui
                <h1>我是标题1</h1>
            </div>
        )
    }
~~~

### 注意事项 
- 无状态组件props不要使用this.props调用父组件传入的参数。只能使用props接受父组件传送的参数
- 无状态组件没有生命周期
- 无状态组件没有this指向
- 无状态组件 组件名不能被 new 实例化
- 组件只能返回一个根容器节点
- 类组件如果显示声明了 constructor 必须调用 super()

### 组件传值

> 传值方式 

## 父子传值

> 通过props传值给子组件

~~~

    import React from 'react';
    
    class ParentCom extends React.Component{
        render(){
            return (
                <ChildrenCom content=[1,2,3,4]/>
            )
        }
    }
    
    class ChildrenCom extends React.Component{
        render(){
        const {content} =this.props;
            return <div>{content}</div>
        }
    }

~~~

## 子父传值 

> 通过父组件传入回调函数 子组件接受 通过arguments传值 父组件接受arg 达到 回调函数 传参 子向父 的方式

~~~

    import React from 'react';
    
    class ParentCom extends React.Component{
        getChildCon(res){
            console.log(res)
        }
        render(){
            return (
                <ChildrenCom getChildCon=this.getChildCon />
            )
        }
    }
    
    class ChildrenCom extends React.Component{
        componentDidMount(){
            const {getChildCon} =this.props;
            getChildCon(){
                return 'hello girl'
            }
        }
        render(){
            return <div></div>
        }
    }

~~~

## 跨级传值

> 方式一: 通过层层传递 祖先组件>父组件>孙子组件； 的方式传值 
> 方式二：context 方式 

> 祖先组件

~~~

    import React from 'react'
    import PropTypes from 'prop-types'
    
    class ParentComponent extends React.Component {
       // 声明Context对象属性
       static childContextTypes = {
         propA: PropTypes.string,
         methodA: PropTypes.func
    }
      
     // 返回Context对象，方法名是约定好的
     getChildContext () {
        return {
          propA: 'propA',
          methodA: () => 'methodA'
        }
     }
      
     render () {
        return <MiddleComponent />
      }
    }
    
~~~
    
> 子组件

~~~

    class MiddleComponent extends React.Component {
      render () {
        return <ChildComponent />
      }
    }
    
~~~
   
> 孙子组件

~~~

    class ChildComponent extends React.Component {
      // 声明需要使用的Context属性
      static contextTypes = {
        propA: PropTypes.string,
        methodA:PropTypes.func
      }
      
      componentDidMount(){
          const {
          propA
        } = this.context
        propA(){
            // 
        }
      }
      
      render () {
      
        const {
          propA
        } = this.context
        
        return (
            this is {propA}
        )
      }
    }

    
~~~

## 同级传值

> events 插件实现同级传参的目的

~~~

    cnpm install events --save

    import EventBus from 'events';
    
    // 发送事件  发布
    sunshine.emit('message','我希望你，是我独家的记忆！')
    
    // 接收事件  订阅
    sunshine.on('message',(res)=>{
        console.log(res)
    })
    
~~~


## redux 通过connect 将组件与仓库链接 详情》后续

> redux 好处 便于状态的管理与运用

---

### redux添加监听

> 当仓库状态改变是，页面数据也需要随着改变，通过subscribe 监听函数数据变化，并绑定到视图 view

~~~
    import store from 'store'
    import React from 'react'
    import ReactDom from 'react-dom'
    
    const template = <div></div>
    const element = document.getElementById('#Sunshine');
    
    const render = ()=> {
        Reacr.render(template,element)
    }
    
    render()
    
    // subscribe 监听函数只能监听一个函数，所以对rnder方法的封装改造
    store.subscribe(render)
    
~~~

##### 组件component与仓库redux 将仓库 与组件 connect 连接！

> 普通连接 

~~~
    
    import {connect} from 'react-redux';
    import React from 'reacr';
    
    class Sunshine extends React.Component {
        render(){
            return <div> my name is sunshine </div>
        }
    }
    
    const mapStateToProps = (state)=> {
        return state;
    }
    
    const mapDispatchToProps = (dispatch) =>{
        return {
            update(){
                dispatch(type:"UPDATE",payload:ops)
            }
        }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Sunshine)

~~~

##### react-redux 扩展

> bindActioncreators 
```
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(listActions, dispatch)
    // return {
    //     changeName() {
    //         dispatch(listActions.changeName())
    //     }
    // }
}
```
##### thunk applyMiddleware


> store.js
```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

let store = createStore(storeReducers,applyMiddleware(thunk))
```
> actions.js

```

export const changeName = (name) => {
    return (dispatch, getstate) =>{ // 返回一个函数
        dispatch({
            type: 'NAME'
        })
    }
}
```



> 装载器 连接 

~~~

    import {connect} from 'react-redux';
    import React from 'reacr';
    
    const mapStateToProps = (state)=> {
        return state;
    }
    
    const mapDispatchToProps = (dispatch) =>{
        return {
            update(){
                dispatch(type:"UPDATE",payload:ops)
            }
        }
    }
    
    @connect(mapStateToProps,mapDispatchToProps)
    
    class Sunshine extends React.Component {
        render(){
            return <div> my name is sunshine </div>
        }
    }
    
    export default Sunshine

~~~

#### 装饰器(装载器) 需要下载插件 并且配置 

> 装饰器 
    
    //decorator （装饰器）是Es7 里面的一个语法糖，作用于类，类属性方法，为他们提供一个实现与业务逻辑无关的功能接口；

## 安装 

~~~
    //babel 6.0
    npm install babel-plugin-trasform-decorator --save
    //babel 7.0
    npm install @babel/plugin-proposal-decorators --save
~~~

## 配置

// .babelrc

~~~
    {
        "plugin":["@babel/plugin-proposal-decorators"]
    }
~~~

---

### 路由 Router

##### 安装
> cnpm install react-router-dom --save

##### 分类
- 历史模式 BrowserRouter 
- 哈希模式 HashRouter

##### withRouter 当前组件内部可以访问路由参数

```
import { withRouter } from "react-router-dom";
export default App(withRouter)
```


##### 注意
> 使用BrowserRouter时，我们需要与后端配合，因为访问路由回想一个真实的url路径，会被后端解析为接口；

> http://localhost:8080/register/sunshine 

> 我们通过react路由配置出这样的一个动态路由时，后端会根据上面地址去找队友的接口荷叶面，没有找到时，会讲范湖一404的错误；

##### 解决方案

~~~
    使用 webpack-dev-server 来mock数据。我们需要开启 配置
    module.exports = {
        devServer:{
            historyApiFallBack:true
        }
    }
~~~

> 后端天记前段路由的过滤白名单 

##### 常用api 
- Route
- Switch
- Link
- NavLink
- this.props.match
- this.props.location
- this.props.history

### 路由设置

##### 

> router.js
```
    
import List from 'components/list'
import Search from 'components/search'

import HotCom from 'components/list/subpage/hot'
import BrandCom from 'components/list/subpage/brand'

export default [
    {
        path: '/list',
        component: List,
        children: [
            {
                path: '/list/hot',
                component: HotCom
            },
            {
                path: '/list/brand',
                component: BrandCom
            },
            {
                path: '/list',
                redirect: '/list/hot'
            }
        ]
    },
    {
        path: '/search',
        component: Search
    },{
        path: '/',
        redirect: '/list'
    }
]
```
> routerView.js 

```
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

class RouterView extends React.Component {
    render() {
        let { router } = this.props,
        isRedirect = router && router.length && router.filter(val => val.redirect),
        RouteRedirect = isRedirect && isRedirect.length && isRedirect.map(val => <Redirect from = {val.path} key={val} to={val.redirect} />);
        return (
            <Switch>
                {
                    router && router.map((v, i) => {
                        return v.component && <Route path={v.path} key={i} render = {(api) => {
                            return <v.component router = { v.children } { ...api }></v.component>
                        }} />
                    }).concat(RouteRedirect)
                }
            </Switch>
        )
    }
}

export default RouterView;
```

> 调用组件 一级
 
```
import RouterView from 'router/routerView'
import routers from 'router/routers'

<RouterView router = { routers } />
```

> 调用组件 子级
 
```
import RouterView from 'router/routerView'

<RouterView router = { this.props.router }/>
```

##### 
~~~
### index.js
    
    import Routers from './routers';

    import React from 'react';
    
    import {BrowserRouter} from 'react-router-dom';
    
    import Maps from './maps';
    
    class RouteView extends React.Component {
        render(){
            const {router}= this.props;
            return <BrowserRouter>
                <Maps router={router?router:Routers}></Maps>
            </BrowserRouter>
        }
    }
    export default RouteView;
    
### maps.js
    
    import {Switch,Route} from 'react-router-dom';

    import React from 'react';
    
    class Maps extends React.Component{
        render(){
            const {router} = this.props;
            return <Switch>
                {
                    router.length && router.map(item=>{
                        return<Route key={item.id} path={item.path} component={()=>{
                            const Component = item.component;
                            const Children = item.children === undefined ? [] : item.children; 
                            return <Component router={Children}></Component>
                        }}></Route>
                    })
                }
            </Switch>
        }
    }
    
    export default Maps;
    
### routers.js
    
    import HomePage from 'view/home';

    import Rank from 'view/rank';
    
    import SubPage from 'view/home/subpage'
    
    const Routers = [
        {
            "path":"/home",
            "id":"001",
            "component":HomePage,
            "name":"home",
            children:[
                {
                    "path":"/home/subpage",
                    "id":"001001",
                    "component":SubPage,
                    "name":"SubPage"
                }
            ]
        },
        {
            "path":"/rank",
            "id":"002",
            "component":Rank,
            "name":"Rank"
        }
    ]
    
    export default Routers;
    
~~~
---

##### 传参

> props.params

~~~
    //设置路由
    const routers = [{
        path:"/user",
        component:User
    },{
        path:"/user/:id",
        component:Detail
    }]
    
    //跳转路由动态传值
    this.props.history.push({
        pathname:"/user/1995"
    })
    
~~~

> props.query

~~~
    //设置路由 query
    const routers = [{
        path:"/user",
        component:User
    },{
        path:"/user/detail",
        component:Detail
    }]
    
    //跳转路由一
    this.props.history.push({
        pathname:"/user/detail",
        query:{
            id:1995
        }
    })
    
    //跳转路由二
    <Link to = {
        {
             pathname:"/user/detail",
             query:{
                 id:1995
             }
        } 
    }
    
    //接受参数 id
    this.props.location.query.id
    
~~~

> props.state

~~~
    
    //设置路由  state
    const routers = [{
        path:"/user",
        component:User
    },{
        path:"/user/detail",
        component:Detail
    }]
    
    //跳转路由一 state
    this.props.history.push({
        pathname:"/user/detail",
        state:{
            id:1995
        }
    })
    
    //跳转路由二
    <Link to = {
        {
             pathname:"/user/detail",
             state:{
                 id:1995
             }
        } 
    }
    
    //接受参数 id
    this.props.location.state.id
    
~~~

---
