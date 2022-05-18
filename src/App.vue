<template>
  <div :class="{ desktop: isDesktop, mobile: isMobile, app: true }">
    <Row width="100%">
      <Col width="40%">
        <div class="tasks card"></div>
      </Col>
      <Col width="60%">
        <div class="preview card"></div>
      </Col>
    </Row>
  </div>
</template>

<script>
import Row from "@/components/containers/Row.vue";
import Col from "@/components/containers/Col.vue";
export default {
  components: {
    Row,
    Col,
  },
  name: "App",
  data() {
    return {
      isDesktop: undefined,
      isMobile: undefined,
      db: null,
    };
  },
  mounted() {
    this.isDesktop = navigator.userAgent.match(/Mac|Windows/);
    this.isMobile = navigator.userAgent.match(
      /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/
    );
    let db = openDatabase("red-task", "1.0", "tasks", 2 * 1024 * 1024);
    this.db = db;
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