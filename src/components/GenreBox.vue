<template>
    <form @submit.prevent="$emit('formSubmit')">
        <select :value="genreDisco"
            v-on:input="$emit('input',$event.target.value)">
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Jazz">Jazz</option>
            <option value="Metal">Metal</option>
        </select>
        <input class="btn btn-outline-success" type="submit">
    </form>
</template>

<script>
export default{
    name: 'GenreBox',

    props:{
        genreDisco: String
    }
}
</script>
