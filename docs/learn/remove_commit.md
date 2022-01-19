## git 删除历史 commit

> 因为平时的技术点笔记都总结在了 github 上面，随着知识点的累积，代码体积也越来越大。最近在整理笔记，重新 clone 了这个工程，等了很久才克隆到本地。于是打算通过删除历史 commit，尝试减轻一些代码体积。（也就是说只保留当前版本，不可能再回滚）

> 操作方法：首先创建一个新分支 newBranch，然后将 master 分支删除，再将当前分支 newBranch 重命名为 master，再强制 push 到远程仓库即可。

具体操作流程如下：

```
一、创建新分支：
git checkout --orphan newBranch
二、添加所有文件：
git add -A
三、提交更改：
git commit -am "message"
四、删除主分支：
git branch -D master
五、重命名当前分支：
git branch -m master
六、强制提交：
git push -f origin master
以上即为git删除历史commit的实践方案。
```
