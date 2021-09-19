<template><div id="content">
        <Topbar />
           <h1>Welcome To my Channel</h1>
        </div>
      
</template>

<script>
import { mapGetters } from "vuex";
import Topbar from "./Topbar";

export default {
  components: {
    Topbar
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
