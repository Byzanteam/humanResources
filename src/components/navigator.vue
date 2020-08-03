<template>
  <div
    v-if="show"
    class="navigation navigation__mask"
    @click="close"
  >
    <div class="navigation__content">
      <div
        ref="list"
        class="navigation__list"
        v-for="list in listData"
        :key="list.name"
      >
        <div class="navigation__list__title">
          <div class="navigation__list__title__text">
            {{list.name}}
          </div>
          <div class="navigation__list__title__icon">
            <img src="/hxrc/images/card-title.jpg">
            <div class="navigation__list__title__icon__line"></div>
          </div>
        </div>
        <div class="navigation__list__content">
          <router-link
            v-for="item in list.items"
            :to="item.path"
            :key="item.label"
            class="navigation__list__item"
          >
            {{item.label}}
          </router-link>
        </div>
      </div>
      <img src="/hxrc/images/bg-adorn-small-left.png" :style="{position: 'absolute', left: '48px', top: '325px', width: '41px', height: '430px', zIndex: 101}"/>
      <img src="/hxrc/images/bg-adorn-left.png" :style="{position: 'absolute', left: '100px', top: '250px', width: '78px', height: '580px', zIndex: 101}"/>
      <img src="/hxrc/images/bg-adorn-small-right.png" :style="{position: 'absolute', left: '1831px', top: '325px', width: '41px', height: '430px', zIndex: 101}"/>
      <img src="/hxrc/images/bg-adorn-right.png" :style="{position: 'absolute', left: '1742px', top: '250px', width: '78px', height: '580px', zIndex: 101}"/>
    </div>
  </div>
</template>

<script>
const LIST = [
  {
    name: '人才资源态势感知平台',
    items: [
      {
        path: '/resources',
        label: '人才资源综合驾驶舱'
      },
      {
        path: '/supply',
        label: '人才供需专题'
      },
      {
        path: '/introduction',
        label: '人才引进专题'
      },
      {
        path: '/key-talents',
        label: '重点人才专题'
      },
      {
        path: '/talents-competitiveness',
        label: '省域人才综合竞争力'
      },
      {
        path: '/highTalents',
        label: '高端人才统计'
      }
    ]
  },
]
export default {
  data() {
    return {
      listData: LIST,
      show: false
    }
  },

  updated() {
    const { list } = this.$refs
    setTimeout(() => {
      list.forEach(item => {
        item.style.transform = 'scale3d(1, 1, 1)'
      })
    }, 500);

  },

  methods: {
    close() {
      this.show = false
    },

    open() {
      this.show = true
    }
  }

}
</script>

<style lang="scss" scoped>
.navigation {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    -webkit-filter: blur(15px);
    backdrop-filter: blur(15px);
    background: rgba(0, 0, 0, .1);
    background-size: 100% 100%;
    position: absolute;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__list {
    width: 430px;
    height: 720px;
    top: 180px;
    position: absolute;
    background-image: url('/hxrc/images/card-bg-430_367.png');
    background-size: 100% 100%;
    overflow: hidden;
    transform-origin: top;
    transform: scale3d(0, 0, 0);
    transition: all .1s;
    animation: open .3s ease-in .3s;

    &:nth-child(1) {
      left: 745px;
    }

    &:nth-child(2) {
      left: 745px;
    }

    &:nth-child(3) {
      left: 1235px;
    }
  }

  @keyframes open {
    from {
      top: 540px;
      transform: scale3d(1, 0, 0);
    }
    to {
      top: 180px;
      transform: scale3d(1, 1, 1);
    }
  }

  .navigation__list:first-child {
    left: 745px;
  }

  &__list__title {
    display: flex;
    width: 376px;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 24px;
  }

  &__list__title__text {
    color: rgb(106, 214, 255);
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    line-height: 1;
    letter-spacing: 0.9px;
    margin-right: 16px;
  }

  &__list__title__icon {
    display: flex;
    flex-grow: 1;
    align-items: flex-end;

    img {
      width: 55px;
      height: 11px;
    }
  }

  &__list__title__icon__line {
    flex-grow: 1;
    border-bottom: 1px solid #308EBD;
    opacity: .4;
  }

  &__list__content {
    position: absolute;
    top: 120px;
    left: 50px;
  }

  &__list__item {
    background-image: url('/hxrc/images/btn-nav-default.png');
    background-size: 100% 100%;
    height: 48px;
    width: 330px;
    display: block;
    text-align: center;
    line-height: 48px;
    margin-bottom: 36px;
    font-size: 20px;
    color: #ffffff;
    font-weight: 600;

    &.router-link-active,
    &:hover {
      background-image: url('/hxrc/images/btn-nav-hover.png');
    }
  }
}
</style>
