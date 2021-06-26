<template>
  <form
    class="scd-form needs-validation"
    @submit.prevent="submitHandler"
    novalidate
  >
    <h2 class="scd-form__title">Создать пользователя</h2>

    <div class="scd-form__field-login col-12">
      <label class="scd-form__field-label form-label" for="userLogin"
        >Логин</label
      >
      <input
        :class="{
          'form-control': true,
          'is-invalid': $v.login.$dirty && !$v.login.required,
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
            ($v.password.$dirty && !$v.password.minLength),
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
        Создать{{ loading ? "..." : "" }}
      </button>
    </div>
  </form>
</template>

<script>
import required from 'vuelidate/lib/validators/required';
import minLength from 'vuelidate/lib/validators/minLength';

export default {
  layout: "admin",
  middleware: ["admin-auth"],
  data: () => ({
    loading: false,
    login: '',
    password: '',
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

      console.log('Submit');

      this.loading = true;

      try {
        const formData = {
          login: this.login,
          password: this.password,
        }

        await this.$store.dispatch('auth/createUser', formData);
        this.$toast.success('Новый пользователь добавлен', {
          duration: 5000,
        });
        this.login = '';
        this.password = '';
        this.loading = false;

      } catch(e) {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scd-form {
  width: 600px;

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
