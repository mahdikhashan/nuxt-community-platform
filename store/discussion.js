export const state = () => ({
    discussions: [],
    tags: []
})

export const getters = {
    getDiscussions: (state) => state.discussions,
    getTags: (state) => state.tags,
}

export const mutations = {
    GET_ITEMS(state) {},
    SET_DISCUSSIONS(state, discussions) {
        state.items = discussions
    },
    SET_TAGS(state, tags) {
        state.tags = tags
    }
}

export const actions = {

    async getItems ({commit}) {
        const discussions = await this.$axios.$get('.netlify/functions/discussion')
        commit('SET_DISCUSSIONS', discussions.discussions)
    },

    async getTags ({commit}) {
        const tags = await this.$axios.$get('.netlify/functions/tags')
        commit('SET_TAGS', tags.tags)
    }

}