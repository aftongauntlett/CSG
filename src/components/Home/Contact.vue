<template>
  <b-form class="contactForm container-fluid pt-5" @submit="onSubmit">
    <b-form-input class="mb-4" v-model="form.name" placeholder="Enter your name" ></b-form-input>
        <b-form-textarea
            class="mb-4"
            id="textarea-large"
            v-model="form.text"
            placeholder="Send us a Message"
            rows="3"
            max-rows="6"
        ></b-form-textarea>
      <div class="d-flex justify-content-center pb-5 pt-2">
          <b-button class="formButton" type="submit" variant="primary" v-b-modal.my-modal>SUBMIT</b-button>
        <b-modal id="my-modal">Thank you!</b-modal>
      </div>
    </b-form>
</template>

<script>
import Clock from "@/components/Home/Clock";
import firebase from "firebase"
export default {
  components: {Clock},
  data() {
    return {
      form: {
       text: '',
        name: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      firebase.auth().signInAnonymously()
      firebase.database().ref("contactForm").push(this.form)
      event.target.reset();
    },


    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.text = ''
      this.form.name = ''
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
  letter-spacing: 2px;
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

.contactUs {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 3px;
  color: #6b6d7a;
}
</style>
