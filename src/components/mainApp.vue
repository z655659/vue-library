<template>
	<div id="mainApp">
		<!--<h1>{{this.$route.params}}</h1>-->
		<!--<router-link to='/MainApp/ARL'>ARL</router-link>
		<router-link to='/mainApp/HU'>HU</router-link>-->
		<v-header></v-header>
		<!--<v-maintree></v-maintree>-->
		<router-view></router-view>
	</div>
</template>

<script>
	import header from './MainApp/header'
	import ARL from '../components/MainApp/ARL'
	import HU from '../components/MainApp/HU'
	import maintree from '../components/MainApp/ARL/mainTree'
	export default {
		name: 'MainApp',
		components: {
			vHeader: header,
			vMaintree: maintree
		}
	}
</script>

<style>
	/*#mainApp{
		width:100%;
		height: 100%
	}*/
</style>