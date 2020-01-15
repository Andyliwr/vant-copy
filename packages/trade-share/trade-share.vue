<!-- 交易分享组件 -->
<template>
  <div ref="share" class="trade-share">
    <transition name="fade">
      <div class="trade-share__overlay" v-show="visable" @click.self="clickOverlay"></div>
    </transition>
    <transition name="slide">
      <div class="trade-share__content" v-show="visable">
        <div class="trade-share__item" v-for="item in shareItems" :key="item.key">
          <div :class="{ 'trade-share__item_img': true, [item.class]: true }"></div>
          <p class="trade-share__item_text" v-if="item.name">{{ item.name }}</p>
          <p class="trade-share__item_desc" v-if="item.desc">{{ item.desc }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const ITEMS = [
  {
    key: "Wechat",
    name: "微信好友",
    class: "trade-share__weixin",
    function: "shareToWxFriend"
  },
  {
    key: "HaoWuQuan",
    name: "推荐到好物圈",
    desc: "让朋友知道你的品味～",
    class: "trade-share__haowuquan",
    function: "shareToHaoWuQuan"
  },
  {
    key: "Haibao",
    name: "生成分享海报",
    class: "trade-share__haibao",
    function: "shareToWxFriend"
  }
];

export default {
  props: {
    visable: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    clickOverlayClose: {
      type: Boolean,
      default: true
    },
    beforeClose: Function,
    items: {
      type: Array,
      default: () => ["Wechat", "HaoWuQuan", "Haibao"]
    }
  },
  name: "TradeShare",
  data: function() {
    return {
      closed: false
    };
  },
  computed: {
    shareItems() {
      return this.items
        .map(item => {
          let result = null;
          for (let i = 0; i < ITEMS.length; i++) {
            if (ITEMS[i].key === item) {
              result = ITEMS[i];
              break;
            }
          }
          return result;
        })
        .filter(item => item);
    }
  },
  watch: {
    visable(val) {
      if (val) {
        this.$emit("open");
        this.closed = false;
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        if (!this.closed) this.$emit("close");
      }
    }
  },
  methods: {
    clickOverlay() {
      if (!this.clickOverlayClose) return;
      this.hide();
    },
    handleClose() {
      if (typeof this.beforeClose === "function") {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit("close");
        this.closed = true;
      }
    }
  },
  mounted() {
    if (this.visable) {
      this.rendered = true;
      // this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },
  destroyed() {
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>
