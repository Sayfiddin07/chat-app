<template>
    <div v-for="user in users" v-bind:key="user.id"
         class="flex justify-between align-middle border-t p-6 text-gray-900 dark:text-gray-100">
        <h5 class="mb-4">Here is score: {{ user.name }} <br><small class="text-green-500">Online</small></h5>
    </div>
</template>


<script setup>
defineProps({
    users: Array,
    user: Object
})

</script>
