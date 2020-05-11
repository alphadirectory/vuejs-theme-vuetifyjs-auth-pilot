<template>
  <v-app>
    <div>
      <v-toolbar fixed color="grey darken-3" dark class="mb-20" v-if="stateAuth.logged" dense>
        <app-indentidade />
        <v-spacer />
        <v-btn icon v-for="(item, i) in menu" :key="i" @click="redirect(item.ref)">
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
        <v-icon @click="switchLogOut()">{{icons.exit}}</v-icon>
      </v-toolbar>
      <router-view />
      <app-full-loader />
      <app-snackbar />
      <v-dialog v-model="logoutDialog" width="500">
        <app-logout @logoutCancel="logoutCancel" />
      </v-dialog>
    </div>
  </v-app>
</template>
<script>
import { mdiExitToApp, mdiApps } from "@mdi/js";
export default {
  name: "App",
  data() {
    return {
      icons: {
        exit: mdiExitToApp
      },
      logoutDialog: false,
      menu: [
        { icon: mdiApps, ref: "dashboard" },
      ]
    };
  },
  methods: {
    logoutCancel() {
      this.switchLogOut();
    },
    switchLogOut() {
      this.logoutDialog = !this.logoutDialog;
    },
    redirect(ref) {
      this.$router.push(ref);
    }
  },
  computed: {
    stateAuth() {
      return this.$store.getters.auth;
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

