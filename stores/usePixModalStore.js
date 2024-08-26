import { defineStore } from 'pinia'

export const usePixModalStore = defineStore('pixModal', {
  state: () => ({
    isVisible: false,
    pixKey: 'suachave@pix.com',
  }),
  actions: {
    showModal(key = null) {
      this.pixKey = key || this.pixKey
      this.isVisible = true
    },
    closeModal() {
      this.isVisible = false
    },
  }
})
