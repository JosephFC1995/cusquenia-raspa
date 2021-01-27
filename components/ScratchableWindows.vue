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
            <h3>
              {{ 'Ganaste ' + response.data ? response.data.premio : '' }}
            </h3>
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
    response: {
      type: Object,
      default: null,
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
        // party.screen({
        //   color: siteColors,
        //   size: party.minmax(6, 12),
        //   count: party.variation(50 * (window.innerWidth / 1980), 0.4),
        //   angle: -180,
        //   spread: 80,
        //   angularVelocity: party.minmax(6, 9),
        // })
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
</style>

<style lang="scss" scope>
.components-interaction {
  min-height: 240px;
  position: relative;
}
</style>
