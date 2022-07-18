<template>
    <form class="survey-form" @submit.prevent="submitForm">
        <div class="form-element">
            <h3>Please tell us a bit about yourself</h3>
            <select class="form-input" v-model="profession" required>
                <option value="" disabled selected>Select Profession</option>
                <option value="Developer" >Developer</option>
                <option value="Program Manager">Program Manager</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Manager">Manager</option>
                <option value="Executive">Executive</option>
            </select>
        </div>
        <div class="form-element">
            <h3>Please select your product</h3>
            <select class="form-input" v-model="product" required>
                <option value="" disabled selected>Select Product</option>
                <option value="Ergonomic Keyboard">Keyboard</option>
                <option value="Mouse">Mouse</option>
                <option value="Monitor">Monitor</option>
                <option value="Desk">Desk</option>
                <option value="Paper">Paper</option>
            </select>
        </div>
        <div class="form-element">
            <h3>How satisfied are you with this product?</h3>
            <div>
                <input id="not-satisfied" name="satisfaction" type="radio" value="Not satisfied" v-model="rating" required/>
                <label for="not-satisfied">Not satisfied</label>
            </div>
            <div>
                <input id="satisfied" name="satisfaction" type="radio" value="Satisfied" v-model="rating" />
                <label for="satisfied">Satisfied</label>
            </div>
            <div>
                <input id="very-satisfied" name="satisfaction" type="radio" value="Very satisfied" v-model="rating" />
                <label for="very-satisfied">Very satisfied</label>
            </div>            
        </div>
        <div class="form-element">
            <h3>Please share any comments you have</h3>
            <textarea id="comments" name="comments" rows="5" v-model="comments" />
        </div>
        <h3>May we publish your opinion?</h3>
            <div>
                <input id="yes" name="publish-permission" type="radio" value="true"  v-model="mayPublish" />
                <label for="yes">Yes</label>
            </div>
            <div>
                <input id="no" name="publish-permission" type="radio" value="false"  v-model="mayPublish" />
                <label for="no">No</label>
            </div>
        <button>Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            profession: '',
            product: '',
            rating: null,
            comments: '',
            mayPublish: true,
        }        
    },
    computed: {
        creatorName() {
            return this.$store.getters.userName;
        },
        creatorId() {
            return this.$store.getters.userId;
        },
    },
    methods: {
        resetForm() {
            this.profession = '';
            this.rating = null;
            this.comments = '';
            this.mayPublish = true
        },
        submitForm() {
            try {
                const formData = {
                    creatorName: this.creatorName,
                    creatorId: this.creatorId,
                    profession: this.profession,
                    product: this.product,
                    rating: this.rating,
                    comments: this.comments,
                    mayPublish: this.mayPublish
                };
                console.log(formData)
                this.$store.dispatch('surveys/createSurvey', formData);
                this.resetForm();
                this.$router.push('/surveys'); 
            } catch (error) {
                console.log(error)
            }                       
        }
    }
}
</script>

<style scoped>
.survey-form {
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
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    border-radius: 5px;
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
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-left: 30%;
  margin-bottom: 10px;
  cursor: pointer;
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