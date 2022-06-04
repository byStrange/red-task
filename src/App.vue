<template>
  <div :class="{ desktop: isDesktop, mobile: isMobile, app: true }">
    <Row width="100%">
      <Col width="40%">
        <div class="panel card">
          <Button text="Starred" icon="fa-star" />
          <Button text="Lists" icon="fa-layer" />
          <Button text="Done" icon="fa-check" />
        </div>
      </Col>
      <Col width="60%">
        <div class="preview card">
          <div class="title">
            <span>Daily Tasks</span>
          </div>
          <TaskItem title="task title bla bla bla bla bla bla bla  " />
          <TaskItem title="task title bla bla bla bla bla bla bla  " />
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import Row from "@/components/containers/Row.vue";
import Col from "@/components/containers/Col.vue";
import Button from "@/components/blocks/ActionButton.vue";
import TaskItem from "@/components/blocks/TaskItem.vue";
import { TaskList, Task } from "./models.js";
export default {
  components: {
    Row,
    Col,
    Button,
    TaskItem,
  },
  name: "App",
  data() {
    return {
      isDesktop: undefined,
      isMobile: undefined,
      taskList: [],
      db: localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [],
    };
  },
  mounted() {
    this.isDesktop = navigator.userAgent.match(/Mac|Windows/);
    this.isMobile = navigator.userAgent.match(
      /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/
    );
  },
  methods: {
    onResize() {
      this.isDesktop = navigator.userAgent.match(/Mac|Windows/);
      this.isMobile = navigator.userAgent.match(
        /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/
      );
    },
  },
};
</script>