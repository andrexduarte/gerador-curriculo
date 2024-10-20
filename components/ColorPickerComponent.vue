<template>
  <div>
    <ColorPicker v-model="color" inputId="cp-hex" format="hex" @change="updateColor" />

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useColorStore } from '~/stores/color'
import ColorPicker from 'primevue/colorpicker'

const colorStore = useColorStore()

// Computa o valor da cor diretamente da store
const color = computed({
  get: () => colorStore.selectedColor,
  set: (value) => {
    colorStore.setColor(value)
  }
})

const updateColor = () => {
}
</script>

<style lang="scss" scoped>

.p-colorpicker :deep(.p-colorpicker-preview) {
  background-image: url(/assets/images/paleta-de-cores.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 22px 18px;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
}
</style>