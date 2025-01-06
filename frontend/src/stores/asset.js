import { defineStore } from 'pinia'

export const useAssetStore = defineStore('asset', {
  state: () => ({
    assets: [
      {
        id: 1,
        name: 'Sample Image',
        type: 'image',
        url: 'https://picsum.photos/200',
        tags: ['sample', 'image'],
        description: 'A sample image'
      },
      {
        id: 2,
        name: 'Document.pdf',
        type: 'pdf',
        url: '#',
        tags: ['document', 'pdf'],
        description: 'A sample PDF document'
      }
    ]
  }),
  
  actions: {
    async fetchAssets() {
      // Implement API call to fetch assets
    },
    
    async uploadAsset(asset) {
      // Implement API call to upload asset
    },
    
    async deleteAsset(assetId) {
      // Implement API call to delete asset
    }
  }
})