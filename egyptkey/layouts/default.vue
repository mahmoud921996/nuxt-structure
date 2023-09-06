<template>
  <main>
    <v-app>
      <!-- header -->
      <LazyLayoutHeader />

      <slot />
      <!-- banner -->
      <!-- download apps -->
      <!-- footer -->
    </v-app>
    <!-- scroll btn -->
  </main>
</template>


<script >
export default {
  name: "DefaultLayout",
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "en" ? "ltr" : "rtl",
      },
    };
  },
};
</script>