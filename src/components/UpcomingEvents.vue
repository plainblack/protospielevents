<template>
  <div class="hello">
    <div class="lead">Upcoming Events</div>
    <div>
      <div v-for="item in events" :key="item.id" class="mb-3">
          <a :href="'https://tabletop.events'+item.view_uri">{{item.name}}</a>
          <br>
          <small>{{item.geolocation.name}} on {{item.start_date.substr(0,10)}}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UpcomingEvents",
  data() {
    return { 
      events : [],
    }
  },
  mounted() {
    const self = this;
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      self.events = response.result.items;
      var out = '';
      var items = response.result.items;
    }
  };
  xhttp.open("GET", "https://tabletop.events/api/convention?query=Protospiel&_include_related_objects=geolocation", true);
  xhttp.send();

  }
});
</script>

<style scoped>

</style>
