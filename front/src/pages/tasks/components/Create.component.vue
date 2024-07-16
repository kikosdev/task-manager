<script>
export default {
  name: "TaskAddComponent",
  data() {
    return {
      title: "",
      description: "",
      status: "pending",
      dueDate: "",
    };
  },
  methods: {
    handleSubmit() {
      // Emit an event to the parent component with the task data
      this.$emit("addTask", {
        title: this.title,
        description: this.description,
        status: this.status,
        dueDate: this.dueDate,
      });
      // Clear form fields
      this.title = "";
      this.description = "";
      this.status = "pending";
      this.dueDate = "";
    },
  },
};
</script>
<template>
  <div>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Create Task
        </h1>
      </div>
    </header>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Title</label
        >
        <input
          type="text"
          id="title"
          v-model="title"
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
          v-model="description"
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
          v-model="status"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="dueDate" class="block text-sm font-medium text-gray-700"
          >Due Date</label
        >
        <input
          type="date"
          id="dueDate"
          v-model="dueDate"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  </div>
</template>