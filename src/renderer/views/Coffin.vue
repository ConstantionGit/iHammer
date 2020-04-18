<!--
 * @Author: Const
 * @Date: 2020-04-18 19:07:50
 * @LastEditors: Const
 * @LastEditTime: 2020-04-18 22:59:23
 * @Description: 
 * @FilePath: \i-hammer\src\renderer\views\Coffin.vue
 -->
<template>
  <div id="coffin">
    <el-container class="base-container">
      <el-header>
        <div class="user-avatar">
          <el-image
            id="avatar"
            :src="require('@/assets/base-user-icon.jpg')"
            style="width: 50px; height: 50px;background-color:red;"
            fit="fill"
          ></el-image>
        </div>
      </el-header>
      <el-container>
        <el-aside class="menu">
          <el-menu
            default-active="TODO"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="menu.isCollapse"
          >
            <el-menu-item index="TODO">
              <i class="el-icon-check"></i>
              <span slot="title">TODO</span>
            </el-menu-item>
            <el-menu-item index="POMODORO">
              <i class="el-icon-s-grid"></i>
              <span slot="title">POMODORO</span>
            </el-menu-item>
            <el-menu-item index="CALENDAR">
              <i class="el-icon-date"></i>
              <span slot="title">CALENDAR</span>
            </el-menu-item>
            <el-menu-item index="SPARK">
              <i class="el-icon-share"></i>
              <span slot="title">SPARK</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <el-row class="base-row" v-if="1==2">
      <el-col :span="4" class="menu">
        <el-menu
          default-active="TODO"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="menu.isCollapse"
        >
          <el-menu-item index="TODO">
            <i class="el-icon-check"></i>
            <span slot="title">TODO</span>
          </el-menu-item>
          <el-menu-item index="POMODORO">
            <i class="el-icon-s-grid"></i>
            <span slot="title">POMODORO</span>
          </el-menu-item>
          <el-menu-item index="CALENDAR">
            <i class="el-icon-date"></i>
            <span slot="title">CALENDAR</span>
          </el-menu-item>
          <el-menu-item index="SPARK">
            <i class="el-icon-share"></i>
            <span slot="title">SPARK</span>
          </el-menu-item>
        </el-menu>
        <!-- <div
          class="menu-collapse-ctrl"
          v-if="!menu.isCollapse"
          @click="menu.isCollapse=!menu.isCollapse"
          style="width:calc(100% - 1px)"
        >
          <i class="el-icon-arrow-left"></i>
        </div>
        <div
          class="menu-collapse-ctrl"
          v-if="menu.isCollapse"
          @click="menu.isCollapse=!menu.isCollapse"
          style="width:64px;"
        >
          <i class="el-icon-arrow-right"></i>
        </div>-->
      </el-col>
      <el-col :span="20" class="main">
        <system-information></system-information>
      </el-col>
    </el-row>
    <!-- <el-row class="base-row" :gutter="10" v-if="1==2">
      <el-col :span="12" class="menu-item">TODO</el-col>
      <el-col :span="12" class="menu-item">POMODORO</el-col>
      <el-col :span="12" class="menu-item">CALENDAR</el-col>
      <el-col :span="12" class="menu-item">SPARK</el-col>
    </el-row>

    <div class="menu-block">TODO</div>
    <div class="menu-block">POMODORO</div>
    <div class="menu-block">CALENDAR</div>
    <div class="menu-block">SPARK</div>-->
  </div>
</template>

<script>
import SystemInformation from "../components/LandingPage/SystemInformation";
export default {
  name: "coffin",
  components: { SystemInformation },
  data() {
    return {
      menu: {
        isCollapse: true
      }
    };
  },
  methods: {}
};
</script>

<style lang="less">
#coffin {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100%;
  width: 100%;
  > .base-container {
    height: 100%;
    > .el-header {
      background-color: #545c64;
      height: 50px !important;
    }
    > .el-container {
      height: 100%;
      > .el-aside {
        height: 100%;
        width: 65px !important;
        > .el-menu {
          background-color: #545c64;
          height: 100%;
        }
      }
    }
  }
  > .base-row {
    height: 100%;
    > .menu {
      height: calc(100% - 40px);
      > .el-menu {
        height: 100%;
      }
    }
    .menu-collapse-ctrl {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      background-color: #545c64;
      color: #ffd04b;
      text-align: center;
    }
    /* 
    > .menu-item {
      height: calc(50% - 5px);
      line-height: calc(50% - 5px);
      text-align: center;
    }
    > .menu-item:hover {
      background-color: red;
    } */
  }
  /*  > .menu-block {
    cursor: pointer;
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  } */
}
</style>