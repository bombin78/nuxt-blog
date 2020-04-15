export const state = () => ({
  token: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token;
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {
    const token = await new Promise(resolve => {
      setTimeout(() => resolve('mock-token'), 2000);
    });
    console.log('token', token);
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token),
}
