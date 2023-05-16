<template>
<h2>Login Form</h2>

<form  @submit.prevent="login">
  <div class="imgcontainer">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <div v-if="errorMessage" style="color: red;" class="error">{{ errorMessage }}</div>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" id="username" v-model="username" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="password" v-model="password" required>
        
    <button type="submit" >Login</button>
    <span class="psw">Register <router-link to="/register" >
             Register
      </router-link></span>
  </div>
  
</form>
</template>
<script>
     export default {
      name: 'login',
      data() {
        return {
          username: 'admin',
          password: '123',
          errorMessage: ''
        };
      },
      methods: {
       login() {
      // Perform login logic here, e.g., sending a request to the server
      
      // Simulating login with a delay
      setTimeout(() => {
        // Check username and password
        if (this.username === 'admin' && this.password === '123') {
          localStorage.setItem('username', this.username)
          console.log(this.username);
         this.$router.push('/'); // Redirect to the dashboard page
        } else {
          // Failed login
          this.errorMessage = 'Invalid username or password';
        }
      }, 1000); // Delay of 1 second
    }
      }
     }
</script>
<style>
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 8%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>