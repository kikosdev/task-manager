import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/pages/tasks/Index.vue";
import CreateComponent from "@/pages/tasks/components/Create.component.vue";
import ListComponent from "@/pages/tasks/components/List.component.vue";

const routes = [
  {
    path: '/tasks',
    name: 'IndexPage',
    component: IndexPage,
    meta: { breadcrumb: 'List Task', parents: {}, icon: 'fa-solid fa-list' },
    children: [
      {
        path: '',
        name: 'ListTask',
        component: ListComponent,
      },
      {
        path: 'create',
        name: 'CreateTask',
        meta: { breadcrumb: 'Create Task', parentPath: 'ListTask', icon: 'fa-solid fa-plus' },
        component: CreateComponent,
      },
      {
        path: 'edit/:id',
        name: 'updateTask',
        meta: { breadcrumb: 'Update Task', parentPath: 'ListTask', icon: 'fa-solid fa-pencil' },
        component: CreateComponent,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/tasks');
  } else {
    next();
  }
});
export default router;
