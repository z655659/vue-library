<template>
	<div id='ARL'>
		<!--<h1>{{this.$route.query.num}}</h1>-->
    	<v-maintree></v-maintree>
		<!--<router-link to='/MainApp/ARL/1'>1</router-link>-->
		<!--<router-link to='/MainApp/ARL/2'>2</router-link>-->
<!--		<router-link to='/MainApp/ARL/3'>3</router-link>
-->		<!--<router-link to='/MainApp/ARL/4'>4</router-link>-->	
		<div id='aa'>
		<router-view ></router-view>
		</div>

	</div>
</template>

<script>
	import maintree from './fenxi/mainTree'
	export default {
		name: 'fenxi',
		components: {
			vMaintree: maintree
		}
	}
</script>

<style>
	#ARL{
		display: flex;
		position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top:  73px;
        width: 100%;
        overflow: auto;
        z-index: 99;
        background-color: white;
	}
	#aa{
		position: absolute;
		left: 20%;
		/*top: 73px;*/
		width: 80%;
        height: 100%;
        background-color: #d3d0c4;
        overflow: scroll;
	}
</style>