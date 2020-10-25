<template>
  <SWUpdatePopup>
    <div v-if="enabled" slot-scope="{ enabled, reload, message, buttonText }" class="sealui-update-popup">
      <p>{{ message }}</p>
      <button class="btn" @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style lang="scss" scoped>
.sealui-update-popup {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  text-align: center;
  z-index: 2;
  position: fixed;
  bottom: 1em;
  right: 1em;
  background-color: #fff;
  font-size: 1rem;
  padding: 1em 3em;
  border: 0px solid #e5e5e5;
  border-radius: 0.3rem;
  color:#fff;
  background-image: linear-gradient(to right, #0097e6, #14d4f4);
  p{
    padding:0;
    margin:0
  }
}

.sealui-update-popup button {
  margin-top: 1.5em;
}
.btn{
  display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #fff;
    color: #0097e6;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
</style>
