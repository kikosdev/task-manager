<script>
export default {
  name: "simpleTable",
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
    <tbody>
      <tr>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Lindsay Walton
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Front-end Developer
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          lindsay.walton@example.com
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">Member</td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
        </td>
      </tr>
      <tr>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Lindsay Walton
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Front-end Developer
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          lindsay.walton@example.com
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">Member</td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
        </td>
      </tr>
      <tr>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Lindsay Walton
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Front-end Developer
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          lindsay.walton@example.com
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">Member</td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
        </td>
      </tr>
      <tr>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Lindsay Walton
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Front-end Developer
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          lindsay.walton@example.com
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">Member</td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
          <span class="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.67a4.5 4.5 0 01-1.022.166m-4.788 0L9.26 16.45m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 13.67a4.5 4.5 0 01-1.022.166m-4.788 0L9.26 10.45M14.74 9l-.346 9m-4.788 0L9.26 9"
              />
            </svg>
          </span>
        </td>
      </tr>
      <tr>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Lindsay Walton
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Front-end Developer
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          lindsay.walton@example.com
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">Member</td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
          <span class="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.67a4.5 4.5 0 01-1.022.166m-4.788 0L9.26 16.45m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 13.67a4.5 4.5 0 01-1.022.166m-4.788 0L9.26 10.45M14.74 9l-.346 9m-4.788 0L9.26 9"
              />
            </svg>
          </span>
        </td>
      </tr>
      <tr>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Lindsay Walton
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          Front-end Developer
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          lindsay.walton@example.com
        </td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">Member</td>
        <td class="border border-gray-200 px-4 py-3 text-gray-700">
          <a href="#" class="text-blue-500 hover:text-blue-700">Edit</a>
          <span class="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.67a4.5 4.5 0 01-1.022.166m-4.788 0L9.26 16.45m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 13.67a4.5 4.5 0 01-1.022.166m-4.788 0L9.26 10.45M14.74 9l-.346 9m-4.788 0L9.26 9"
              />
            </svg>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>