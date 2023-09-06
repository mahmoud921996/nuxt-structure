<template>
  <section class="home-intro">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="3">
          <div class="home-intro__title">
            {{ $t("Pack your bag and travel") }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="2" class="px-0 hidden-md-and-down">
          <div class="home-intro__img-wrapper">
            <img
              contain
              alt="photo"
              src="@/assets/images/home/gold-arrow.webp"
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :lg="$i18n.locale === 'ar' ? 4 : 5"
          class="align-self-center px-0"
        >
          <h1 class="home-intro__sub-title">مرحبا بك في Egypt key</h1>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>