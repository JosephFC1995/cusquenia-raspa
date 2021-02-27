<template>
  <div class="windows-register">
    <div class="box box-windows box-register flex items-center">
      <div class="loading" :class="[showLoading ? '' : 'hidden']">
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
              <option
                :value="restaurant.id"
                v-for="restaurant in array_restaurant"
                :key="restaurant.id"
              >
                {{ restaurant.nombre }}
              </option>
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
          <div class="col-span-6">
            <div class="alert" v-if="messageError">
              {{ messageError }}
            </div>
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
        phone: '',
        terms: [1],
      },
      messageError: null,
      array_restaurant: [],
      showLoading: false,
    }
  },
  methods: {
    async onSubmit() {
      this.messageError = null
      if (this.formstate.$invalid) {
        return
      }
      this.showLoading = true
      let newForm = {
        restaurant: this.model.restaurant,
        nombre: this.model.name,
        correo: this.model.email,
        telefono: this.model.phone,
      }
      let response = await this.$axios
        .$post('formulario', newForm)
        .catch((err) => {
          this.messageError = 'Ya participaste el dia de hoy'
          console.log(err)
        })
      this.showLoading = false

      if (!response) {
        return
      }
      this.$emit('next', response)
      // otherwise submit form
    },
  },
  async mounted() {
    this.array_restaurant = await this.$axios.$get('/restaurant')
  },
}
</script>

<style lang="scss">
.alert {
  background: #d24646f2;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
}
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
