<template>
    <div class="project-list-page">
    src/components/pages/project-list-page/index.vue<br>    
    <router-link to="/app/project">project-page</router-link><br>
    
    <router-link to="/app/manage-plan">manage-plan-page</router-link><br>
    
    <router-link to="/app/manage-member">manage-member-page</router-link><br>
    
    <router-link to="/app/edit-profile">edit-profile-page</router-link><br>
    
    </div>
</template>

<script>
import StyledCompo from './style';
export default {
    name: 'ProjectListPage',
    props: {

    },
    components:{
        
    }
}
</script>

