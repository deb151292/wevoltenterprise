import React from 'react'
import wevolt from "../assets/wevolt.png"

export default function Home(props) {
  return (
    <div className="container">
        <img src={wevolt} alt="We Volt Enterprise Logo"></img>
        <h3>{props.name}</h3>
        <p>We Volt is an India-based company that provides sales and services for electronic goods. </p>
        <p>This is the manager's portal where you can edit business stocks, make purchases, manage inventory, </p>
        <p>and print bills.</p>

        <h3>Manage Sales</h3>
        <p>Here, you can view and update the Sales of various products.</p>

        <h3>Manage Purchases</h3>
        <p>Place orders for new products or replenish existing stock.</p>

        <h3>Manage Inventory</h3>
        <p>Keep track of your entire inventory and make necessary adjustments.</p>

        <h3>Print Bills</h3>
        <p>Generate and print bills for customer purchases.</p>

        <strong>Click on Manage Business to start updating business details</strong>
    </div>
  )
}
