<template>
  <v-container>
    <h1 class="text-2xl font-bold mb-6">Upload Asset</h1>
    
    <v-form @submit.prevent="handleUpload">
      <v-file-input
        v-model="files"
        label="Select files"
        multiple
        show-size
        truncate-length="15"
        class="mb-4"
      ></v-file-input>

      <v-text-field
        v-model="tags"
        label="Tags (comma separated)"
        hint="Enter tags separated by commas"
        persistent-hint
        class="mb-4"
      ></v-text-field>

      <v-textarea
        v-model="description"
        label="Description"
        rows="3"
        class="mb-4"
      ></v-textarea>

      <v-btn
        type="submit"
        color="primary"
        :loading="uploading"
        :disabled="!files.length"
      >
        Upload
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useAssetStore } from '../stores/asset'

export default {
  name: 'UploadAsset',
  
  setup() {
    const assetStore = useAssetStore()
    const files = ref([])
    const tags = ref('')
    const description = ref('')
    const uploading = ref(false)

    const handleUpload = async () => {
      uploading.value = true
      try {
        // Implement upload logic
        console.log('Uploading files:', files.value)
        console.log('Tags:', tags.value)
        console.log('Description:', description.value)
      } catch (error) {
        console.error('Upload failed:', error)
      } finally {
        uploading.value = false
      }
    }

    return {
      files,
      tags,
      description,
      uploading,
      handleUpload
    }
  }
}
</script>