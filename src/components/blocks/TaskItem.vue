<template>
  <div class="task" ref="task">
    <div class="action">
      <div class="icon">
        <i class="fas fa-check-circle"></i>
      </div>
    </div>
    <div class="task__header">
      <div class="task__title">
        <span>{{ slicedTitle }}</span>
      </div>
    </div>
    <div class="action">
      <div class="icon" @click="showDrop">
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div class="dropdown hide" ref="drop">
        <div class="dropdown__item" action="edit" @click="editTask">
          <i class="fas fa-pencil-alt"></i>
          <span>Edit</span>
        </div>
        <div class="dropdown__item" action="delete" @click="deleteTask">
          <i class="fas fa-trash-alt"></i>
          <span>Delete</span>
        </div>
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
  methods: {
    showDrop() {
      this.$refs.drop.classList.toggle("hide");
    },
    editTask(emit) {
      this.$emit("edit", this.$refs.task);
    },
    deleteTask(emit) {
      this.$emit("delete", this.$refs.task);
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
.task .task__header {
  text-align: center;
  user-select: none;
}
.task .action {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.task .action .dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #c3c8de85;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  transition: 250ms;
  padding: 5px;
}
.task .action .dropdown.hide {
  transform: scaleY(0);
  opacity: 0;
}
.task .action .dropdown .dropdown__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  cursor: pointer;
  transition: background 250ms, color 150ms, border-width 100ms linear;
  border-radius: 10px;
  padding: 5px 14px;
  color: #000;
  user-select: none;
}

.task .action .dropdown .dropdown__item:active {
  transform: translateY(2px);
}

.task .action .dropdown .dropdown__item:not(:last-child) {
  margin-bottom: 2px;
}

.task .action .dropdown .dropdown__item:hover {
  /* background: #414856; */
  background: rgba(255,255,255,0.1999);
  color: #fff;
}

/* .task .action .dropdown .dropdown__item:first-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.task .action .dropdown .dropdown__item:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
} */

.task .action .dropdown .dropdown__item[action="delete"] {
  color: #ff0000;
}
</style>
