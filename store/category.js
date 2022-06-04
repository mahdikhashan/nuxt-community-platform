export const state = () => ({
    categories: [],
})

export const getters = {
    getCategories: (state) => state.categories,
}

export const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    }
}

export const actions = {

    async getCategories ({commit}) {
        const categories = await this.$axios.$get('.netlify/functions/categories')
        commit('SET_CATEGORIES', categories.categories)
    },

}