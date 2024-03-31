<template>
    <div class="messages flex-grow  border-t  w-full top-0 overflow-y-scroll">
        <ul class="p-6 pb-0 w-full h-full">
            <li class="relative w-full my-1" style="height: 40px; display: inline-block" v-for="message in messages"
                :key="message.id">
                <message :message="message"/>
            </li>
        </ul>
    </div>
</template>

<script setup>

import Message from "@/Components/Chat/Message.vue";
import {useStore} from "vuex";
import {computed} from "vue";

const {getters} = useStore()
const messages = computed(() => getters.messages)

</script>

<style scoped>
.messages {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.messages:first-child {
    margin-top: auto
}

</style>
