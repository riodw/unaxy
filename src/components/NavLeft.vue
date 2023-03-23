<script setup lang="ts"></script>

<template>
  <div
    id="left-nav"
    class="d-flex fixed-top flex-column flex-shrink-0 bg-body navbar-dark h-100"
  >
    <div class="NavLeft">
      <nav
        class="navbar navbar-light shadow-sm"
        style="z-index: 1000"
      >
        <div class="container-fluid justify-content-between align-items-center">
          <a
            onclick="document.getElementById('viewport').classList.toggle('toggled')"
            class="navbar-brand"
          >
            <i class="bi bi-list"></i>
            <strong class="ps-2">Housey</strong>
          </a>
        </div>
      </nav>

      <div class="m-3">
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <!-- onclick="document.getElementById('viewport').classList.toggle('toggled')" -->
            <router-link
              to="/"
              class="nav-link"
            >
              <i class="bi bi-house-fill"></i>
              &nbsp;Home
            </router-link>
          </li>
          <li>
            <!-- onclick="document.getElementById('viewport').classList.toggle('toggled')" -->
            <router-link
              to="/properties"
              class="nav-link"
            >
              <i class="bi bi-building"></i>
              &nbsp;Properties
            </router-link>
          </li>
          <li>
            <!-- onclick="document.getElementById('viewport').classList.toggle('toggled')" -->
            <router-link
              to="/compare"
              class="nav-link"
            >
              <i class="bi bi-arrow-left-right"></i>
              &nbsp;Compare
            </router-link>
          </li>
          <li>
            <!-- onclick="document.getElementById('viewport').classList.toggle('toggled')" -->
            <router-link
              to="/member"
              class="nav-link"
            >
              <i class="bi bi-bar-chart-steps"></i>
              &nbsp;Analyze
            </router-link>
          </li>
          <li class="mt-3 mb-1">
            <button
              class="btn btn-toggle d-inline-flex align-items-center rounded collapsed w-100"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              <i class="bi bi-chevron-right"></i>
              &nbsp;
              <b>Get Started</b>
            </button>
            <div
              id="home-collapse"
              class="collapse"
            >
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    class="nav-link link-dark rounded"
                  >
                    <button class="btn btn-sm btn-primary">
                      <i class="bi bi-house-door"></i>
                    </button>
                    &nbsp;About Campfire
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="nav-link link-dark rounded"
                  >
                    <button class="btn btn-sm btn-primary">
                      <i class="bi bi-chat-heart"></i>
                    </button>
                    &nbsp;Say Hello
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    onclick="document.getElementById('viewport').classList.toggle('toggled')"
    class="offcanvas-backdrop opacity-50"
  ></div>
</template>

<style scoped lang="scss">
#viewport.toggled {
  #left-nav {
    width: 280px;
  }
  .offcanvas-backdrop {
    display: block;
  }
}
#left-nav {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  overflow-x: hidden;
  overflow-y: auto;
  width: 0px;
  z-index: 2000;

  .NavLeft {
    width: 280px;
    overflow-x: hidden;
  }
}
.offcanvas-backdrop {
  display: none;
}

@media (min-width: 1910px) {
  // Large
  #viewport.toggled #left-nav {
    width: 0;
  }
  #left-nav {
    width: 285px;
    background-color: transparent;
    z-index: 1;
  }
  .offcanvas-backdrop {
    display: none !important;
  }
  #main-content {
    margin-left: auto !important;
  }
}
</style>
