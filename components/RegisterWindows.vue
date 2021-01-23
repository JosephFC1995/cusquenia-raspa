<template>
  <div class="windows-register">
    <div class="box box-windows box-register flex items-center">
      <div class="box-content-inside">
        <h1 class="text-center mb-5">Completa tus datos</h1>
        <vue-form
          :state="formstate"
          @submit.prevent="onSubmit"
          class="grid grid-cols-6 gap-4 form-general"
        >
          <validate tag="label" class="form-model col-span-6">
            <input
              v-model="model.name"
              required
              name="name"
              placeholder="Nombre completo"
              class="w-full form-general-input cursor-hidden"
            />
          </validate>

          <validate tag="label" class="form-model col-span-3">
            <input
              v-model="model.email"
              name="email"
              type="email"
              required
              placeholder="Correo electrónico"
              class="w-full form-general-input cursor-hidden"
            />
          </validate>

          <validate tag="label" class="form-model col-span-3">
            <input
              v-model="model.phone"
              name="phone"
              required
              pattern="^\d{3}-\d{3}-\d{3}$"
              v-mask="'###-###-###'"
              placeholder="Teléfono"
              class="w-full form-general-input cursor-hidden"
            />
          </validate>

          <validate tag="label" class="col-span-6 form-model">
            <select
              v-model="model.restaurant"
              name="restaurant"
              required
              placeholder="Tu mensaje"
              class="w-full form-general-select textarea cursor-hidden"
              wrap="off"
            >
              <option value="" disabled selected>
                Seleccione un restaurante
              </option>
              <option value="1">Restauran 1</option>
              <option value="1">Restauran 2</option>
            </select>
          </validate>

          <validate tag="label" class="col-span-6 form-model form-checkbox">
            <input
              v-model="model.terms"
              required
              type="checkbox"
              value="1"
              name="agree"
              id="terms"
            />
            He leído y acepto los términos y condiciones
          </validate>

          <div class="col-span-6 mt-3 btn-group">
            <button type="submit" class="btn btn-custom submit cursor-link">
              Registrarme
            </button>
          </div>
        </vue-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formstate: {},
      model: {
        name: '',
        email: '',
        restaurant: '',
        terms: [1],
      },
    }
  },
  methods: {
    onSubmit: function () {
      if (this.formstate.$invalid) {
        // alert user and exit early
        return
      }
      this.$emit('next')
      // otherwise submit form
    },
  },
}
</script>

<style lang="scss">
.form {
  &-checkbox {
    font-size: 12px;
    &.vf-field-invalid {
      color: #9c0525 !important;
    }
  }
  &-general {
    &-select,
    &-input {
      font-size: 12px;
      background-color: transparent;
      height: 45px;
      border: 1px solid #656464;
      padding: 5px 10px;
      transition: 0.3s all;
      @apply rounded-full;
      &::placeholder {
        color: #c1c1c1;
      }
      option {
        color: #000;
        &[value=''][disabled] {
          display: none;
        }
      }
      &:required:invalid {
        color: #c1c1c1;
      }
      &.vf-submitted {
        &.vf-invalid {
          border-color: #9c0525;
          color: #9c0525 !important;
          &::placeholder {
            color: #9c0525 !important;
          }
        }
      }
    }
  }
}
</style>
