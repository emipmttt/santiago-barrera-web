<template>
  <v-dialog v-model="active" persistent max-width="800">
    <v-card>

      <v-card-title>
        Create new article
      </v-card-title>

      <v-card-text class="mt-4">
        <v-text-field
          dense
          label="Title"
          outlined
          v-model="title"
        />

        <div>
          <div
            class="quill-editor"
            v-quill:myQuillEditor="editorOption"
            @change="onEditorChange($event)"
            ref="editor"/>
        </div>


      </v-card-text>


      <v-card-actions>
        <v-spacer />
        <v-btn text @click="closeModal">
          Cancel
        </v-btn>

        <v-btn text @click="createArticle" color="#FF8D3B" :loading="loading">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateArticleModal",
  props: ["active"],

  data: () => ({
    title: '',
    body: '',
    loading: false,

    editorOption: {
      modules: {
        toolbar: {
          container: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],
            ['link', 'image'],

            [{'header': 1}, {'header': 2}], // custom button values
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'script': 'sub'}, {'script': 'super'}], // superscript/subscript
            [{'indent': '-1'}, {'indent': '+1'}], // outdent/indent
            [{'direction': 'rtl'}], // text direction

            [{'size': ['small', false, 'large', 'huge']}], // custom dropdown
            [{'header': [1, 2, 3, 4, 5, 6, false]}],

            [{'color': []}, {'background': []}], // dropdown with defaults from theme
            [{'font': []}],
            [{'align': []}],

            ['clean'] // remove formatting button
          ],
        }
      }
    }
  }),

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },

    onEditorChange($e) {
      this.body = $e.html;
    },

    async createArticle() {
      this.loading = true;
      try {
        await axios.post("/api/article/create", {
          title: this.title,
          body: this.body
        });

        this.closeModal();

      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>

</style>
