<template>
    <div
        :class="['border', 'message', 'flex justify-center','items-center','absolute','h-full',
        message.position ==='right' ? 'right-message': 'left-message']">
        <p>{{ message.message }}</p>
    </div>
</template>

<script setup>

defineProps({message: Object})

</script>

<style scoped>
.message {
    border-radius: 10px;
    padding: 0 10px;
    max-width: 50%;
}

.left-message {
    left: 0;
    background-color: #F3F4F6;
    color: #000000;
}

.right-message {
    right: 0;
    background-color: #0CB1C1;
    color: #ffffff;
}
</style>
