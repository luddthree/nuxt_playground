<script lang="ts" setup>
const newBookmark = ref("")

const { pending, data: bookmarks } = useAsyncData(async () =>
  $fetch("/api/bookmarks"))

const addBookmark = async () => {
if (bookmarks.value == null) return;
if (newBookmark.value == "") return;

const bookmark = await $fetch('/api/bookmarks/create', {
  method: 'post',
  body: {
    url: newBookmark.value,
  }});

  bookmarks.value.push(bookmark);
}

</script>


<template>
  <main>
    <form @submit.prevent>
      <label for="url">Add bookmarks</label>
      <input v-model="newBookmark" type="url" name="url" id="url" required />
      <button @click="addBookmark">Add</button>
      </form>

      <!-- <div>{{ newBookmark }}</div> -->

    <div v-if="pending">Loading...</div>

    <div v-else-if="bookmarks && bookmarks.length > 0">
      <ul>
        <li v-for="bookmark in bookmarks" :key="bookmark.id">
          {{ bookmark.url }}
        </li>
      </ul>
    </div>

    <div v-else>No bookmarks found</div>
  </main>
</template>

