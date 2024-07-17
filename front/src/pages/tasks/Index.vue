<template>
<div>

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Task</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <breadcrumb-component :breadcrumbs="breadcrumbs"></breadcrumb-component>
      <router-view />
    </div>
  </main>
</div>
</template>

<script>
import BreadcrumbComponent from '@/components/base/breadcrumb/Breadcrumb.vue';

export default {
  name: 'IndexTask',
  components: {
    BreadcrumbComponent
  },
  data () {
    return {
      breadcrumbs: [
        { name: 'Tasks', path: '/tasks', icon: 'fa-solid fa-list' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
