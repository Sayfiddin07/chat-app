import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            messages: []
        }
    },
    mutations: {
        addMessage(state, message) {
            state.messages.push(message)
        }
    },
    getters: {
        messages: ({messages}) => {
            return messages
        }
    }
})

