<template>
  <div class="map">
    <div class="toolbar">
      <button
        :disabled="!userPosition"
        @click="centerOnUser">
        Center on user
      </button>
    </div>

    <!-- Map -->
    <googlemaps-map
      class="gmap"
      :center.sync="center"
      :zoom.sync="zoom"
      map-type-id="terrain">

      <!-- User Position -->
			<googlemaps-user-position
				@update:position="setUserPosition" />

			<!-- Marker -->
			<googlemaps-marker
				title="Paris"
				:position="{ lat: 48.8735, lng: 2.2951 }" />
    </googlemaps-map>
  </div>
</template>

<script lang="coffee">
export default
  data: ->
    return
      center:
        lat: 48.85661400000001
        lng: 2.3522219000000177
      userPosition: null
      zoom: 12

  methods:
    centerOnUser: ->
      if @userPosition
        @center = @userPosition

    setUserPosition: (position) ->
      @userPosition = position
</script>

<style lang="stylus" scoped>
.toolbar
  margin-bottom 24px

.gmap
  width 100%
  height 300px
</style>
