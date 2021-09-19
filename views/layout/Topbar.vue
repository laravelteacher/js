<template>
  <div
    class="
      navbar navbar-expand navbar-light
      bg-white
      topbar
      mb-4
      static-top
      shadow
    "
  >
<h1><b>Laravel Teacher</b></h1>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">

      <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">
            {{ user.first_name }} {{ user.last_name }}
          </span>
        </a>
        <!-- Dropdown - User Logout -->
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <a class="dropdown-item" href="javascript:void(0)" @click="logout" data-toggle="modal" data-target="#logoutModal">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // this work when User Logged, Show the name of current User in page 
    ...mapGetters(["user"]),
  },
  methods: {
    // when User clicked to logout, Vue remove token , dispatch and page remove to Login page
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/login");
    },
  },
};
</script>
