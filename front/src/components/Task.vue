<template>
<div>

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Task</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- Your content -->
      <div class="container mx-auto">
        <div class="flex">
          <h1 class="text-3xl font-bold mb-4">List</h1>
          <button type="button" class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Add Task</button>
        </div>

        <div class="overflow-x-auto rounded-md shadow mt-4">
          <simple-table />
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import SimpleTable from '@/components/base/tables/Tables.vue'
export default {
  name: 'HelloWorld',
  components: {
    SimpleTable
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
