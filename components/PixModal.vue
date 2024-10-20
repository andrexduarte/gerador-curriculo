<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h3>Considere fazer uma doação via PIX para apoiar este projeto.</h3>
      <div class="pix-details">
        <p>Chave PIX: {{ pixKey }}</p>
        <img :src="qrCodeUrl" alt="QR Code PIX" class="qr-code">
        <button @click="copyPixKey">Copiar Chave</button>
      </div>
      <button class="close-button" @click="printAndClose">Gerar PDF</button>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import { usePixModalStore } from '~/stores/usePixModalStore'
import { watch } from 'vue'

export default {
  data() {
    return {
      qrCodeUrl: ''
    }
  },
  computed: {
    isVisible() {
      return this.pixModalStore.isVisible
    },
    pixKey() {
      return this.pixModalStore.pixKey
    }
  },
  methods: {
    async generateQRCode() {
      try {
        this.qrCodeUrl = await QRCode.toDataURL(this.pixKey)
      } catch (error) {
        console.error("Erro ao gerar o QR Code:", error)
      }
    },
    closeModal() {
      this.pixModalStore.closeModal()
    },
    printAndClose() {
      this.closeModal()
      window.print()
    },
    copyPixKey() {
      navigator.clipboard.writeText(this.pixKey).then(() => {
        alert('Chave PIX copiada!')
      })
    }
  },
  mounted() {
    // Observe changes in pixKey and generate QR Code accordingly
    watch(() => this.pixModalStore.pixKey, this.generateQRCode, { immediate: true })
  },
  setup() {
    const pixModalStore = usePixModalStore()
    return { pixModalStore }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/style/_mixins.scss'  as *;

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @include print {
    display: none;
  }

  h3 {
    margin: 0 0 10px;

  }

  p {
    margin: 0 0 10px;
  }
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 290px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.pix-details {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  .qr-code {
    width: 150px;
    height: 150px;
    margin: 10px 0;
  }

  button {
    background-color: hsla(120, 35%, 47%, 1);
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: hsla(120, 35%, 47%, 0.8);
    }
  }
}

.close-button {
  background-color: var(--primary-color);
  color: #000;
  padding: 10px 15px 10px 15px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
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