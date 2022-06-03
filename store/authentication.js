export const state = () => ({
    token: "",
    ip: ""
})

export const getters = {
    getIp: (state) => state.ip,
    getToken: (state) => state.token
}

export const mutations = {
    LOGIN(state, username, password) {
    },
    LOGOUT(state, id) {
    },
    SET_TOKEN(state, token) {
        state.token = token
    },
    SIGNUP_BY_NUMBER(state, name, password, number) {
    },
    SIGNUP_BY_EMAIL(state, email, password) {
    },
    SIGNUP_BY_GMAIL(state, token) {
    },
    SET_IP(state, ip) {
        state.ip = ip
    }
}

export const actions = {
    
    async getIP ({commit}) {
        const ip = await this.$axios.$get('http://icanhazip.com')
        commit('SET_IP', ip)
    },

    async getToken ({commit}) {
        const token = await this.$axios.$get('.netlify/functions/token')
        commit('SET_TOKEN', token)
    }


}