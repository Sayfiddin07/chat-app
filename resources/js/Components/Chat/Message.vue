<template>
    <div
        :class="['border', 'message', 'flex justify-center','items-center','absolute','h-full',
        message.position ==='right' ? 'right-message': 'left-message']">
        <p class="message-text">{{ message.message }}</p>
    </div>
</template>

<script setup>

defineProps({message: Object})

</script>

<style scoped>
.message {
    max-width: 50%;
    border-radius: 10px;
    margin: 0 auto;
    padding: 0 10px;
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

.message-text {
    word-wrap: break-word;
}


</style>
