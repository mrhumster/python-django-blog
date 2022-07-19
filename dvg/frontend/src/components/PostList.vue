<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item py-0 my-0 shadow" v-for="post in publishedPosts" :key="post.title">
        <div class="py-1">
          <router-link :to="`/post/${post.slug}`" class="post__link">«{{ post.title }}: {{ post.subtitle }}»
          </router-link>
          <small>
            by <AuthorLink :author="post.author" class="author__link pe-1" />
          </small>
          <small class="text-muted postition-end">{{ displayableDate(post.publishDate) }}</small>
          <TagBadge :tag="tag.name" v-for="tag in post.tags" :key="tag.name"></TagBadge>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AuthorLink from '@/components/AuthorLink'

export default {
  name: 'PostList',
  components: {
    AuthorLink,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    showAuthor: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    publishedPosts () {
      return this.posts.filter(post => post.published)
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
}
</script>
<style>
  .badge-link {
    color: white;
    text-decoration: none;
  }
  .post__link {
    text-decoration: none;
  }
  .author__link {
    text-decoration: none;
  }
</style>