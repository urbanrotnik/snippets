import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dateInput"]
  static outlets = ["parent"]
  static values = {dateValue: String}

  connect() {
    console.log("Hello, child!")

    // At the time of connection, the parent outlet is maybe not yet available
    setTimeout(() => {
      console.log(this.parentOutlet)
    }, 500)
  }

  saveDateForChild(e) {
    console.log("Saving date for child...")
    this.dateValue = e.target.value
    this.parentOutlet.dateValue = e.target.value;
  }
}
