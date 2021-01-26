<template>
  <div class="windows-scratchable">
    <div
      class="box box-windows box-scratchable flex items-center overflow-hidden"
    >
      <div class="loading" :class="[showLoading ? 'hidden' : '']">
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="box-content-inside">
        <Scratchable
          v-slot="{ init }"
          :brushOptions="brush"
          :hideOptions="hide"
          getPercentageCleared
          @percentage-update="updatePoints"
          ref="scratchable"
        >
          <div class="wrapper gift-wrapper">
            <img
              :src="require('~/static/images/fondo_revel.jpg')"
              @load="init()"
            />
            <h3>{{ gift }}</h3>
          </div>
        </Scratchable>
      </div>
    </div>
    <!-- <div class="btn-group mt-10" :style="{ height: '44px' }">
      <a class="btn btn-custom" @click="$emit('next')" v-if="showButtonNext"
        >Continuar</a
      >
    </div> -->
  </div>
</template>

<script>
import paperPattern from '~/static/images/fondo_pareja_normal_raspa_aqui.jpg'
import party from 'party-js'

export default {
  props: {
    gift: {
      type: String,
      default: 'Ganaste Una doble malta',
    },
  },
  data() {
    return {
      percentage: 0,
      hide: {
        type: 'pattern',
        src: paperPattern,
        repeat: 'no-repeat',
      },
      brush: {
        size: 60,
        shape: 'round',
      },
      showButtonNext: false,
      showLoading: false,
    }
  },
  methods: {
    updatePoints(percentage) {
      let t = this
      this.percentage = percentage
      let siteColors = ['#ffa68d', '#850D29']

      if (this.percentage >= 80) {
        this.$refs.scratchable.clearArea()
        party.screen({
          color: siteColors,
          size: party.minmax(6, 12),
          count: party.variation(50 * (window.innerWidth / 1980), 0.4),
          angle: -180,
          spread: 80,
          angularVelocity: party.minmax(6, 9),
        })
        // setTimeout(() => {
        //   t.showButtonNext = true
        // }, 3000)
      }
    },
  },
  computed: {},
  mounted() {
    let t = this
    setTimeout(() => {
      t.showLoading = true
    }, 1500)
  },
}
</script>

<style lang="scss">
.gift {
  &-wrapper {
    color: #9c0525;
    @apply font-semibold;
    font-family: 'Hudson NY Serif';
    font-weight: normal;
    font-style: normal;
    font-size: 32px;
    @apply text-center;
    @apply relative;
    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }
}
.loading {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: 99;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, visibility 0.3s;
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
  .lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>

<style lang="scss" scope>
.components-interaction {
  min-height: 240px;
  position: relative;
}
</style>
