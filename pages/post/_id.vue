<template>
  <div class="container py-3">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-9 col-xl-8 col-xxl-7">
        <article class="post">

          <header class="mb-3">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h1>Post title</h1>
              <nuxt-link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
              </nuxt-link>
            </div>

            <div class="d-flex justify-content-between align-items-center mb-1">
              <small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  />
                </svg>
                {{ new Date().toLocaleString() }}
              </small>
              <small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                  />
                  <path
                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                  />
                </svg>
                42
              </small>
            </div>

            <img
              class="card-img-top"
              src="/images/berlin.jpg"
              alt="post images"
            />

          </header>

          <main class="mb-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              vel quos quod et sit, quibusdam ut quaerat natus non atque
              consequatur repellendus enim! Recusandae accusamus vel eaque odio
              officia nam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              vel quos quod et sit, quibusdam ut quaerat natus non atque
              consequatur repellendus enim! Recusandae accusamus vel eaque odio
              officia nam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              vel quos quod et sit, quibusdam ut quaerat natus non atque
              consequatur repellendus enim! Recusandae accusamus vel eaque odio
              officia nam.
            </p>
          </main>

          <footer></footer>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return Boolean(params.id);
  },
};
</script>
