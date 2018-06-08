new Vue({
  el: "#notebook",
  data() {
    return {
      content: (this.content =
        localStorage.getItem("content") || " ** You can write in Markdown ** "),
      notes: []
    };
  },
  created() {
    this.content =
      localStorage.getItem("content") || "**You can write in Markdown**";
  },
  computed: {
    notePreview() {
      return marked(this.content);
    }
  },
  watch: {
    content(val, oldVal) {
      console.log("new note:", val, "old note:", oldVal);
      console.log("saving note:", this.content);
      localStorage.setItem("content", this.content);
    }
  },
  methods: {
    saveNote() {
      console.log("saving note: ", this.content);
      localStorage.setItem("content", this.content);
    },
    addNote() {
      const time = Date.now()
      const note = {
        id: String(time),
        title: "New note" + (this.notes.length + 1),
        content:
          "**His!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!",
        created: time,
        favorite: false
      };
      this.notes.push(note);
    }
  }
});
