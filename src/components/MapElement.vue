<script>
export default {
  name: "map",
  props: ["myWidth", "myHeight"],
};
</script>

<template>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1721990.086969089!2d-98.05510285495498!3d32.54585515558635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%204401%20Waldeck%20Street%20Grapevine%20Nashville%2C%20TX%2076051!5e0!3m2!1sit!2sit!4v1718113331176!5m2!1sit!2sit"
    width="{{ myWidht }}"
    height="{{ myHeight }}"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</template>
