<template>
  <div>
    <h1>Contattami pezzo di merda</h1>
    <div v-if="success" class="alert alert-success">
      Messaggio inviato correttamente
    </div>
    <form action="" method="post" @submit.prevent="sendForm()">
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="Inserisci la mail"
      />
      <div v-if="errors && errors.email">
        <ul>
          <li
            v-for="(errorText, index) in errors.email"
            :key="'error_email_' + index"
          >
            {{ errorText }}
          </li>
        </ul>
      </div>
      <input
        v-model="name"
        type="text"
        name="name"
        placeholder="Inserisci il nome"
      />
      <div v-if="errors && errors.name">
        <ul>
          <li
            v-for="(errorText, index) in errors.name"
            :key="'error_name_' + index"
          >
            {{ errorText }}
          </li>
        </ul>
      </div>
      <textarea
        v-model="message"
        name="message"
        placeholder="Inserisci il messaggio"
      ></textarea>
      <div v-if="errors && errors.message">
        <ul>
          <li
            v-for="(errorText, index) in errors.message"
            :key="'error_message_' + index"
          >
            {{ errorText }}
          </li>
        </ul>
      </div>
      <button type="submit" :disabled="sending">Invia</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactsPage",
  data() {
    return {
      email: "",
      name: "",
      message: "",
      sending: false,
      success: false,
      errors: undefined,
    };
  },
  methods: {
    sendForm() {
      this.sending = true;
      this.success = false;
      window.axios
        .post("/api/contacts", {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then(({ data, status }) => {
          console.log(data);
          this.sending = false;
          if (status === 200) {
            this.success = data.success;
            if (!data.success) {
              this.errors = data.errors;
              console.log(this.errors);
            } else {
              this.message = "";
              this.email = "";
              this.name = "";
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
/*  php artisan make:mail NewContact    */
</style>
