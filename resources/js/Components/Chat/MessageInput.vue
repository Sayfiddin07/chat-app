<template>
    <div class="flex justify-between w-full">
        <text-input v-model="message" class="w-full mr-2"/>
        <primary-button
            @click="sendMessage"
        >
            <svg width="20px" height="20px" viewBox="0 0 15 15" fill="white"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.20307 1.04312C1.00481 0.954998 0.77234 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568116 1.75196L3.92115 7.50002L0.568116 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.77234 13.9952 1.00481 14.045 1.20307 13.9569L14.7031 7.95692C14.8836 7.87667 15 7.69761 15 7.50002C15 7.30242 14.8836 7.12336 14.7031 7.04311L1.20307 1.04312ZM4.84552 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22091 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22091 7.10002 9 7.10002H4.84552Z"
                    fill="#ffffff"
                />
            </svg>
        </primary-button>
    </div>
</template>

<script setup>

import PrimaryButton from "@/Components/Utils/PrimaryButton.vue";
import TextInput from "@/Components/Utils/TextInput.vue";
import {ref} from "vue";
import {useStore} from "vuex";
import io from 'socket.io-client';

const store = useStore()
const socket = io('http://localhost:4200')
const message = ref("");
const sendMessage = () => {
    if (message.value !== "") {
        const new_message = {
            id: Date.now(),
            message: message.value,
            position: 'right'
        }
        store.commit('addMessage', new_message)
        message.value = "";

        socket.emit('message_get',new_message)

    }

}


</script>
<style scoped>

</style>
