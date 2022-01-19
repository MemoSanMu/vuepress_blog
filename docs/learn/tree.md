## 在 README.md 中生成项目目录结构

> 生成项目的目录结构
> 系统：macOS Mojave Version 10.14.2(18c54)

```
步骤：
1.使用 Homebrew 安装 tree

	// $ 表示这是一个命令行，$ 不需要输入
	  $ brew install tree

2.使用 tree 在控制台生产当前目录树 > tree.text

	// 因为实例项目为 js 项目，所以忽略了 node_modules，可根据真实项目选择性忽略文件目录，防止文件树过长
	$ tree -I node_modules > tree.text

3.复制目录树文本到 README.md 中
```
