<template>
    <form class="login-form" @submit.prevent="signup">
        <h2>Sign Up</h2>
        <div class="form-element">
            <input type="text" class="form-input" placeholder="Name" v-model="name" />
        </div>
        <div class="form-element">
            <input type="email" class="form-input" placeholder="Email" v-model="email" />
        </div>
        <div class="form-element">
            <input type="password" class="form-input" placeholder="Password" v-model="password" />
        </div>
        <button>Sign Up</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signup() {
            const body = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            console.log(body)
            const response = await fetch(`${process.env.VUE_APP_EXPRESS_ROUTE}/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            console.log(response)

            const responseData = await response.json();
            console.log(responseData);
        }
    }
}
</script>

<style scoped>
.login-form {
    height: 400px;
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

</style>