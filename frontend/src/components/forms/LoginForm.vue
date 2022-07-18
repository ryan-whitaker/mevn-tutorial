<template>
    <form class="login-form" @submit.prevent="login">
        <h2>Login</h2>
        <div class="form-element">
            <input type="text" class="form-input" placeholder="Email" v-model="email">
        </div>
        <div class="form-element">
            <input type="password" class="form-input" placeholder="Password" v-model="password">
        </div>
        <p :class="{ 'active': (isError === true) }">{{ errorMessage }}</p>
        <button>Login</button>        
    </form>    
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        async login() {
            this.isError = false;
            this.errorMessage = null;
            
            const actionPayload = {
                mode: 'login',
                email: this.email,
                password: this.password
            };
            this.errorMessage = await this.$store.dispatch('auth', actionPayload);
            if (this.errorMessage !== null) {
                this.isError = true;
            } else {
                this.$router.replace('/surveys');
            }
            
        }
    }
}
</script>

<style scoped>
.login-form {
    height: auto;
    width: 500px;
    background-color: #ddd;
    border-radius: 15px;
    margin-top: 100px;
    margin-left: calc(50% - 250px);
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    float: left;
}

.form-element {
    margin-bottom: 20px;
}

h2, h3 {
    text-align: center;
    color: #292929;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-input {
    width: 80%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 5px;
    font-size: 20px;
    border: none;
    padding-left: 10px;
    margin-left: 10%;
}

button {
    color: #fff;
    height: 50px;
    width: 130px;
    background-color: #197BBD;
    border: none;
    cursor: pointer;
    font-size: 20px;
    border-radius: 5px;
    transition: .2s;
    margin-left: calc(50% - 65px);
}

button:hover {
    background-color: #F64740;
    transition: .2s;
}

p {
    width: 100%;
    color: red;
    text-align: center;
    display: none;
}

.active {
    display: block;
}
</style>