<template>
    <section id="CommentLineContainer">
        <div id="comment-name">
            {{name}}
        </div>
        <div id="comment-content">
            {{comments}}
        </div>
        <div id="comment-time">
            {{time}}
        </div>
        <div></div>
    </section>
</template>

<script>
export default {
  name: 'CommentLine',
  props: {
    name: String,
    comments: String,
    time: String,
  },
};
</script>

<style scoped>

</style>
