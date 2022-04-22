<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn text icon v-on="on">{{ currentLocal }}</v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, key) in langs"
        :key="key"
        @click="setLocale(key)"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { useLocaleState } from "@/composables/locale";

export default {
  data() {
    return {
      langs: {
        fr_FR: "Français",
        en_US: "English",
        ar_DZ: "العربية"
      }
    };
  },
  methods: {
    setLocale(locale) {
      this.locale = locale;
      // Set the language of i18n and vuerify plugins
      this.$i18n.locale = this.shortLocale;
      this.$vuetify.lang.current = this.shortLocale;
      // Switch text direction
      if (this.shortLocale === "ar") this.$vuetify.rtl = true;
      else this.$vuetify.rtl = false;
    }
  },
  computed: {
    currentLocal() {
      return this.shortLocale.toUpperCase();
    }
  },
  setup() {
    const { shortLocale, locale } = useLocaleState();

    return {
      locale,
      shortLocale
    };
  }
};
</script>
