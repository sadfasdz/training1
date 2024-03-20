<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <FirstComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import FirstComponent from "@/components/FirstComponent.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    FirstComponent,
  },
};
</script>
