<template>
  <div class="card">
    <div class="card-body">
      <form
        class="scd-form needs-validation"
        @submit.prevent="submitHandler"
        novalidate
      >
        <h2 class="scd-form__title">Войти в панель администратора</h2>

        <div class="scd-form__field-login col-12">
          <label class="scd-form__field-label form-label" for="userLogin"
            >Логин</label
          >
          <input
            :class="{
              'form-control': true,
              'is-invalid': $v.login.$dirty && !$v.login.required
            }"
            id="userLogin"
            type="text"
            placeholder="Укажите логин"
            v-model.trim="login"
          />
          <div class="invalid-tooltip">Имя не должно быть пустым</div>
        </div>

        <div class="scd-form__field-password col-12">
          <label class="scd-form__field-label form-label" for="userPassword"
            >Пароль</label
          >
          <input
            :class="{
              'form-control': true,
              'is-invalid':
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$dirty && !$v.password.minLength)
            }"
            id="userPassword"
            type="password"
            placeholder="Введите пароль"
            v-model.trim="password"
          />
          <div v-show="!$v.password.required" class="invalid-tooltip">
            Пароль не должен быть пустым
          </div>
          <div v-show="!$v.password.minLength" class="invalid-tooltip">
            Пароль должен быть не менее 6 символов
          </div>
        </div>

        <div class="scd-form__actions col-12">
          <button
            class="btn btn-secondary btn-sm"
            type="submit"
            :disabled="loading"
          >
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Войти{{ loading ? "..." : "" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";

export default {
  layout: "empty",
  data: () => ({
    loading: false,
    login: "",
    password: "",
  }),
  validations: {
    login: {
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      console.log("Submit");

      this.loading = true;

      try {
        const formData = {
          login: this.login,
          password: this.password,
        }

        await this.$store.dispatch('auth/login', formData);
        this.$router.push('/admin')

      } catch(e) {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 500px;

  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.scd-form {
  &__title {
    margin-bottom: 1.5rem;
  }

  &__field-login,
  &__field-password {
    position: relative;
    margin-bottom: 1rem;
  }

  &__field-label {
    &:after {
      content: "*";
      margin-left: 0.3rem;

      color: #dc3545;
    }
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.8rem;
  }
}
</style>
