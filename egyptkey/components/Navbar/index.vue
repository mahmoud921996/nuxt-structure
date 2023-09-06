<template>
  <v-toolbar flat color="transparent" class="fix-header px-0 justify-center">
    <v-list flat color="transparent" class="d-sm-flex">
      <v-list-item dense class="px-0">
        <v-list-item-action>
          <nuxt-link exact class="logo d-flex align-center">
            <img src="~/assets/images/logo.webp" height="40px" alt="" />
          </nuxt-link>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-list
      flat
      color="transparent"
      class="d-adjust d-sm-flex justify-space-around px-3"
    >
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        class="px-0 text-center"
        dense
      >
        <v-btn
          exact
          text
          class="text-capitalize on-hover"
          :to="localePath(item.to)"
        >
          <span class="size-12">{{ item.title }}</span>
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-menu transition="slide-x-transition" locaction="bottom">
          <template #activator="{ props }">
            <v-btn text v-bind="props">
              <span> {{ $t("buttons.more") }}</span>
              <v-icon right x-small>$arrowDown</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              exact
              v-for="(item, index) in moreItems"
              :key="index"
              :to="item.link"
            >
              <v-list-item-title v-text="item.title" />
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
    <v-spacer />
    <LazyNavbarDropDowns class="d-flex" />
  </v-toolbar>
</template>



<script>
export default {
  props: ["items"],
  computed: {
    moreItems() {
      return  [
        { title: this.$t("routes.about_us"), link: "/about-us" },
        { title: this.$t("terms_conidtions"), link: "/terms-conditions" },
        { title: this.$t("privacy_policy"), link: "/privacy-policy" },
        { title: this.$t("return_policy"), link: "/return-policy" },
        { title: this.$t("contact_us"), link: "/contact-us" },
      ];
    },
  },
};
</script>