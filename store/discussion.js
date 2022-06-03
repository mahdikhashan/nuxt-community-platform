export const state = () => ({
    discussions: [],
})

export const getters = {
    getDiscussions: (state) => state.discussions,
}

export const mutations = {
    GET_ITEMS(state) {},
    SET_DISCUSSIONS(state, discussions) {
        state.items = discussions
    }
}

export const actions = {

    async getItems ({commit}) {
        const discussions = await this.$axios.$get('.netlify/functions/discussion')
        commit('SET_DISCUSSIONS', discussions)
    }

}