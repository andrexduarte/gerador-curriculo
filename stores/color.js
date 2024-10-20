import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', {
  state: () => ({
    selectedColor: '#ebebeb' // Cor inicial
  }),
  actions: {
    setColor(newColor) {
      this.selectedColor = newColor
    }
  }
})
