<script setup lang="ts">
import abcjs from 'abcjs';

const play = ref(false)
const settings = ref({ bpm: 60, singleDrum: 5, multiDrum: 5 })
const beat = ref(1)

const abc = ref()
const tunes = ref()

function playMusic() {
    abcjs.startAnimation("output", tunes.value[0], {
        showCursor: true,
        bpm: 60,
    });
}

function stopMusic() {
    abcjs.stopAnimation();
    drawMusic(abc.value)
}

function reloadMusic() {
    abc.value = generateMusic()
    tunes.value = drawMusic(abc.value)
    playMusic()
}
</script>

<template>
    <div class="Toolbar">
        <Toggle class="Toggle Item" v-model="play">
            <Icon v-if="play" name="radix-icons:pause" />
            <Icon v-else name="radix-icons:play" />
        </Toggle>

        <button @click="playMusic()">play</button>

        <div class="Beat Item">
            {{ beat }}
        </div>

        <button class="Item Reload" @click="reloadMusic">
            <Icon name="radix-icons:reload" />
        </button>

        <Settings />
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