import http from "../http-common";

class VehicleDataService {
  create(data) {
    return http.post("/listings", data);
  }
  
  getAll() {
    return http.get("/listings");
  }

  get(id) {
    return http.get(`/listings/${id}`);
  }

  update(id, data) {
    return http.put(`/listings/${id}`, data);
  }

  delete(id) {
    return http.delete(`/listings/${id}`);
  }

  deleteAll() {
    return http.delete(`/listings`);
  }

  findByVin(vin) {
    return http.get(`/listings?vin=${vin}`);
  }
}

export default new VehicleDataService();