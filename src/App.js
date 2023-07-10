import { useState, useEffect } from "react"
import Card from './components/Card'
import Header from './components/Header'


const App =()=> {
  const [deals ,setDeals] = useState(null)

const getDeals =async ()=> {
  try{
  const response =  await fetch("http://localhost:4000/deals",{method: "GET"})
  const data= await response.json()
  setDeals(data)
  }

    catch (err) {
      console.error(err);
  }
  
}
  useEffect(() =>{
    getDeals()
  },[])

  // console.log(deals)



  return (
    <div className="app">
<Header />
<nav>
  <button className="primary">Amazon</button>
  <button className="primary" disabled>Ali Express</button>
  <button className="primary" disabled>Ebay</button>
  <button className="primary" disabled>Flipkart</button>
</nav>
<div>
  <h2>Best Deal</h2>
  <div className="feed">
    {deals?.map(deal => <Card key={deal.pos} item={deal} />)}
  </div>
</div>
    </div>
  )
  }
    
export default App;






/*The code you provided is an example of a React functional component. Let's break it down step by step:

import { useState, useEffect } from "react";: This line imports the useState and useEffect hooks from the React library. These hooks allow you to add state and side effects to functional components.

const App = () => { ... }: This declares a functional component named App.

const [deals, setDeals] = useState(null): This line uses the useState hook to define a state variable named deals and a function setDeals to update its value. The initial value of deals is set to null.

const getDeals = async () => { ... }: This declares an asynchronous function getDeals which is responsible for fetching deals data from the specified URL.

useEffect(() => { getDeals() }, []): This is the useEffect hook, which is called when the component mounts. It takes a function as its first argument (in this case an arrow function that calls getDeals()) and an empty array [] as its second argument. The empty array signifies that the effect should only run once, on component mount. This hook is used to perform side effects, such as data fetching or subscriptions, in React components.

console.log(deals): This line logs the deals state variable to the console.

The return statement: In this example, the App component returns an empty <div></div>. You can replace this with the actual JSX content you want to render in your application.

export default App;: This exports the App component as the default export of the module, which allows it to be imported and used in other parts of the application.

To summarize, this code sets up a functional component App that fetches deals data from a specified URL using the fetch API. The fetched data is stored in the deals state variable using the useState hook, and the getDeals function is called when the component mounts using the useEffect hook. The deals variable is logged to the console, and the component returns an empty <div></div>.*/







