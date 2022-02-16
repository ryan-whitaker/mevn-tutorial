<template>
    <li :class="{ 'user-created': (isUserCreated === true), 'invisible': (mayPublish === false) }">
        <div class="survey-results" >
            <div class="delete-container" :class="{ 'inactive': (isUserCreated === false) }">                
                <button @click="removeListItem(_id)" class="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
            <div class="item-container">
                <div class="item-label">Name</div>
                <div class="item-value">{{ name }}</div>
            </div>
            <div class="item-container">
                <div class="item-label">Profession</div>
                <div class="item-value">{{ profession }}</div>
            </div>
            <div class="item-container">
                <div class="item-label">Product</div>
                <div class="item-value">{{ product }}</div>
            </div>
            <div class="item-container">
                <div class="item-label">Rating</div>
                <div class="item-value">{{ rating }}</div>
            </div>
            <div class="item-container">
                <div class="item-label">Comments</div>
                <div class="item-value">{{ comments }}</div>
            </div>
            <input type="hidden" value="{{ creatorId }}">
        </div>        
    </li>
</template>

<script>
export default {
    props: ['name', 'profession', 'product', 'rating', 'comments', '_id', 'creatorId', 'mayPublish'],       
    computed: {
        isUserCreated() {            
            const userId = this.$store.getters.userId
            if (this.creatorId === userId) {

                return true;
            } else {
                return false;
            }
        }
         
    },
    methods: {
        async removeListItem(id) {
            const payload = { id: id };
            await this.$store.dispatch('surveys/deleteSurvey', payload);
        },
    },
}
</script>

<style scoped>

li {
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to bottom right,#197BBD, #0e5c91);
    /* background-color: #197BBD; */
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.user-created {
    background-image: linear-gradient(to bottom right,#19bdb5, #0e9191);
}

.inactive {
    display: none;
}

.invisible {
    opacity: .6;
}

.survey-results {
    width: 100%;
    height: 80px;
    float: left;
}

.delete-container {
    width: 10%;
    height: 100%;
    float: left;
    text-align: center;
    padding-top: 37.5px;
}

.delete-btn {
    background-color: transparent;    
    border: none;
}

.fa-trash {
    margin-top: ;
    color: #fff;
    font-size: 25px;
    cursor: pointer;
}

.fa-trash:hover {
    color: #F64740;
}

.item-container {
    float: left;
    width: calc(90% / 5);
    text-align: center;
    color: #292929;
    padding: 15px;
}

.item-label {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 5px;
}

.item-value {
    color: #fff;
    font-size: 17px;
}

</style>