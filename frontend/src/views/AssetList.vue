<template>
  <v-container>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Assets</h1>
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Search assets"
        single-line
        hide-details
        class="max-w-md"
      ></v-text-field>
    </div>

    <v-row>
      <v-col v-for="asset in filteredAssets" :key="asset.id" cols="12" sm="6" md="4" lg="3">
        <v-card>
          <v-img
            v-if="asset.type === 'image'"
            :src="asset.url"
            height="200"
            cover
          ></v-img>
          <v-icon
            v-else
            size="100"
            class="ma-4"
          >
            {{ getFileIcon(asset.type) }}
          </v-icon>
          
          <v-card-title>{{ asset.name }}</v-card-title>
          
          <v-card-subtitle>
            <v-chip
              v-for="tag in asset.tags"
              :key="tag"
              class="mr-1 mb-1"
              size="small"
            >
              {{ tag }}
            </v-chip>
          </v-card-subtitle>
          
          <v-card-actions>
            <v-btn icon="mdi-download" variant="text" @click="downloadAsset(asset)"></v-btn>
            <v-btn icon="mdi-delete" variant="text" @click="deleteAsset(asset)"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue'
import { useAssetStore } from '../stores/asset'

export default {
  name: 'AssetList',
  
  setup() {
    const assetStore = useAssetStore()
    const search = ref('')

    const filteredAssets = computed(() => {
      return assetStore.assets.filter(asset => 
        asset.name.toLowerCase().includes(search.value.toLowerCase()) ||
        asset.tags.some(tag => tag.toLowerCase().includes(search.value.toLowerCase()))
      )
    })

    const getFileIcon = (type) => {
      switch (type) {
        case 'pdf':
          return 'mdi-file-pdf-box'
        case 'doc':
          return 'mdi-file-word-box'
        default:
          return 'mdi-file'
      }
    }

    const downloadAsset = (asset) => {
      // Implement download logic
      console.log('Downloading:', asset.name)
    }

    const deleteAsset = (asset) => {
      // Implement delete logic
      console.log('Deleting:', asset.name)
    }

    return {
      search,
      filteredAssets,
      getFileIcon,
      downloadAsset,
      deleteAsset
    }
  }
}
</script>