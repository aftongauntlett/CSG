<template>
  <div class="contactForm container-fluid pt-5">
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      <div class="mt-2">{{ text }}</div>
        <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
        ></b-form-textarea>
        <pre class="mt-3 mb-0">{{ text }}</pre>
    <div class="d-flex justify-content-center pb-5 pt-2">
        <b-button class="formButton" type="submit" variant="primary">Submit</b-button>
    </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
      },
      text: ""
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
.formButton {
  background-color: #d8e7ee !important;
  color: black !important;
  font-family: 'Montserrat', sans-serif;
  border: unset !important;
  margin-bottom: 15px;
}

.formButton:hover {
  background-color: #7eaeca !important;
  color: white !important;
  font-family: 'Montserrat', sans-serif;
  border: unset;
}

.contactForm {
  max-width: 700px;
}
</style>
