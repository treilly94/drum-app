<script setup lang="ts">

const bpm = ref(60);
const play = ref(false);
const beat = ref(1);
const shape1 = ref('');
const shape2 = ref('');

function incrementBeat() {
  if (beat.value >= 4) {
    beat.value = 1
    shape1.value = shape2.value
    shape2.value = getShape()
    drawShapes(shape1.value, shape2.value)
  }
  else {
    beat.value++;
  }
}

onMounted(() => {
  drawShapes(shape1.value, shape2.value)

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
      <div id="output1" class="Music Current"></div>
      <div id="output2" class="Music Next"></div>
    </client-only>
  </div>
</template>

<style lang="css">
body {
  @apply bg-cyan-100
}

.Music {
  @apply flex justify-center bg-slate-50 m-5 rounded-lg;
}

.Current {
  @apply bg-slate-50
}

.Next {
  @apply bg-slate-200
}
</style>