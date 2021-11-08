<template>
  <v-app>
    <v-app-bar dense dark app>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ $t("title") }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <lang-switcher-button></lang-switcher-button>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app dark class="white--text text-center">
      <v-card-text class="white--text pt-0">
        <v-btn text href="https://www.16personalities.com">
          {{ $t("thanks", { url: "www.16personalities.com" }) }}
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
import LangSwitcherButton from "@/components/LangSwitcherButton.vue";
import { useLocaleState } from "@/composables/locale";
export default {
  name: "App",

  components: { LangSwitcherButton },

  data() {
    return {};
  },

  setup() {
    const { shortLocale, locale } = useLocaleState();

    return {
      locale,
      shortLocale
    };
  },

  created() {
    this.$i18n.locale = this.shortLocale;
    this.$vuetify.lang.current = this.shortLocale;
    if (this.shortLocale === "ar") this.$vuetify.rtl = true;
    else this.$vuetify.rtl = false;
  }
};
</script>
