<template>
  <v-content>
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Filtra"
        single-line
        hide-details
        solo-inverted
      ></v-text-field>
    <v-data-table :headers="headers" :items="cotacoes" :search="search">
    </v-data-table>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      cotacoes: [],
      search: "",
      headers: [
        { text: "Moeda", value: "code" },
        { text: "Descricao", value: "name" },
        { text: "Máxima", value: "high" },
        { text: "Mínima", value: "low" }
      ]
    };
  },
  mounted() {
    this.moedaExemplo();
  },

  methods: {
    async moedaExemplo() {
      const response = await this.$serviceDashboard.getCotacoes();
      this.cotacoes = this.serialize(response.data);
    },

    serialize(data) {
      let arr = [];
      for (let item in data) {
        arr.push(data[item]);
      }
      return arr;
    }
  }
};
</script>