// src/plugins/vuetify.js
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#f44336",
        secondary: "#2196f3",
        accent: "#8bc34a",
        error: "#ff2222",
        warning: "#ff9800",
        info: "#03a9f4",
        success: "#ffeb3b",
        background: "#ccc"
      }
    }
  }
};

export default new Vuetify(opts);
