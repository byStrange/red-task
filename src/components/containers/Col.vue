<template>
  <div class="col" :style="{ width: width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Col",
  props: ["width" ],
};
</script>

<style>
.col {
  padding: 1.5rem;
  height: 100%;
}
</style>