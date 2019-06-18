<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide caption="Sistema de Reserva de Vuelos" img-src="https://picsum.photos/1024/480/?image=1"></b-carousel-slide>
      <b-carousel-slide caption="Tranquilidad" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
      <b-carousel-slide caption="Nuevos lugares" img-src="https://picsum.photos/1024/480/?image=77"></b-carousel-slide>
      <b-carousel-slide caption="Vacaciones" img-src="https://picsum.photos/1024/480/?image=13"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
//    onSlideStart(slide) {this.sliding = true;},onSlideEnd(slide) {this.sliding = false;}
  }
};
</script>