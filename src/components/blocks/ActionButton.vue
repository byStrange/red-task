<template>
  <button
    class="btn__action"
    :disabled="disabled"
    :style="{ background: background }"
  >
    <span>{{ text }}</span>
    <div class="icon">
      <!-- fontawesome icon with icon prop-->
      <i :class="icon" class="fas"></i>
    </div>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
button.btn__action {
  border: none;
  width: 100%;
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  cursor: pointer;
  background: #ef9f9f;
  transition: 250ms;
  color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
button.btn__action:hover {
  background: rgba(239, 159, 159, 0.8);
  color: #fff;
}
button.btn__action:focus {
  box-shadow: 0 0 0 2px rgb(216 33 72 / 20%);
}
</style>