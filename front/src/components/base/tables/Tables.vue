<script>
import moment from 'moment'
export default {
  name: "simpleTable",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data () {
    return {
      statusMapping: {
        waiting: 'Pending',
        doing: 'In Progress',
        done: 'Completed',
        bug: 'Bug'
      }
    }
  },
  methods: {
    navigateToEdit(task) {
      this.$router.push({ name: "updateTask", params: { id: task._id } });
      this.$store.dispatch('selectedTask', task)
    },
    removeTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
    formatDate(date) {
      if(date != null) {
        return moment(date).format("DD/MM/YYYY");
      } else {
        return '';
      }
    }
  },
};
</script>

<template>
  <table
    class="table-auto w-full text-left border-collapse border border-gray-200"
  >
    <thead>
      <tr>
        <th
          scope="col"
          class="px-4 py-3 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Id
        </th>
        <th
          scope="col"
          class="px-4 py-3 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Title
        </th>
        <th
          scope="col"
          class="px-4 py-3 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Description
        </th>
        <th
          scope="col"
          class="px-4 py-3 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Status
        </th>
        <th
          scope="col"
          class="px-4 py-3 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Due date
        </th>
        <th
          scope="col"
          class="px-4 py-3 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Edit
        </th>
      </tr>
    </thead>
    <tbody v-if="list.length > 0">
      <tr v-for="(item, index) in list" :key="item">
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          {{ index }}
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          {{ item?.title }}
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          {{ item?.description }}
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          {{ statusMapping[item?.status] }}
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          {{ formatDate(item?.dueDate) }}
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          <a
            @click="navigateToEdit(item)"
            class="pull-left text-blue-500 hover:text-blue-700"
            ><i class="fa-solid fa-pencil"></i
          ></a>
          <a
            @click="removeTask(item._id)"
            class="ml-2 pull-right text-blue-500 hover:text-blue-700"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="5" class="text-center text-gray-500 py-4">
          No tasks available.
        </td>
      </tr>
    </tbody>
  </table>
</template>