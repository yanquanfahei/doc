<!--.vitepress/theme/Sponsor.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-bottom>
      <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=nengneng.CVCode" class="vscodePlug">
        <img src="/public/vscode-logo.png" alt="">
        <div>
          <p class="title">
            VSCode 插件推荐
          </p>
          <p class="describe">
            轻松管理代码片段
          </p>
        </div>
        <span class="identification">赞助</span>
      </a>
    </template>
  </Layout>
</template>

<style>
.vscodePlug{
  padding: 20px 5px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #f4f8fa;
  border-radius: 12px;
}
.vscodePlug .identification{
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 11px;
  line-height: 11px;
  color: #a6b7bf;
}
.vscodePlug img{
  width: 40px;
}
.vscodePlug div{
  margin-left: 10px;
}
.vscodePlug div p{
  margin: 0;
  line-height: 1rem;
  text-align: center;
  font-weight: bold;
  text-wrap: nowrap;
}
.vscodePlug div p.title{
  color: #000;
  font-size: 14px;
}
.vscodePlug div p.describe{
  margin-top: 6px;
  font-size: 16px;
  color: #028fd6;
}
.vscodePlug:hover .describe{
  text-decoration: underline;
}
</style>