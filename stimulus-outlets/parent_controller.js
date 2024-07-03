import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dateInput"]
  static outlets = ["child"]
  static values = {date: String}

  connect() {
    console.log("Hello, parent!")

    // At the time of connection, the parent outlet is maybe not yet available
    setTimeout(() => {
      console.log(this.childOutlet)
    }, 500)
  }

  saveDateForParent(e) {
    console.log("Saving date for parent...")
    this.dateValue = e.target.value
    // this.dateInputTarget.value = this.dateValue
  }

  dateValueChanged() {
    console.log("DATE VALUE CHANGED!")
    this.dateInputTarget.value = this.dateValue
  }

  updateChild(e) {
    console.log("Updating child input from parent...")

    // 1.
    // Create and dispatch an input event. You do not need outlets controllers for this approach.
    // const event = new Event('input', { bubbles: true })
    // this.dateOfChildInputTarget.dispatchEvent(event)
  }
}
