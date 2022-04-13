## 无限滚动 瀑布流列表组件

###### [egjs-infinitegrid doc](https://naver.github.io/egjs-infinitegrid/)

###### [@egjs/react-infinitegrid](https://www.npmjs.com/package/@egjs/react-infinitegrid)

## 瀑布流插件

###### [react-masonry-css](https://www.npmjs.com/package/react-masonry-css)

###### [react-masonry-css demo](https://paulcollett.github.io/react-masonry-css/demo/)

## 图片懒加载

###### [use-native-lazy-loading](https://www.npmjs.com/package/@charlietango/use-native-lazy-loading)

###### [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)

###### [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

> @charlietango/use-native-lazy-loading 和 react-intersection-observer 相结合以创建延迟加载图像的示例
> yarn add @charlietango/use-native-lazy-loading react-intersection-observer

```tsx
import React from 'react';
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ width, height, src, ...rest }) => {
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    skip: supportsLazyLoading !== false,
  });

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        paddingBottom: `${(height / width) * 100}%`,
        background: '#2a4b7a',
      }}
    >
      {inView || supportsLazyLoading ? (
        <img
          {...rest}
          src={src}
          alt="Placeholder kitten"
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      ) : null}
    </div>
  );
};

export default LazyImage;
```

## 虚拟组件懒加载

###### 项目 Github 地址： https://github.com/xunleif2e/vue-lazy-component

```
import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'

```

## 虚拟列表渲染

```
vue-virtual-scroll-list
```

## 上传文件夹

#### 文档地址：https://blog.csdn.net/eieiei438/article/details/91865705

```
 Vue使用vue-simple-uploader
```

## VueStar 带星星的点赞按钮

## vue-clipboard ★84 - VueJS 的剪贴板

---

### 实用且强大的 css 动画库们

## Animista

#### Animista 是一个在线动画生成器，同时也是一个动画库，它为我们提供了以下功能

```
**网站地址:**animista.net/
```

### Animate CSS

#### Animate CSS 可能是最著名的动画库之一。

```
**网站地址:**daneden.github.io/animate.css
```

## Vivify

#### 一个更加丰富 css 动画库

```
网站地址: vivify.mkcreative.cz/
```

## Magic Animations CSS3

#### Magic CSS3 Animations 是 CSS3 动画的包，伴有特殊的效果，用户可以自由的在 web 项目中使用。

```
网站地址: www.minimamente.com/project/mag…
```

## cssanimation.io

#### cssanimation.io 是一大堆不同动画的集合，总共大概有 200 个，这很强大。如果你连在这里都没有找到你所需的动画，那么在其它也将很难找到。

```
网站地址: cssanimation.io/index.html
```

## Angrytools

```
网站地址: angrytools.com/css/animati…
```

```
如果使用不同的生成器，Angrytools实际上是一个集合，其中还包括CSS动画生成器。
它可能不像Animista那么复杂，但我觉得这个也很不错。这个站点还提供了一些自定义动画的特性，比如动画的持续时间或延迟。
但是我喜欢的是，我们可以在其展示时间轴上添加自定义的keyframes，然后可以直接在其中编写代码。 另外，也可以编辑现有的。
```

## Hover.css

```
网站地址: ianlunn.github.io/Hover/ 网站描述:
```

```
 纯CSS3鼠标滑过效果动画库

Hover.css是许多CSS动画的集合，与上面的动画不同，每次将元素悬停时都会触发。
```

## WickedCSS

```
网站地址: kristofferandreasen.github.io/wickedCSS/#
```

```
WickedCSS是一个小的CSS动画库，它没有太多的动画变体，但至少有很大的变化。 其中大多数是我们已经熟悉的基础知识，但它们确实很干净。
它的用法很简单，只需将动画的名称添加到元素中即可。
```

## Three Dots

```
网站地址: nzbin.github.io/three-dots/…
```

```
Three Dots是一组CSS加载动画，它由三个点组成，而这些点仅由单个元素组成。

** 用法

只需创建一个div元素，并添加动画的名称

<div class="dot-elastic"></div>
```

## CSShake

```
网站地址: elrumordelaluz.github.io/csshake/
```

```
顾名思义，CSShake是一个CSS动画库，其中包含不同类型的震动动画。
```
