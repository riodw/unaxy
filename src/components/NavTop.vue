<script setup lang="ts">
// import { useAuthStore } from "@/stores/auth";
// const auth = useAuthStore();
// const user = auth.user;
</script>

<template>
  <nav
    class="NavTop navbar fixed-top bg-body"
    style="
      z-index: 1000;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    "
  >
    <div class="container-fluid flex-nowrap">
      <a
        onclick="document.getElementById('viewport').classList.toggle('toggled')"
        class="navbar-brand"
      >
        <i class="bi bi-list"></i>
        Unaxy
      </a>
      <div class="container d-none d-md-flex flex-fill"></div>
      <!-- <div
        v-if="auth.authenticated"
        class="d-flex flex-shrink-0"
      >
        <button class="btn btn-outline-dark rounded-pill ms-3">
          <i class="bi bi-bell"></i>
        </button>
        <div class="dropdown">
          <a
            class="d-block link-dark text-decoration-none ms-3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              :src="user?.user_metadata.avatar_url"
              width="40"
              height="40"
              class="rounded-circle"
            />
          </a>
          <ul class="dropdown-menu dropdown-menu-end shadow">
            <li>
              <router-link
                to="/member"
                class="dropdown-item"
              >
                <i class="bi bi-person-circle"></i>
                &nbsp;Your Profile
              </router-link>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
              >
                <i class="bi bi-sliders"></i>
                &nbsp;Account Settings
              </a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a
                class="dropdown-item"
                @click="auth.signOut()"
              >
                <i class="bi bi-box-arrow-right"></i>
                &nbsp;Sign out
              </a>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="d-flex flex-shrink-0">
        <button class="btn btn-outline-primary me-1">Login</button>
        <button class="btn btn-primary me-1">Sign up</button>
      </div>
    </div>
  </nav>
</template>
