<template>
  <div>
    <button @click="showPixModal" type="button">
      Gerar PDF
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="button-icon" fill="black">
        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
    </button>
  </div>
</template>

<script>
import { usePixModalStore } from '~/stores/usePixModalStore'

export default {
  methods: {
    showPixModal() {
      const pixModalStore = usePixModalStore()
      pixModalStore.showModal('andrexduarte@gmail.com')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/_mixins.scss';

button {
  background-color: var(--primary-color);
  color: black;
  padding: 10px 15px 10px 15px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px 40px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  transition: all .4s ease;
  z-index: 5;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  justify-content: center;
  @include print {
    display: none;
  }
}

button:hover {
  background-color: var(--primary-color-hover);
}

.button-icon {
  margin-left: 10px;
  width: 18px;
}
</style>