const app = Vue.createApp({
  data(){
      return{
          firstname:'John',
          lastname: 'Doe',
          email: 'john@gmail.com',
          gender: 'male',
          picture: 'https://randomuser.me/api/portraits/lego/1.jpg'
      }
  } 
})

app.mount('#app');