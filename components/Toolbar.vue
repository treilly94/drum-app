<script setup lang="ts">
const play = defineModel('play')
const bpm = defineModel('bpm')
const beat = defineModel('beat')
</script>

<template>
    <div class="Toolbar">
        <Toggle class="Toggle Item" v-model="play">
            <Icon v-if="play" name="radix-icons:pause" />
            <Icon v-else name="radix-icons:play" />
        </Toggle>
        <Input class="Item" v-model="bpm" type="number" />
        <div class="Beat Item">
            {{ beat }}
        </div>
    </div>
</template>

<style lang="css" scoped>
.Toolbar {
    @apply flex justify-center p-2 bg-cyan-600 shadow-md
}

.Item {
    @apply flex items-center justify-center h-10 w-10 m-2 rounded-lg shadow-md
}

.Toggle {
    @apply data-[state=off]:bg-green-500 data-[state=on]:bg-red-500
}

.Beat {
    @apply bg-cyan-500
}
</style>