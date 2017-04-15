<template>
  <div class="map">
    <div class="search">
      <gmap-autocomplete
        :value="description"
        @place_changed="setPlace"
        placeholder="Enter location" />
    </div>
    <gmap-map
      class="gmap"
      :center="position"
      :zoom="7"
      map-type-id="terrain" />
    <gmap-street-view-panorama
      class="pano"
      :position="position"
      :pov="{heading: 0, pitch: 10}"
      :zoom="1" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      description: 'Paris',
      position: {lat:48.85661400000001, lng:2.3522219000000177},
    }
  },
  methods: {
    setPlace (place) {
      this.place = place
      this.position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }
    },
  },
}
</script>

<style scoped>
.search {
  margin-bottom: 12px;
}

.gmap,
.pano {
  width: 100%;
  height: 300px;
}
</style>
