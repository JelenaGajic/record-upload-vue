<template>
	<div v-if="vehicles.length">
		<input type="text" v-model="searchVehicle">
		<button @click="searchVin">Search</button>
		<button @click="removeAllVehicles">Delete All Records</button>
		<div v-for="(record, ind) in vehicles" :key="ind">
			<div class="line">
				<p class="title">title:{{ record.title }} vin:{{ record.vin }} id:{{ record.listingId }}</p>
				<router-link :to="`/record/${record.listingId}`" class="button is-primary"
					>Details</router-link
				>
			</div>
		</div>
	</div>
	<div v-else>No available records</div>
</template>


<script>
import RecordDataService from "../services/RecordDataService";

export default {
	name: "Listings",

	data() {
		return {
			vehicles: [],
			searchVehicle: null,
		};
	},

	methods: {
		retrieveVehicles() {
			RecordDataService.getAll()
				.then((response) => {
					this.vehicles = response.data;
					
					console.log('vehicles');
					console.log(this.vehicles);
				})
				.catch((e) => {
					console.log(e);
				});
		},

		// refreshList() {
		// 	this.retrieveVehicles();
		// 	this.currentVehicle = null;
		// 	this.currentIndex = -1;
		// },

		// TODO: remove
		// setActiveVehicle(Vehicle, index) {
		// 	this.currentVehicle = Vehicle;
		// 	this.currentIndex = index;
		// },

		removeAllVehicles() {
		RecordDataService.deleteAll()
			.then(response => {
				console.log(response.data);
				this.vehicles = [];
			})
			.catch(e => {
			console.log(e);
			});
		},

		searchVin() {
		RecordDataService.findByVin(this.searchVehicle)
			.then(response => {
				this.vehicles = response.data;
				console.log(response.data);
			})
			.catch(e => {
			console.log(e);
			});
		}
	},
	mounted() {
		this.retrieveVehicles();
	},
};
</script>

<style>
.line {
	display: flex;
}

.title {
	margin: 0 40px;
	height: 38px;
	line-height: 38px;
}
</style>

