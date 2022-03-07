<template>    
    <ul>
        <h2>Completed Surveys</h2>
        <survey-item
        v-for="survey in surveyArray"
        :key="survey.id"
        :_id="survey._id"
        :name="survey.creatorName"
        :profession="survey.profession"
        :product="survey.product"
        :rating="survey.rating"
        :comments="survey.comments"
        :creatorId="survey.creatorId"
        :mayPublish="survey.mayPublish"
        ></survey-item>
        <p v-if="!areSurveys">There are no surveys to see. Create one to populate the list!</p>
    </ul>    
</template>

<script>
import SurveyItem from './SurveyItem.vue'

export default {
    components: {
        SurveyItem
    },
    computed: {
        surveyArray() {
            return this.$store.getters['surveys/surveys'];            
        },
        areSurveys() {
            if (this.surveyArray.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        async loadSurveys() {
            await this.$store.dispatch('surveys/getSurveys');          
        }       
    },
    created() {
        this.loadSurveys();        
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    float: left;
    width: 800px;
    height: calc(90vh - 60px);
    background-image: linear-gradient(to bottom right,rgb(235, 235, 235), rgb(165, 165, 165));
    background-color: #ddd;
    border-radius: 15px;
    padding: 20px;
    margin-left: calc(50% - 400px);
    margin-top: 45px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow-y: auto;
}

h2 {
    margin: 0 0 10px 0;
    text-align: center;
}

p {
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-top: 200px;
}
</style>