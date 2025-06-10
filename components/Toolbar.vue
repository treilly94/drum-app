<script setup lang="ts">
const play = ref(false)
const settings = ref({ bpm: 60, singleDrum: 5, multiDrum: 5 })
const beat = ref(1)

const abc = ref()
const tunes = ref()

function reloadMusic() {
    abc.value = generateMusic(settings.value.singleDrum, settings.value.multiDrum)
    tunes.value = drawMusic(abc.value)
}
</script>

<template>
    <div class="Toolbar">
        <Toggle class="Toggle Item" v-model="play">
            <Icon v-if="play" name="radix-icons:pause" />
            <Icon v-else name="radix-icons:play" />
        </Toggle>

        <div class="Beat Item">
            {{ beat }}
        </div>

        <button class="Item Reload" @click="reloadMusic">
            <Icon name="radix-icons:reload" />
        </button>

        <Settings v-model="settings" />
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

.Reload {
    @apply bg-pink-500
}
</style>