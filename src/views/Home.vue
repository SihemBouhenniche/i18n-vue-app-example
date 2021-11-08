<template>
  <v-container>
    <v-card outlined class="mx-md-6 py-6">
      <v-row align="center">
        <v-col cols="12" md="4">
          <div class="text-center">
            <img :src="require('@/assets/Inspirateur.svg')" width="300px" />
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <v-card-title>{{ $t("content.title") }}</v-card-title>

          <v-card-subtitle>
            <v-alert
              flat
              colored-border
              color="green accent-4"
              :border="$vuetify.rtl ? 'right' : 'left'"
            >
              {{ $t("content.citation.cite") }}

              <p
                :class="$vuetify.rtl ? 'text-left' : 'text-right'"
                class="caption"
              >
                {{ $t("content.citation.author") }}
              </p>
            </v-alert>
          </v-card-subtitle>

          <v-card-text>
            {{ $t("content.paragraph") }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {},

  data() {
    return {
      personalities: [
        {
          icon: "",
          title: "",
          description: ""
        }
      ]
    };
  }
};
</script>
