<template>
  <div>
    <p class="card" :class="{red: true}">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
}
.red {
  color: red;
}
</style>
