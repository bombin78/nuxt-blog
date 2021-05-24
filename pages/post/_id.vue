<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-9 col-xl-8 col-xxl-7">
        <article class="scd-article">

          <header class="scd-article__header">

            <div class="scd-article__header-top">
              <h1 class="scd-article__header-title">Post title</h1>
              <nuxt-link class="scd-article__header-link" to="/">
                <app-bi-icon
                  :type="'arrow-left-square'"
                />
              </nuxt-link>
            </div>

            <div class="scd-article__header-bottom">
              <small class="scd-article__header-date">
                <app-bi-icon
                  :type="'clock'"
                />{{ new Date().toLocaleString() }}
              </small>
              <small class="scd-article__header-views">
                <app-bi-icon
                  :type="'eye'"
                />42
              </small>
            </div>

          </header>

          <main class="scd-article__main">

            <img
              class="card-img-top"
              src="/images/berlin.jpg"
              alt="post images"
            />

            <p class="scd-article__main-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              vel quos quod et sit, quibusdam ut quaerat natus non atque
              consequatur repellendus enim! Recusandae accusamus vel eaque odio
              officia nam.
            </p>
            <p class="scd-article__main-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              vel quos quod et sit, quibusdam ut quaerat natus non atque
              consequatur repellendus enim! Recusandae accusamus vel eaque odio
              officia nam.
            </p>
            <p class="scd-article__main-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              vel quos quod et sit, quibusdam ut quaerat natus non atque
              consequatur repellendus enim! Recusandae accusamus vel eaque odio
              officia nam.
            </p>
          </main>

          <footer class="scd-article__footer">

            <app-comment-form
              v-if="canAddComment"
              @created="createCommentHandler"
            />

            <div class="scd-article__footer-comments" v-if="true">
              <app-comment
                v-for="comment in 4"
                :key="comment"
                :comment="comment"
              />
            </div>

            <div class="scd-article__footer-empty" v-else>Комментариев нет</div>

          </footer>

        </article>
      </div>
    </div>
  </div>
</template>

<script>
import AppBiIcon from '@/components/BiIcon.vue';
import AppComment from '@/components/main/Comment';
import AppCommentForm from '@/components/main/CommentForm';

export default {
  components: {
    AppBiIcon,
    AppComment,
    AppCommentForm,
  },
  validate({ params }) {
    return Boolean(params.id);
  },
  data: () => ({
    canAddComment: true,
  }),
  methods: {
    createCommentHandler() {
      this.canAddComment = false;
    },
  },
};
</script>

<style lang="scss" scoped>

.container {
  padding: {
    top: 1rem;
    bottom: 1rem;
  }
}

.row {
  justify-content: center;
}

.card-img-top {
  margin-bottom: 1.5rem;
}

.scd-article {

  &__header {
    margin-bottom: 0.8rem;
  }

  &__header-top{
    margin-bottom: 0.2rem;
  }

  &__header-top,
  &__header-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header-date {
    ::v-deep .bi-clock {
      position: relative;
      top: -1px;
      width: 0.875rem;
      height: 0.875rem;
    }
  }

  &__main {
    margin-bottom: 1.5rem;
  }

  &__footer-empty {
    text-align: center;
  }
}
</style>
