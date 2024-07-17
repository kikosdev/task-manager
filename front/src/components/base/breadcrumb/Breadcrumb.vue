<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <router-link to="/" class="text-gray-700 hover:text-gray-900 inline-flex items-center">
          <i class="fa-solid fa-house"></i>
          <span class="ml-1 md:ml-2 text-sm font-medium">Home</span>
        </router-link>
      </li>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="inline-flex items-center">
        <span class="text-gray-400">/</span>
        <router-link
          v-if="breadcrumb.path && index < breadcrumbs.length - 1"
          :to="breadcrumb.path"
          class="text-gray-700 hover:text-gray-900 inline-flex items-center ml-1 md:ml-2 text-sm font-medium"
        >
          <i :class="breadcrumb.icon"></i>
          <span class="ml-1 md:ml-2">{{ breadcrumb.name }}</span>
        </router-link>
        <span v-else class="text-gray-500 ml-1 md:ml-2 text-sm font-medium">
          <i :class="breadcrumb.icon"></i>
          {{ breadcrumb.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbComponent',
  computed: {
    breadcrumbs() {
      let pathArray = this.$route.path.split('/').filter(i => i);
      let breadcrumbs = [];

      pathArray.forEach((path, index) => {
        const matchedRoute = this.$route.matched.find(r => r.path.includes(path));

        if (matchedRoute) {
          breadcrumbs.push({
            name: matchedRoute.meta.breadcrumb || matchedRoute.name || path,
            path: index < pathArray.length - 1 ? matchedRoute.path : null,
            icon: matchedRoute.meta.icon || 'fa-solid fa-angle-right'
          });
        }
      });

      return breadcrumbs;
    }
  }
}
</script>

<style scoped>
/* Add your breadcrumb styles here */
</style>
