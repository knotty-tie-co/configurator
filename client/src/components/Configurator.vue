<template>
  <div class="ColorSVG">
    <h1>Change the color of this svg</h1>
      <svg height="100" width="500">
        <ellipse id="el1" cx="240" cy="50" rx="220" ry="30" style="fill:orange" v-bind:style="{ fill: shape1color}"/>
        <ellipse id="el2" cx="220" cy="50" rx="190" ry="20" style="fill:orange" v-bind:style="{ fill: shape2color}"/>
        Sorry, your browser does not support inline SVG.
      </svg>
      <h2>Shape 1</h2>
      <select v-model="shape1color">
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <h2>Shape 2</h2>
      <select v-model="shape2color">
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select><br>
      <button v-on:click="addProduct">Create product</button>
      <a v-if="productLink" :href="productLink">Product link</a>
  </div>
</template>


<script>
	import ProductsService from '@/services/ProductsService'
export default {
  name: 'Configurator',
  data () {
    return {
      shape1color: 'orange',
      shape2color: 'orange',
      title: 'test from client',
      description: 'test from client',
      productLink: ""
    }
  },
  methods: {
    async addProduct () {
    	const response = await ProductsService.addProduct({
    		  title: this.title,
    		  description: this.description
    		})

    	console.log(response.data)
    	this.productLink = "https://www.knottytie.com/products/" + response.data.product.handle
    }
  }
}
</script>


<style type="text/css">

</style>
