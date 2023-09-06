<template>
  <v-list flat style="background-color: transparent">
    <v-list-item class="px-0 justify-center">
      <v-btn class="px-2 d-flex align-center justify-center" text to="/offers">
        <v-icon left>$offerIcon</v-icon>
        <span class="mx-2"> {{ $t("buttons.offers") }}</span>
      </v-btn>
    </v-list-item>
    <v-list-item class="justify-center px-0">
      <v-menu
        max-width="200px"
        location="bottom"
        transition="slide-x-transition"
      >
        <template #activator="{ props }">
          <v-btn width="100" text v-bind="props">
            <span>
              <!-- <template v-if="form.currency">
                {{ form.currency.code }}
              </template>
              <template v-else>
              </template> -->
              {{ $t("buttons.currencies") }}
              <!-- {{ $t("buttons.currencies") }} -->
            </span>
            <v-icon right x-small>$arrowDown</v-icon>
          </v-btn>
        </template>
        <!-- <v-list class="pa-0">
          <v-list-item
            v-for="(item, index) in sharedCurrencies"
            :key="index"
            :active-class="
              form.currency && form.currency.id === item.id ? 'active-item' : ''
            "
            :input-value="item.id"
            @click="onSelectCurrency(item)"
          >
            <v-list-item-title
              class="d-flex align-center justify-center text-capitalize"
              style="cursor: pointer"
              v-text="item.name"
            />
          </v-list-item>
        </v-list> -->
      </v-menu>
    </v-list-item>
    <v-list-item class="justify-center px-0">
      <v-menu location="bottom" transition="slide-x-transition">
        <template #activator="{ props }">
          <v-btn width="100" text v-bind="props">
            <span>
              <v-icon>{{ currentLocale.icon }}</v-icon>
            </span>
            <v-icon right x-small>$arrowDown</v-icon>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item
            v-for="(locale, index) in $i18n.locales"
            :key="index"
            @click="onChangeLanguage(locale)"
            :active-class="
              currentLocale.code === locale.code ? 'active-item' : ''
            "
            :input-value="locale.code"
          >
            <v-list-item-title
              style="cursor: pointer"
              class="d-flex align-center justify-center"
            >
              <span class="text-capitalize">{{ locale.code }}</span>
              <v-icon class="px-2" size="x-large">{{ locale.icon }}</v-icon>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
    <v-list-item class="justify-center px-0">
      <v-menu bottom right location="bottom" transition="slide-x-transition">
        <template #activator="{ props }">
          <v-btn
            elevation="0"
            class="text-capitalize profile-button"
            v-bind="props"
          >
            <v-icon color="white"> mdi-account </v-icon>
          </v-btn>
        </template>

        <!-- <v-list class="py-0 profile-list">
          <v-list-item
            v-if="$auth.loggedIn"
            :to="localePath('/profile')"
            class="bordered-bottom"
          >
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("routes.my_profile") }} </span>
              </small>
            </v-list-item-title>
          </v-list-item>

          <v-list-item
            v-if="$auth.loggedIn"
            class="bordered-bottom"
            @click="handleLogout"
          >
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("buttons.logout") }} </span></small
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!$auth.loggedIn" :to="localePath('/login')">
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("buttons.login") }} </span></small
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="!$auth.loggedIn" :to="localePath('/signup')">
            <v-list-item-title class="d-flex justify-space-between">
              <small>
                <span class="px-3">{{ $t("buttons.register") }} </span></small
              >
            </v-list-item-title>
          </v-list-item>
        </v-list> -->
      </v-menu>
    </v-list-item>
  </v-list>
</template>



<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locales.find((el) => el.code === this.$i18n.locale);
    },
  },
  methods: {
    onChangeLanguage(locale) {
      this.$router.push(this.switchLocalePath(locale.code));
      // this.$nuxt.refresh();
      // window.location.reload();
      this.$nextTick(() => {});
    },
  },
};
</script>