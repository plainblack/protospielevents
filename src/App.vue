<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">Protospiel.Events</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainnavcontent" aria-controls="mainnavcontent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainnavcontent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/attending">Attending</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/organizing">Organizing</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/marketing">Marketing</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/upcoming-events">Upcoming Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/policies">Policies</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bingo">Bingo</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-9">
        <router-view />
      </div>
      <div class="col-md-6 col-lg-3">
        <UpcomingEvents/>
      </div>

    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UpcomingEvents from "@/components/UpcomingEvents.vue"; // @ is an alias to /src

export default defineComponent({
  name: "App",
  components: {
    UpcomingEvents,
  },
});
</script>

<style></style>
