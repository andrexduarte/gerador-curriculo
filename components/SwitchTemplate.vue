<template>
  <div class="switch-template">
    <button class="bt-model0" type="button" @click="$emit('switch', 'template1')">
      Modelo 1
    </button>
    <button class="bt-model1" type="button" @click="$emit('switch', 'template2')">
      Modelo 2
    </button>
    
    <ColorPickerComponent />
    
  </div>

</template>


<style lang="scss" scoped>
@use '~/assets/style/_mixins.scss'  as *;

.switch-template {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;

    button {
        cursor: pointer;
    }
}

.bt-model0,
.bt-model1 {
    background-color: #FFF;
    border: 1px solid var(--primary-color);
    font-family: var(--title-font);
    width: 38px;
    height: 38px;
    position: relative;
    font-size: 6px;
    overflow: hidden;
    padding: 0;
    text-transform: uppercase;
    border-radius: 50%;

    
    &::before {
        background-color: var(--primary-color);
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
        background-color: var(--primary-color);
        content: "";
        height: 100%;
        width: 30%;
        top: 0;
        left: 0;
        position: absolute;
    }
}
</style>
