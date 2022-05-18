<template>
  <div class="row" :style="{ width: width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: ["width"],
};
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>