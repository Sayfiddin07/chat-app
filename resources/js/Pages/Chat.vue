<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import Messages from "@/Components/Chat/Messages.vue";
import MessageInput from "@/Components/Chat/MessageInput.vue";
import Users from "@/Components/Chat/Users.vue";

defineProps({users: Array})
</script>
<template>
    <Head title="Dashboard"/>
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Received Messages: <b>0</b>
            </h2>
        </template>
        <div class="py-12">
            <div class=" max-w-7xl mx-auto sm:px-6 lg:px-8 flex gap-2 justify-around" style="height:670px">
                <div class="bg-white  w-full dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-y-scroll">
                    <users :users="users"/>
                </div>
                <div class="flex flex-col justify-end h-full bg-white w-full dark:bg-gray-800  shadow-sm sm:rounded-lg">
                    <messages class="messages"/>
                    <div class="flex flex-col p-6 text-gray-900 dark:text-gray-100 w-full">
                        <message-input/>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style>


/* Styles the scrollbar track (background) */
::-webkit-scrollbar {
    width: 8px; /* For vertical scrollbars */
    height: 12px; /* For horizontal scrollbars */
}

/* Styles the scrollbar thumb (the draggable part) */
::-webkit-scrollbar-thumb {
    background: #888; /* Thumb color */
    border-radius: 6px; /* Rounded corners */
}

/* Styles the scrollbar thumb on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; /* Darker color on hover */
}
</style>
