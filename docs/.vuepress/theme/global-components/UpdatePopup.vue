<template>
  <SWUpdatePopup>
    <div v-if="enabled" slot-scope="{ enabled, reload, message, buttonText }" class="sealui-update-popup">
      {{ message }}<br />
      <sc-button type="primary" size="small" @click="reload">{{ buttonText }}</sc-button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style>
.sealui-update-popup {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  text-align: center;
  z-index: 2;
  position: fixed;
  bottom: 1em;
  right: 1em;
  background-color: #fff;
  font-size: 1rem;
  padding: 1em;
  border: 1px solid #e5e5e5;
  border-radius: 0.3rem;
}

.sealui-update-popup button {
  margin-top: 0.8em;
}
</style>
