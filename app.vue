<script setup lang="ts">

const bpm = ref(60);
const play = ref(false);
const beat = ref(1);

function incrementBeat() {
  if (beat.value >= 4) {
    beat.value = 1
    getShape()
  }
  else {
    beat.value++;
  }
}

onMounted(() => {
  setInterval(() => {
    if (play.value) {
      incrementBeat()
    }
  }, 60000 / bpm.value)
})

</script>

<template>
  <div>
    <Toolbar v-model:play="play" v-model:bpm="bpm" v-model:beat="beat" />
    <client-only placeholder="loading...">
      <canvas id="output" class="Item"></canvas>
    </client-only>
  </div>
</template>

<style lang="css">
body {
  @apply bg-cyan-100
}

.Item {
  @apply flex items-center justify-center h-10 w-10 m-2 rounded-lg shadow-md
}


canvas {
  @apply bg-cyan-50
}
</style>