<template>
  <div v-if="currentRecord" class="edit-form">
    <h4>Vehicle</h4>
    <form>
      <div class="form-group">
        <p>Title: {{ currentRecord.title }}</p>
        <p>Description: {{ currentRecord.description }}</p>
        <p>Vin: {{ currentRecord.vin }}</p>
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentRecord.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentRecord.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteTutorial"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTutorial"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import RecordDatsService from "../services/RecordDatsService";

export default {
  name: "record-details",
  data() {
    return {
      currentRecord: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      RecordDatsService.get(id)
        .then(response => {
          this.currentRecord = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentRecord.id,
        title: this.currentRecord.title,
        description: this.currentRecord.description,
        published: status
      };

      RecordDatsService.update(this.currentRecord.id, data)
        .then(response => {
          this.currentRecord.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTutorial() {
      RecordDatsService.update(this.currentRecord.id, this.currentRecord)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTutorial() {
      RecordDatsService.delete(this.currentRecord.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
	mounted() {
		this.message = '';
		this.getTutorial(this.$route.params.id);
	}
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>