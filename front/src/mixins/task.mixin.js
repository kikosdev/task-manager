export default {
  computed: {
    tasks() {
      return this.$store.getters.getTasks.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    },
    taskSelected() {
      return this.$store.getters.getTaskByID
    }
  }
}