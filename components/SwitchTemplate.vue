<template>
  <div class="switch-template">
    <button class="bt-model0" type="button" @click="$emit('switch', 'template1')">Modelo 1</button>
    <button class="bt-model1" type="button" @click="$emit('switch', 'template2')">Modelo 2</button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '~/assets/style/_mixins.scss';

.switch-template {
    position: absolute;
    top: 20px;
    z-index: 10;
    right: 20px;

    button {
        cursor: pointer;
    }

    @include breakpoint(sm) {
      display: none;
    }
}

.bt-model0,
.bt-model1 {
    border: 1px solid hsl(0, 0%, 0%, .4);
    border-radius: 10px;
    width: 38px;
    height: 38px;
    position: relative;
    font-size: 6px;
    overflow: hidden;
    padding: 0;
    margin: 0 5px;
    
    &::before {
        background-color: hsla(9, 35%, 47%, 0.4);
        content: "";
        height: 30%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
    }
}

.bt-model1 {
    &::before {
        background-color: hsla(9, 35%, 47%, 0.4);
        content: "";
        height: 100%;
        width: 30%;
        top: 0;
        left: 0;
        position: absolute;
    }
}
</style>
