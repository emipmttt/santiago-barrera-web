<template>
  <v-dialog v-model="active" persistent max-width="800" scrollable>
    <v-card>
      <v-card-title>
        Update Article
      </v-card-title>

      <v-card-text class="mt-4">
        <v-text-field
          dense
          label="Title"
          outlined
          v-model="article.title"
        />

        <div>
          <div
            class="quill-editor"
            v-quill:myQuillEditor="editorOption"
            @change="onEditorChange($event)"
            ref="editor"
          >
            <div v-html="article.body" />
          </div>
        </div>

      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn color="#FF8D3B" dark @click="updateArticle" :loading="loading">
          Save
        </v-btn>

        <v-btn color="#FF8D3B" :disabled="loading" outlined @click="closeModal">
          CLOSE
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import _id from "../../pages/project/_id";

export default {
  name: "updateArticleModal",
  props: ["active", "article"],

  data: () => ({
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

    async updateArticle() {
      this.loading = true;
      try {
        await axios.put("/api/article/" + this.article._id, {
          title: this.article.title,
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
