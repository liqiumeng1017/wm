<template>
  <div>
    <div :class="{screen: focus}">
      <div class="top">
        <div class="bg" :style="bgOpacSty" v-show="!focus"></div>
        <div class="bg1" v-show="focus"></div>
        <div class="main-head">
          <div class="left logo" v-show="!focus"></div>
          <div class="left back" v-show="focus" @click="goBackEvent"></div>
          <div class="center">
            <input type="text" :class="{border: focus}" @focus="handleFocus" v-model="inputText"/>
          </div>
          <div class="right" v-show="!focus">登录</div>
          <div class="right search" v-show="focus"></div>
        </div>
      </div>
      <div class="main" v-show="focus">
        <div class="title">热门搜索</div>
        <img :src="searchImg">
        <ul>
          <li v-for="item in hotWord" @click="inputFillEvent(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="load" ref="loading" id="load"></div>
  </div>

</template>

<script>
  import data from '../../../static/index.json';
  export default {
    props: ['opac'],
    data () {
      return {
        focus: false,
        inputText: '',
        hotWord: ['红米4 超长续航', '小米Note 2', '小米5s', '笔记本', '小米电视3s', '智能电饭煲'],
        bgOpacSty: {
          opacity: 0
        },
        searchImg: ''
      };
    },
    created () {
      this.searchImg = data.searchImg;
    },
    watch: {
      opac () {
        this.bgOpacSty.opacity = this.opac;
      }
    },
    methods: {
      handleFocus () {
        this.focus = true;
        this.$emit('searchEvent', true);
      },
      goBackEvent () {
        this.focus = false;
        this.$emit('searchEvent', false);
      },
      inputFillEvent (word) {
        this.inputText = word;
      }
    }
  };
</script>

<style lang="less" scoped>
  .screen {
    width: 100%;
    height: 100%;
    background: #fff;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .absolute100 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .main {
    width: 100%;
    margin: 40px 0 0 0;
    .title {
      line-height: 40px;
      font-size: 12px;
      color: #333;
      text-indent: 20px;
    }
    img {
      width: 100%;
    }
    ul {
      padding: 0 10px;
      li {
        list-style-type: none;
        font-size: 12px;
        padding: 8px 10px;
        margin: 5px;
        display: inline-block;
        background: #F8F2EC;
        border: 1px solid #FAC288;
      }
    }
  }

  .top {
    font-family: "Microsoft YaHei";
    width: 100%;
    height: 40px;
    font-size: 0;
    position: fixed;
    color: #fff;
    .main-head {
      .absolute100;
    }
    .bg {
      .absolute100;
      background: #ff6700;
    }
    .bg1 {
      .absolute100;
      background: #efefef;
    }
    &.focus {
      background: #f5f5f5;
      color: #888;
    }
    .left {
      width: 15%;
      line-height: 40px;
      font-size: 0;
      text-align: center;
      display: inline-block;
      &.logo {
        width: 15%;
        height: 40px;
        background: url("../../../static/images/svg/mi.svg") no-repeat center center;
        background-size: 30px;
      }
      &.back {
        width: 15%;
        height: 40px;
        background: url("../../../static/images/svg/back.svg") no-repeat center center;
        background-size: 20px;
      }
    }
    .headIcon {
      height: 30px;
      width: 30px;
    }
    .center {
      width: 70%;
      font-size: 16px;
      display: inline-block;
      vertical-align: top;
      input {
        width: 100%;
        line-height: 30px;
        height: 30px;
        background: #fff;
        border: none;
        padding: 0;
        margin: 5px 0 0 0;
        outline: none;
        text-indent: 10px;
        &.border {
          box-sizing: border-box;
          border: 1px solid #dedede;
        }
      }
    }
    .right {
      width: 15%;
      font-size: 16px;
      display: inline-block;
      line-height: 40px;
      text-align: center;
      margin: -1px 0 0 0;
      vertical-align: top;
      padding: 0;
      &.search {
        width: 15%;
        height: 40px;
        background: url("../../../static/images/svg/search.svg") no-repeat center center;
        background-size: 20px;
      }
    }
  }
</style>
