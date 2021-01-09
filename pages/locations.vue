<template>
  <main>
    <section class="grid gap-y-10 sm:px-10 sm:gap-y-28 lg:px-14 lg:gap-y-8 xl:px-0">
      <Map v-for="location in locations" :key="location.id" :data="location" />
    </section>
  </main>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Map from '@/components/Map.vue';

  export default Vue.extend({
    layout: 'locations',
    components: {
      Map,
    },
    data() {
      return {
        locations: [
          {
            id: 'CA',
            name: 'Canada',
            address: [
              'Designo Central Office',
              '3886 Wellington Street',
              'Toronto, Ontario M9C 3J5',
            ],
            phone: '+1 253-863-8967',
            email: 'contact@designo.co',
            map: {
              desktop: require('~/assets/locations/desktop/image-map-canada.png'),
              mobile: require('~/assets/locations/mobile/image-map-canada.png'),
            },
            classImg: 'lg:col-start-3',
          },
          {
            id: 'AU',
            name: 'Australia',
            address: ['Designo AU Office', '19 Balonne Street', 'New South Wales 2443'],
            phone: '(02) 6720 9092',
            email: 'contact@designo.au',
            map: {
              desktop: require('~/assets/locations/desktop/image-map-australia.png'),
              mobile: require('~/assets/locations/mobile/image-map-australia.png'),
            },
            classImg: 'lg:col-start-1',
          },
          {
            id: 'UK',
            name: 'United Kingdom',
            address: ['Designo UK Office', '13  Colorado Way', 'Rhyd-y-fro SA8 9GA'],
            phone: '078 3115 1400',
            email: 'contact@designo.uk',
            map: {
              desktop: require('~/assets/locations/desktop/image-map-uk.png'),
              mobile: require('~/assets/locations/mobile/image-map-uk.png'),
            },
            classImg: 'lg:col-start-3',
          },
        ],
      };
    },
  });
</script>
