<script setup lang="ts">

import { Factory } from 'vexflow';

const elementId: string = "output"

const shapes: string[] = [
  'C5/16, C5/16, C5/16, C5/16',
  'C5/16, C5/16, C5/8',
  'C5/16, C5/8, C5/16',
  'C5/8, C5/16, C5/16',
  'C5/16/r, C5/16, C5/16, C5/16'
]

/**
 * This function renders a random shape
 */
function getShape() {
  const vf = new Factory({
    renderer: { elementId: elementId, width: 500, height: 200 },
  });

  const score = vf.EasyScore();
  const system = vf.System();

  const num = Math.floor(Math.random() * shapes.length)

  system
    .addStave({
      voices: [
        score.voice(score.notes(shapes[num]), { time: "4/16" }),
      ],
    })

  vf.draw();
}

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
    <div>
      <Toggle v-model="play">
        <Icon name="radix-icons:play" />
      </Toggle>
    </div>
    <client-only placeholder="loading...">
      <UContainer>
        <canvas id="output"></canvas>
      </UContainer>
    </client-only>
    <p class="p-4">BPM: {{ bpm }}</p>
    <p class="p-4">Play: {{ play }}</p>
    <p class="p-4">Beat: {{ beat }}</p>
  </div>
</template>

<style lang="css">
body {
  @apply bg-sky-500;
}
</style>