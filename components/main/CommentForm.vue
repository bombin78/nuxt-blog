<template>
  <form
    class="scd-form row needs-validation"
    @submit.prevent="submitHandler"
    novalidate
  >
    <h2 class="scd-form__title">Добавить комментарий</h2>

    <div class="scd-form__field-name col-12">
      <label
        class="scd-form__field-label form-label"
        for="userName">Ваше имя</label>
      <input
        :class="{ 'is-invalid': $v.name.$dirty && !$v.name.required }"
        class="form-control"
        id="userName"
        type="text"
        placeholder="Укажите ваше имя"
        v-model.trim="name"
      />
      <div class="invalid-tooltip">Имя не должно быть пустым</div>
    </div>

    <div class="scd-form__field-text col-12">
      <label
        class="scd-form__field-label form-label"
        for="userText">Комментарий</label>
      <textarea
        :class="{ 'is-invalid': $v.text.$dirty && !$v.text.required }"
        class="form-control"
        id="userText"
        resize: vertical
        :rows="2"
        placeholder="Введите ваш комментарий"
        v-model.trim="text"></textarea>
      <div class="invalid-tooltip">Комментарий не доллжне быть пустым</div>
    </div>

    <div class="scd-form__actions col-12">
      <button class="btn btn-secondary btn-sm" type="submit" :disabled="loading">
        <span
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"></span>
        Добавить комментарий{{loading? '...' : ''}}
      </button>
    </div>
  </form>
</template>


<script>
import required from 'vuelidate/lib/validators/required';

export default {
  data: () => ({
    loading: false,
    name: '',
    text: '',

  }),
  validations: {
    name: {
      required,
    },
    text: {
      required,
    },
  },
  methods: {
    submitHandler() {

      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.loading = true;
      const formData = {
        postId: '',
        name: this.name,
        text: this.text,
      };

      try {
        setTimeout(() => {
          console.log('Комментарий добавлен');
          // TODO Добавить код для вывода сообщений
          // this.$message.success('Комментарий добавлен');
          this.$emit('created');
        }, 2000);
      } catch(e) {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scd-form {
  &__title {
    margin-bottom: 1.5rem;
  }

  &__field-name,
  &__field-text {
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
    margin-top: 0.8rem;
  }
}
</style>
