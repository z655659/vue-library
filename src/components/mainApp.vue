<template>
	<div id="mainApp">
		<!--<router-link to='/MainApp/ARL'>ARL</router-link>
		<router-link to='/mainApp/HU'>HU</router-link>-->
		<v-header></v-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import header from './MainApp/header'
	import ARL from '../components/mainApp/ARL'
	import HU from '../components/mainApp/HU'
	export default {
		name: 'MainApp',
		components: {
			vHeader: header
		}
	}
</script>

<style>
</style>