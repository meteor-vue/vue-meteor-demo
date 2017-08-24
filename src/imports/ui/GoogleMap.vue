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

<script lang="coffee">
export default
  data: ->
    return
      description: 'Paris'
      position:
        lat: 48.85661400000001
        lng: 2.3522219000000177

  methods:
    setPlace: (place) ->
      @place = place
      @position =
        lat: place.geometry.location.lat()
        lng: place.geometry.location.lng()
</script>

<style lang="stylus" scoped>
.search {
  margin-bottom: 12px;
}

.gmap,
.pano {
  width: 100%;
  height: 300px;

  >>> .vue-map,
  >>> .vue-street-view-pano {
    height: 100%;
  }
}
</style>
