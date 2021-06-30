<template>
	<div v-if="vehicles.length">
		<div v-for="(record, ind) in vehicles" :key="ind">
			<div class="line">
				<h4>{{ record.title }} - {{record.vin}}</h4>
				<router-link :to="`/record/${record.id}`" class="btn btn-info">Details</router-link>
			</div>
		</div>
	</div>
</template>


<script>
import RecordDatsService from "../services/RecordDatsService";

export default {
	name: 'Listings',
	
	data () {
		return {
			vehicles: [],
			activeVehicle: null
		}
	},
	
	methods: {
		retrieveVehicles() {
			RecordDatsService.getAll()
				.then(response => {
					this.vehicles = response.data;
					console.log(response.data);
				})
				.catch(e => {
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

		// removeAllVehicles() {
		// VehicleDataService.deleteAll()
		// 	.then(response => {
		// 	console.log(response.data);
		// 	this.refreshList();
		// 	})
		// 	.catch(e => {
		// 	console.log(e);
		// 	});
		// },
		
		// searchTitle() {
		// VehicleDataService.findByTitle(this.title)
		// 	.then(response => {
		// 	this.vehicles = response.data;
		// 	console.log(response.data);
		// 	})
		// 	.catch(e => {
		// 	console.log(e);
		// 	});
		// }
	},
  mounted() {
    this.retrieveVehicles();
  }
}
</script>

<style>
.line {
	display: flex;
}
</style>

