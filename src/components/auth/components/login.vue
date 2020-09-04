<template>
  <section>
    <v-card width="300">
      <v-card-text>
        <form>
          <center>
            <app-indentidade :full="true" />
          </center>
          <v-container fluid>
            <v-row justify="space-around">
              <v-col cols="12">
                <v-text-field outlined label="Usuário" v-model="form.model.username"></v-text-field>
                <v-text-field
                  outlined
                  label="Senha"
                  v-model="form.model.password"
                  :append-icon="show ? icons.eyeOn : icons.eyeOff"
                  @click:append="show = !show"
                  :type="show ? 'text' : 'password'"
                  @keyup.enter="onSignIn()"
                />
              </v-col>
              <v-col cols="12">
                <v-btn
                  color="primary"
                  :loading="form.processing"
                  @click.stop="onSignIn()"
                  block
                >Acessar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </form>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
import { mask } from "vue-the-mask";
import { mdiEyeOff, mdiEye } from "@mdi/js";

export default {
  name: "Login",
  directives: {
    mask
  },
  data() {
    return {
      form: {
        model: {
          username: "",
          password: ""
        },
        processing: false
      },
      show: false,
      icons: {
        eyeOff: mdiEyeOff,
        eyeOn: mdiEye
      }
    };
  },
  methods: {
    async onSignIn() {
      this.setProgress(true);
      await this.$serviceAuth
        .login(this.form.model)
        .then(async res => {
          this.$load.snackbar("Logado com sucesso");
          await this.$serviceAuth.logStoreDispache(res.data);
          this.$router.push("matricula");
        })
        .catch(err => {
          this.setProgress(false);
          this.$load.snackbarError(err);
        });
    },
    setProgress(status) {
      this.form.processing = status;
    }
  }
};
</script>
