<!-- dvg/frontend/src/components/Post.vue -->
<template>
  <div class="card post shadow" v-if="post">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ post.subtitle }}</h6>
      <p class="post__description">{{ post.metaDescription }}</p>
      <MarkdownDisplay :markdown="post.body"></MarkdownDisplay>
      <TagBadge :tag="tag.name" v-for="tag in post.tags" :key="tag.name"></TagBadge>
    </div>
    <div class="card-footer text-end">
      <small class="text-muted">{{ displayableDate(post.publishDate) }} </small><AuthorLink :author="post.author" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import AuthorLink from '@/components/AuthorLink'


export default {
  name: 'MyPost',
  components: {
    AuthorLink,
  },
  data () {
    return {
      post: null,
      loading: true,
    }
  },
  methods: {
    displayableDate (date) {
      return new Intl.DateTimeFormat(
        'ru-RU',
        { dateStyle: 'full' },
      ).format(new Date(date))
    }
  },

  async created() {
    const post = await this.$apollo.query({
        query: gql`query ($slug: String!) {
          postBySlug(slug: $slug) {
            title
            subtitle
            publishDate
            metaDescription
            slug
            body
            author {
              user {
                username
                firstName
                lastName
              }
            }
            tags {
              name
            }
          }
        }`,
        variables: {
          slug: this.$route.params.slug,
        },
    })
    this.post = post.data.postBySlug;
    this.loading = false;
  }
}
</script>
<style>
</style>