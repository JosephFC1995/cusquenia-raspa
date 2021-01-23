<template>
  <div class="windows-start">
    <div class="box box-windows box-start flex items-center">
      <div class="box-content-inside">
        <h1>
          Sé uno <br />
          de los <br />
          ganadores
        </h1>
        <img
          src="/images/malta.png"
          alt="malta"
          srcset="/images/malta.png"
          class="malta"
        />
      </div>
    </div>
    <div class="btn-group">
      <a class="btn btn-custom" @click="$emit('next')">Jugar</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
