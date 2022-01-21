## 开发中产品的各版本定义(beta,alpha,rc,release)

1. alpha(内部测试版) 一般不向外部发布,会有很多 Bug.除非你也是测试人员,否则不建议使用.是希腊字母的第一位,表示最初级的版本，alpha 就是 α，beta 就是 β ，alpha 版就是比 beta 还早的测试版，一般都是内部测试的版本。

2. beta(外部测试版) 该版本相对于 α 版已有了很大的改进，消除了严重的错误，但还是存在着一缺陷，需要经过多次测试来进一步消除。这个阶段的版本会一直加入新的功能。

3. RC：(Release Candidate) Candidate 是候选人的意思，用在软件上就是候选版本。Release.Candidate.就是发行候选版本。和 Beta 版最大的差别在于 Beta 阶段会一直加入新的功能，但是到了 RC 版本，几乎就不会加入新的功能了，而主要着重于除错! RC 版本是最终发放给用户的最接近正式版的版本，发行后改正 bug 就是正式版了，就是正式版之前的最后一个测试版。

4. GA：（general availability） 比如：Apache Struts 2 GA 这是 Apache Struts 2 首次发行稳定的版本，GA 意味着 General Availability，也就是官方开始推荐广泛使用了。
   R1. elease 该版本意味“最终版本”，在前面版本的一系列测试版之后，终归会有一个正式版本，是最终交付用户使用的一个版本。该版本有时也称为标准版。一般情况下，Release 不会以单词形式出现在软件封面上，取而代之的是符号(R)。

### `发布版本`

> 更新版本号共有以下选项（major | minor | patch | premajor | preminor | prepatch | prerelease) ，注意项目的 git status 必须是 clear，才能使用这些命令。

```js
# major 主版本号，并且不向下兼容  1.0.0 -> 2.0.0
$ npm version major

# minor 次版本号，有新功能且向下兼容  1.0.0 -> 1.1.0
$ npm version minor

# patch 修订号，修复一些问题、优化等  1.0.0 -> 1.0.1
$ npm version patch

# premajor 预备主版本  1.0.0 -> 2.0.0-0
$ npm version premajor

# preminor 预备次版本  1.0.0 -> 1.1.0-0
$ npm version major

# prepatch 预备修订号版本  1.0.0 -> 1.0.1-0
$ npm version major

# prerelease 预发布版本  1.0.0 -> 1.0.0-0
$ npm version major


版本号更新后，我们就可以进行版本的发布

$ npm publish


```

### `预发布版本`

> 很多时候一些新改动，并不能直接发布到稳定版本上（稳定版本的意思就是使用 npm install demo 即可下载的最新版本），这时可以发布一个 “预发布版本“，不会影响到稳定版本。

```js
# 发布一个 prelease 版本，tag=beta
$ npm version prerelease
$ npm publish --tag beta

```

> 比如原来的版本号是  1.0.1，那么以上发布后的版本是  1.0.1-0，用户可以通过  npm install demo@beta  或者  npm install demo@1.0.1-0  来安装，用户通过 npm install demo 安装的还是 1.0.1 版本。

### `将 beta 版本设置为稳定版本`

> 首先可以查看当前所有的最新版本，包括 prerelease 与稳定版本

```

$ npm dist-tag ls
```

### `设置 1.0.1-1 版本为稳定版本`

```
$ npm dist-tag add demo@1.0.1-1 latest
这时候，latest 稳定版本已经是 1.0.1-1 了，用户可以直接通过 npm install demo 即可安装该版本。
```

### `将 beta 版本移除`

```
$ tnpm dist-tag rm demo beta
1.3.5、将 tag 推送到 Git 远程仓库中
```

### `当我们发布完对应的版本，可以通过以下命令将版本号推送到远程仓库, 其中 xxx 为对应分支`

```js
$ git push origin xxx --tags
1.4、查看版本信息
可以通过 npm info 来查看模块的详细信息。
​

$ npm info
```
