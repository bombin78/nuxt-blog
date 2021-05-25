<template>
  <div class="scd-sidebar">
    <ul class="scd-nav">
      <li class="scd-nav__item">
        <nuxt-link
          class="scd-nav__link"
          active-class="scd-nav__link--active"
          exact
          to="/admin"
        >
          <app-bi-icon class="scd-nav__icon" :type="'graph-up'" />
          Аналитика
        </nuxt-link>
      </li>

      <li class="scd-nav__item">
        <nuxt-link
          class="scd-nav__link"
          active-class="scd-nav__link--active"
          to="/admin/create"
        >
          <app-bi-icon class="scd-nav__icon" :type="'pencil-square'" />
          Создать
        </nuxt-link>
      </li>

      <li class="scd-nav__item">
        <nuxt-link
          class="scd-nav__link"
          active-class="scd-nav__link--active"
          to="/admin/list"
        >
          <app-bi-icon class="scd-nav__icon" :type="'card-list'" />
          Посты
        </nuxt-link>
      </li>

      <li class="scd-nav__item">
        <nuxt-link
          class="scd-nav__link"
          active-class="scd-nav__link--active"
          to="/admin/user"
        >
          <app-bi-icon class="scd-nav__icon" :type="'people'" />
          Пользователи
        </nuxt-link>
      </li>

      <li class="scd-nav__item">
        <nuxt-link
          class="scd-nav__link"
          active-class="scd-nav__link--active"
          to="/admin/logout"
        >
          <app-bi-icon class="scd-nav__icon" :type="'box-arrow-left'" />
          Выйти
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppBiIcon from '@/components/BiIcon.vue';

export default {
  components: {
    AppBiIcon,
  },
};
</script>

<style lang="scss" scoped>
.scd-nav {
  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 100%;
  }

  &__link {
    display: block;
    padding: 0.6rem 1.5rem;


    color: rgba(0, 0, 0, 0.7);
    font-size: 0.8125rem;
    font-weight: 600;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;

    &--active,
    &:hover {
      background-color: rgba(200, 216, 238, 0.2);
      color: rgba(80, 116, 158, 1);
    }
  }

  &__icon {

    margin-right: 0.5rem;

    ::v-deep .bi {
      position: relative;
      top: -1px;
    }
  }
}
</style>
