<template>
  <div class="global-notification">
    <slot></slot>
  </div>
</template>

<script>
  import Notyf from "notyf";

  const notification = new Notyf();

  export default {
    name: 'GlobalNotification',
    methods: {
      showNotification (type, message, options = {}) {
        notification[type](message, options);
      },
    },
  }
</script>
