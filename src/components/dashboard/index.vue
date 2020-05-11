<template>
  <v-card-text>
    <v-row>
      <v-col cols="6">
        <v-card-title>Text Fields com regras e mascaras</v-card-title>
        <v-card>
          <v-card-text>
            <v-text-field
              outlined
              label="CPF"
              v-model="form.cpf"
              v-mask="masks.cpf"
              :rules="cpfRules"
            />
            <v-text-field outlined label="Email" v-model="form.email" :rules="emailRules" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card-title>Cotacoes</v-card-title>
        <app-dashboard-moedas />
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
import { mask } from "vue-the-mask";
import helpers from "@/libraries/helpers";

export default {
  directives: {
    mask
  },

  data() {
    return {
      masks: {
        cpf: "###.###.###-##"
      },
      form: {
        cpf: "",
        email: ""
      },
      cpfRules: [cpfStr => helpers.isCPF(cpfStr) || "Não é um cpf válido"],
      emailRules: [
        emailStr => helpers.isEmail(emailStr) || "Não é um email válido"
      ]
    };
  },

  computed: {
    mobile() {
      return this.$vuetify.breakpoint.name === "xs" ? true : false;
    }
  }
};
</script>