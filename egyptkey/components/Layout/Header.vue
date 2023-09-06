<template>
  <div class="app-header">
    <v-navigation-drawer
      v-model="drawer"
      style="z-index: 999999999"
      :location="isRight"
      :disable-resize-watcher="true"
      :disable-route-watcher="true"
      app
      temporary
    >
      <v-list class="text-center pa-0">
        <v-list-item class="px-2 mb-5" to="/">
          <!-- <v-list-item-avatar size="100" class="mx-auto" color="white"> -->
          <img
            contain
            src="~/assets/images/logo.webp"
            alt="photo"
            width="100%"
          />
          <!-- </v-list-item-avatar> -->
        </v-list-item>
      </v-list>
      <v-list flat color="transparent" class="app-header__list">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="px-0 justify-center d-flex"
          dense
          :to="item.to"
        >
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      elevation="0"
      fixed
      app
      style="z-index: 16; width: 100%; left: 0; right: 0"
    >
      <v-container class="pa-0">
        <LazyNavbar :items="items" class="hidden-sm-and-down" />
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          small
          @click.stop="drawer = !drawer"
        />
      </v-container>
    </v-app-bar>
  </div>
</template>



<script>
// import { useDisplay } from 'vuetify'
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      isRight: "right",
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    items() {
      return [
        {
          title: this.$t("routes.home"),
          to: "/",
        },
        {
          title: this.$t("routes.tours"),
          to: "/tourist-destinations",
        },

        {
          title: this.$t("routes.article_and_activities"),
          to: "/blogs",
          type: "client",
        },
        {
          title: this.$t("routes.tourism_places"),
          to: "/places",
          type: "client",
        },
      ];
    },
    display() {
      return useDisplay();
    },
  },
  watch: {
    "$i18n.locale": {
      handler(value) {
        if (value === "en") {
          this.$vuetify.locale.rtl.fa = false;
          // this.isRight = "left";
        } else {
          this.$vuetify.locale.rtl.fa = true;
          // this.isRight = "right";
        }
      },
      immediate: true,
    },
  },
};
</script>