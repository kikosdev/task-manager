<script>
import taskMixin from "@/mixins/task.mixin";
export default {
  name: "TaskAddComponent",
  mixins: [taskMixin],
  data() {
    return {
      editTask: false,
      task: {
        title: "",
        description: "",
        status: "waiting",
        dueDate: "",
      },
      errors: {
        title: false,
        dueDate: false,
      },
    };
  },
  created() {
    if (this.$route.params.id) {
      console.log(`params id: ${this.$route.params.id}`);
      this.editTask = true;
      this.$store.dispatch("fetchTaskById", this.$route.params.id).then(() => {
        console.log(this.taskSelected);
        this.task = { ...this.taskSelected };
        console.log(`taskSelected id: ${JSON.stringify(this.taskSelected)}`);
        console.log(`task id: ${JSON.stringify(this.task)}`);
      });
    }
  },
  methods: {
    submitTask() {
      try {
        this.errors.title = !this.task.title.trim();
        this.errors.dueDate = this.task.status === "done" && !this.task.dueDate;

        if (this.errors.title || this.errors.dueDate) {
          console.log("err");
          this.$notyf.error("check field and condition");
          return false;
        }
        if (this.editTask) {
          this.$store.dispatch("modifyTask", this.task).then(() => {
              this.task = {};
              this.$router.push({ name: "ListTask" });
              this.$notyf.success("Task Updated successfully");
            })
            .catch((error) => {
              this.$notyf.error(error);
            });
        } else {
          this.$store
            .dispatch("addTask", this.task)
            .then(() => {
              this.task = {};
              this.$router.push({ name: "ListTask" });
              this.$notyf.success("Task added successfully");
            })
            .catch((error) => {
              this.$notyf.error(error);
            });
        }
      } catch (e) {
        this.$notyf.error(`error: ${e}`);
      }
    },
  },
};
</script>
<template>
  <div>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          v-if="!editTask"
          class="text-3xl font-bold tracking-tight text-gray-900"
        >
          Create Task
        </h1>
        <h1 v-else class="text-3xl font-bold tracking-tight text-gray-900">
          Edit Task
        </h1>
      </div>
    </header>
    <div>
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Title</label
        >
        <input
          type="text"
          id="title"
          v-model="task.title"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Description</label
        >
        <textarea
          id="description"
          v-model="task.description"
          rows="4"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="status" class="block text-sm font-medium text-gray-700"
          >Status</label
        >
        <select
          id="status"
          v-model="task.status"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="waiting">Pending</option>
          <option value="doing">In Progress</option>
          <option value="done">Completed</option>
          <option value="bug">Bug</option>
        </select>
      </div>
      <div class="mb-4" v-if="task.status == 'done'">
        <label for="dueDate" class="block text-sm font-medium text-gray-700"
          >Due Date</label
        >
        <input
          type="date"
          id="dueDate"
          v-model="task.dueDate"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        @click="submitTask()"
        class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
      >
        Save
      </button>
    </div>
  </div>
</template>