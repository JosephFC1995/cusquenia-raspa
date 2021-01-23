<template>
  <div
    class="container px-5 flex flex-col content-center justify-center min-h-screen mx-auto"
  >
    <div class="content-interaction">
      <img
        src="/images/logo.png"
        alt="Cusqueá"
        srcset="/images/logo.png"
        class="logo"
      />
    </div>
    <div class="components-interaction">
      <fade-transition mode="out-in">
        <!-- Start -->
        <StartWindows v-if="currentWindows == 0" @next="currentWindows = 1" />
        <!-- Register -->
        <RegisterWindows
          v-else-if="currentWindows == 1"
          @next="currentWindows = 2"
        />
        <!-- Raspa -->
        <ScratchableWindows
          v-if="currentWindows == 2"
          @next="currentWindows = 3"
        />
        <!-- Thanks -->
        <ThanksWindows v-if="currentWindows == 3" />
      </fade-transition>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Raspa y gana',
    }
  },
  data() {
    return {
      currentWindows: 0,
    }
  },
}
</script>

<style lang="scss">
body {
  background-image: url('/images/background_body.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  font-family: 'Open Sans';
  font-style: normal;
}
.footer {
  @apply absolute;
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
    @media (min-width: 768px) {
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
</style>
