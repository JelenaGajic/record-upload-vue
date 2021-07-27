<template>
	<div>
		<button
			type="button"
			class="button is-primary"
			data-toggle="modal"
			data-target="#exampleModal"
			@click="active = true"
		>
			Launch demo modal
		</button>

		<div :class="['modal', { 'is-active': active }]">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Modal title</p>
					<button
						class="delete"
						aria-label="close"
						@click="active = false"
					></button>
				</header>
				<section class="modal-card-body">
					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">Title:</label>
						</div>
						<div class="field-body">
							<div class="field">
								<p class="control">
									<input
										v-model="record.title"
										class="input is-primary"
										type="text"
										id="title"
										placeholder="Title"
									/>
								</p>
							</div>
						</div>
					</div>
					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">VIN:</label>
						</div>
						<div class="field-body">
							<div class="field">
								<p class="control">
									<input
										v-model="record.vin"
										class="input is-primary"
										type="text"
										id="vin"
										placeholder="vin"
									/>
								</p>
							</div>
						</div>
					</div>
					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">Description:</label>
						</div>
						<div class="field-body">
							<div class="field">
								<p class="control">
									<input
										v-model="record.description"
										class="input is-primary"
										type="text"
										id="description"
										placeholder="description"
									/>
								</p>
							</div>
						</div>
					</div>
					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">Image1:</label>
						</div>
						<div class="field-body">
							<div class="field">
								<p class="control">
									<input
										v-model="record.image1"
										class="input is-primary"
										type="text"
										id="image1"
										placeholder="add image url"
									/>
								</p>
							</div>
						</div>
					</div>
					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">Image2:</label>
						</div>
						<div class="field-body">
							<div class="field">
								<p class="control">
									<input
										v-model="record.image2"
										class="input is-primary"
										type="text"
										id="image2"
										placeholder="add image url"
									/>
								</p>
							</div>
						</div>
					</div>
					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">Image3:</label>
						</div>
						<div class="field-body">
							<div class="field">
								<p class="control">
									<input
										v-model="record.image3"
										class="input is-primary"
										type="text"
										id="image3"
										placeholder="add image url"
									/>
								</p>
							</div>
						</div>
					</div>
				</section>
				<footer class="modal-card-foot">
					<button class="button is-success" @click="createVehicle">
						Create record
					</button>
					<button class="button" @click="active = false">
						Cancel
					</button>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
import RecordDataService from "../services/RecordDataService";

export default {
	data() {
		return {
			active: false,
			record: {
				title: null,
				vin: null,
				description: null,
				id: null,
				image1: null,
				image2: null,
				image3: null
			}
		};
	},
	methods: {
		createVehicle() {
			const data = {
				title: this.record.title,
				vin: this.record.vin,
				description: this.record.description,
				image1: this.record.image1,
				image2: this.record.image2,
				image3: this.record.image3,
				listingId: this._uid
			};
			RecordDataService.create(data)
				.then((response) => {
					this.record.id = response.data.id;
					console.log(response.data);
					this.active = false;
					this.$router.push({ name: "listings" });
				})
				.catch((e) => {
					console.log(e);
				});
		},
	},
};
</script>