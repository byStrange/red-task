<template>
  <div class="task">
    <div class="action">
      <input type="checkbox" :value="done" />
    </div>
    <div class="task__header">
      <div class="task__title">
        <span>{{ slicedTitle }}</span>
      </div>
    </div>
    <div class="action">
      <div class="icon">
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "TaskItem",
  computed: {
    slicedTitle() {
      return this.title.length > 35
        ? this.title.slice(0, 35) + "..."
        : this.title;
    },
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.task .icon {
  text-align: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms;
  cursor: pointer;
}

.task .icon:hover {
  background: rgba(0, 0, 0, 0.1);
}
.task {
  --background: #ffffff;
  --text: #414856;
  --check: #4f29f0;
  --disabled: #c3c8de;
  --width: 100px;
  --height: 140px;
  --border-radius: 10px;
  display: grid;
  align-items: center;
  border-radius: 30px;
  background: #ef9f9f;
  transition: 250ms;
  color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  grid-template-columns: 45px calc(100% - 45px * 2) 45px;
}
.task .action {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#checklist input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none !important;
  position: relative;
  height: 15px;
  width: 15px;
  outline: none;
  border: 0;
  margin: 0 15px 0 0;
  cursor: pointer;
  background: var(--background);
  display: grid;
  align-items: center;
}
input[type="checkbox"]::before,
input[type="checkbox"]::after {
  content: "";
  position: absolute;
  height: 2px;
  top: auto;
  background: var(--check);
  border-radius: 2px;
}
input[type="checkbox"]::before {
  width: 0px;
  right: 60%;
  transform-origin: right bottom;
}
input[type="checkbox"]::after {
  width: 0px;
  left: 40%;
  transform-origin: left bottom;
}
input[type="checkbox"]:checked::before {
  -webkit-animation: check-01 0.4s ease forwards;
  animation: check-01 0.4s ease forwards;
}
input[type="checkbox"]:checked::after {
  -webkit-animation: check-02 0.4s ease forwards;
  animation: check-02 0.4s ease forwards;
}

input[type="checkbox"]:checked + label {
  color: var(--disabled);
  -webkit-animation: move 0.3s ease 0.1s forwards;
  animation: move 0.3s ease 0.1s forwards;
}
input[type="checkbox"]:checked + label::before {
  background: var(--disabled);
  -webkit-animation: slice 0.4s ease forwards;
  animation: slice 0.4s ease forwards;
}
input[type="checkbox"]:checked + label::after {
  -webkit-animation: firework 0.5s ease forwards 0.1s;
  animation: firework 0.5s ease forwards 0.1s;
}

@keyframes move {
  50% {
    padding-left: 8px;
    padding-right: 0px;
  }
  100% {
    padding-right: 4px;
  }
}
@keyframes slice {
  60% {
    width: 100%;
    left: 4px;
  }
  100% {
    width: 100%;
    left: -2px;
    padding-left: 0;
  }
}
@keyframes check-01 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0px;
    top: 8px;
    transform: rotate(45deg);
  }
  100% {
    width: 5px;
    top: 8px;
    transform: rotate(45deg);
  }
}
@keyframes check-02 {
  0% {
    width: 4px;
    top: auto;
    transform: rotate(0);
  }
  50% {
    width: 0px;
    top: auto;
    transform: rotate(0);
  }
  51% {
    width: 0px;
    top: 8px;
    transform: rotate(-45deg);
  }
  100% {
    width: 10px;
    top: 8px;
    transform: rotate(-45deg);
  }
}
@keyframes firework {
  0% {
    opacity: 1;
    box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,
      0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0,
      14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0,
      -14px -8px 0 0px #4f29f0;
  }
}
</style>
