<template>
  <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Название</th>
      <th scope="col">Дата</th>
      <th scope="col">Просмотры</th>
      <th scope="col">Комментарии</th>
      <th scope="col">Действия</th>
    </tr>
  </thead>
  <tbody>
    <tr
      v-for="post in posts"
      :key="post._id"
    >
      <td>{{post.title}}</td>
      <td>
        <span>
          <app-bi-icon :type="'clock'" />
          {{new Date(post.date).toLocaleString()}}
        </span>
      </td>
      <td>
        <span>
          <app-bi-icon :type="'eye'" />
          {{post.views}}
        </span>
      </td>
      <td>
        <span>
          <app-bi-icon :type="'chat-right-text'" />
          {{post.comments.length}}
        </span>
      </td>
      <td>
        <span
          class="editBtn"
          @click="open(post._id)"
        >
          <app-bi-icon :type="'pencil'" />
        </span>
        <span
          class="deleteBtn"
          @click="remove(post._id)"
        >
          <app-bi-icon :type="'trash'" />
        </span>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import AppBiIcon from '@/components/BiIcon.vue';

export default {
  layout: 'admin',
  components: {
    AppBiIcon,
  },
  middleware: ['admin-auth'],
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetchAdmin');
    return {posts};
  },
  methods: {
    open(id) {
      console.log('open', id);
    },
    remove(id) {
      console.log('remove', id);
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  ::v-deep .bi-clock {
    position: relative;
    top: -1px;
    width: 0.875rem;
    height: 0.875rem;
  }

  .editBtn {
    cursor: pointer;
    color: #6c757d;
  }

  .deleteBtn {
    cursor: pointer;
    color: #dc3545;;
  }
}
</style>
