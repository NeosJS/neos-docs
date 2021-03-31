<template>
  <RouterLink
    class="btn-link"
    :to="link"
  >
  <slot></slot>
  </RouterLink>
</template>

<script>
export default {
  name: 'BtnLink',
  props: {
    link: {
      required: true
    }
  },
}
</script>

<style lang="scss">
.btn-link{
  display: block;
  border-top:1px solid rgba(0,0,0,.05);
  margin: 0 -.5rem -0.5rem -0.5rem;
  padding:1rem;
  text-align: center;
  transition: all .5s;
  color:#505050;
  background:#fff;
  &:hover{
    background:#638cec;
    color:#fff
  }
}
</style>
