import { toRefs, usePreferredLanguages, useStorage } from "@vueuse/core";
import { computed } from "vue-demi";

const PreferredLanguages = usePreferredLanguages();

const LocaleStorage = useStorage("ui-state", {
  locale: PreferredLanguages.value[0].split("-")[0]
});

export function useLocaleState() {
  return {
    ...toRefs(LocaleStorage),
    shortLocale: computed(() => LocaleStorage.value.locale.split("_")[0])
  };
}
