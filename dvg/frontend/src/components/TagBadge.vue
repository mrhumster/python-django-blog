<template>
	<span class="badge bg-primary my-0 mx-1"><router-link :to="`/tag/${tag}`" class="badge-link">#{{ tag }}</router-link></span>
</template>
<script>
export default {
	name: 'TagBadge',
	props: {
		tag: {
			type: String,
			required: true
		}
	}
}
</script>
<style>
</style>