<template>
  <div>
    <Toolbar />
    <client-only placeholder="loading...">
      <div id="output" class="Music Current"></div>
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