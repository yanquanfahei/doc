# 如何向项目提交代码

如何向项目提交代码，首先需要fork开源项目，然后clone到本地，最后在本地新建分支进行修改，修改完成后push到远程仓库，再发起Pull Request请求，等待项目管理员合并即可。

## 1. 点击链接进去项目主页，点击fork按钮

<figure><img src="/public/pr01.png" alt=""><figcaption></figcaption></figure>
<figure><img src="/public/pr02.png" alt=""><figcaption></figcaption></figure>


## 2. clone项目到本地
进入自己仓库刚刚复制过来的项目，点击复制地址按钮
<figure><img src="/public/pr03.png" alt=""><figcaption></figcaption></figure>

本地新建一个文件夹 如这里我新建了一个 project文件夹，打开vscode选择新建的文件夹，按下ctrl + ~按钮打开命令行，然后输入clone命令

git clone https://github.com/pengzhijian123/vue-fabric-editor.git（这个是刚刚复制的地址）
<figure><img src="/public/pr04.png" alt=""><figcaption></figcaption></figure>


## 3. 链接开源仓库
回到开源项目，点击复制地址按钮

<figure><img src="/public/pr05.png" alt=""><figcaption></figcaption></figure>

在vscode输入remote add命令链接项目 中间的yousetname可以随意命名

<figure><img src="/public/pr06.png" alt=""><figcaption></figcaption></figure>

从链接的开源项目分支拉取代码，此项目分支为main

<figure><img src="/public/pr07.png" alt=""><figcaption></figcaption></figure>

操作完毕后会发现多了一个远程分支，这个就是开源项目的远程分支

<figure><img src="/public/pr08.png" alt=""><figcaption></figcaption></figure>

此时我们的main分支因为是刚刚拉取的开源远程分支，所以代码和开源远程分支是完全一样的，但是有时候开源远程分支会更新导致和我们本地的main分支代码不一样了，此时我们只需要继续执行pull命令即可：

**git pull yousetname main**

<font color=red>注意：本地main分支我们最好要做到时刻和远程的main分支保持一致，以保证后续可以无误的pr代码到远程main分支上，所有的修改都应该在新的分支进行！</font>

## 4. 新建分支

当我们想要修改代码时，第一步先在本地main分支拉取远程开源main分支代码：

**git pull yousetname main**

**然后输入新分支名点击新建分支（此处用的名字为test）**

<figure><img src="/public/pr09.png" alt=""><figcaption></figcaption></figure>

<figure><img src="/public/pr10.png" alt=""><figcaption></figcaption></figure>

## 5. 修改代码

比如我在index.html中新增了一行console.log()代码

<figure><img src="/public/pr11.png" alt=""><figcaption></figcaption></figure>

点击暂存

<figure><img src="/public/pr12.png" alt=""><figcaption></figcaption></figure>

输入修改的内容后点击提交按钮

<figure><img src="/public/pr13.png" alt=""><figcaption></figcaption></figure>

推送(push)修改的内容

<figure><img src="/public/pr14.png" alt=""><figcaption></figcaption></figure>

创建远程分支

<figure><img src="/public/pr15.png" alt=""><figcaption></figcaption></figure>

选择自己的分支（不要选择开源远程分支！！！）

<figure><img src="/public/pr16.png" alt=""><figcaption></figcaption></figure>

提交成功后进入自己的git仓库，进入test分支，此时会发现刚刚改的代码同步更新了

<figure><img src="/public/pr17.png" alt=""><figcaption></figcaption></figure>

## 6. 提交pr

点击pull request按钮

<figure><img src="/public/pr18.png" alt=""><figcaption></figcaption></figure>

点击new pull request按钮

<figure><img src="/public/pr19.png" alt=""><figcaption></figcaption></figure>

将我们的分支选择为刚刚修改的test分支

<figure><img src="/public/pr20.png" alt=""><figcaption></figcaption></figure>

此时有两种情况：

### 6.1 代码和最新的远程main分支没有冲突

确定代码没问题后点击按钮

<figure><img src="/public/pr21.png" alt=""><figcaption></figcaption></figure>

确定标题和描述没问题点击按钮（<font color=red>实验的话别点！！！！！确保是真实修改代码时点！！！！</font>）

<figure><img src="/public/pr22.png" alt=""><figcaption></figcaption></figure>

此时开源项目下就多了一个pr，我们只需要等待开源人审核合并即可

<figure><img src="/public/pr23.png" alt=""><figcaption></figcaption></figure>

### 6.2最新的远程main分支有代码更新，所以导致和我们的代码有冲突

先切换回本地main分支

<figure><img src="/public/pr24.png" alt=""><figcaption></figcaption></figure>

拉取远程开源main分支最新代码

**git pull yousetname main**

<figure><img src="/public/pr25.png" alt=""><figcaption></figcaption></figure>

切换回本地test分支

<figure><img src="/public/pr26.png" alt=""><figcaption></figcaption></figure>

合并本地main分支

<figure><img src="/public/pr27.png" alt=""><figcaption></figcaption></figure>

<figure><img src="/public/pr28.png" alt=""><figcaption></figcaption></figure>

解决代码冲突

<figure><img src="/public/pr29.png" alt=""><figcaption></figcaption></figure>

推送代码到远程test分支

<figure><img src="/public/pr30.png" alt=""><figcaption></figcaption></figure>

重复6.1操作提交pr等待审核合并即可

## 7. 被采纳合并

由于被采纳且合并了，所以保留本地main分支拉取最新远程main分支就行了，下次修改就从main分支中新建新分支再提交pr

### 7.1 删除本地分支

切换回main分支，然后 **git branch -D test**

<figure><img src="/public/pr31.png" alt=""><figcaption></figcaption></figure>

### 7.2 删除远程分支

**git push origin --delete test**

<figure><img src="/public/pr32.png" alt=""><figcaption></figcaption></figure>

## 8. 注意事项

[https://nihaojob.github.io/editorDoc/guide/community.html](https://nihaojob.github.io/editorDoc/guide/community.html)
注意事项总结：

1. 改bug别重复
2. commit要规范
3. pr信息要清晰


