<template>
  <div
    class="container px-5 flex flex-col content-center justify-center min-h-screen mx-auto box-inner"
  >
    <div class="content-interaction">
      <img
        src="/images/logo.png"
        alt="Cusquenia"
        srcset="/images/logo.png"
        class="logo"
      />
    </div>
    <div class="components-interaction">
      <fade-transition mode="out-in">
        <!-- Start -->
        <StartWindows v-if="currentWindows == 0" @next="currentWindows = 1" />
        <!-- Register -->
        <RegisterWindows v-else-if="currentWindows == 1" @next="getResponse" />
        <!-- Raspa -->
        <ScratchableWindows v-if="currentWindows == 2" :response="response" />
        <!-- Thanks -->
        <!-- <ThanksWindows v-if="currentWindows == 3" /> -->
      </fade-transition>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Raspa y Gana Cusqueña',
      response: '',
    }
  },
  data() {
    return {
      currentWindows: 0,
    }
  },
  methods: {
    getResponse($event) {
      this.response = $event
      this.currentWindows = 2
    },
  },
}
</script>

<style lang="scss">
* {
  outline: none !important;
}
body {
  background-image: url('/images/background_body.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  font-family: 'Open Sans';
  font-style: normal;
}
.footer {
  bottom: 0;
  text-align: center;
  font-family: 'Chypre Cond';
  font-weight: 100;
  font-style: normal;
  font-size: 18px;
  width: 100%;
  background-image: url(/images/shadow.png);
  background-position: bottom;
  background-size: cover;
  background-repeat-x: repeat;
  color: white;
  line-height: 1.4;
  letter-spacing: 5px;
  @media (min-width: 768px) {
    background-size: contain;
  }
  h1 {
    border-top: 1px solid #fff;
    margin: 0 14px;
    padding-top: 7px;
    padding-bottom: 7px;
  }
}
.logo {
  @apply mb-10;
  @apply mx-auto;
}
.box {
  &-windows {
    min-height: 300px;
    width: 100%;
    @apply rounded-lg;
    @apply bg-white;
    @apply mb-5;
    @media (min-width: 640px) {
      width: 320px;
      margin: 0 auto;
      @apply mb-5;
    }
  }
  &-start {
    background-image: url('/images/fondo_welsome.jpg');
    background-size: cover;
    background-position: right;
    @apply relative;
  }
  &-register {
    @apply bg-black;
  }

  &-content-inside {
    @apply p-5;
    @apply text-white;
    h1 {
      font-size: 28px;
      @apply font-semibold;
      font-family: 'Hudson NY Serif';
      font-weight: normal;
      font-style: normal;
      line-height: 1;
    }
    .malta {
      @apply mt-3;
      height: 85px;
    }
  }
  &-scratchable {
    min-height: auto;
    width: 320px;
    margin: 0 auto;
    .box-content-inside {
      padding: 0;
    }
  }
  &-thanks {
    min-height: auto;
    width: 320px;
    margin: 0 auto;
    .box-content-inside {
      padding: 0;
    }
  }
}
.btn {
  &-group {
    @apply flex;
    @apply justify-center;
  }
  &-custom {
    @apply text-white;
    @apply rounded-full;
    background-color: #9c0525;
    padding: 10px 35px;
    font-family: 'Open Sans';
    font-style: normal;
    cursor: pointer;
  }
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
@media (orientation: landscape) and (max-width: 1200px) {
  .box-inner {
    min-height: 35rem;
  }
}
@media (orientation: portrait) {
  .footer {
    @apply fixed;
  }
}

@media (orientation: landscape) {
  .footer {
    padding-top: 15px;
    background-size: contain;
  }
}
@media (orientation: landscape) and (min-width: 1200px) {
  .footer {
    position: fixed;
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
