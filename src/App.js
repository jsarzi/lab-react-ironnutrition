import foodList from './foods.json';
import './App.css';
import React, {useState} from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodList);



  return (
   
    <div className="App">

<AddFoodForm />
  <Button> Hide Form / Add New Food </Button>
    <Divider>Food List</Divider>

    {foods.map((food) => {
      return(
        <Row style={{ width: '100%', justifyContent: 'center' }}> 
        <FoodBox 
        key={food.name + food.calories}
        food={food} />
        </Row>
      )
    })}
    

      {/* {foods.map((foods) => {
        return(
        <div className='Food'>
        <p>{foods.name}</p>
        <img src={foods.image} alt="" width={150}/>
      </div>
        )
      })
      } */}
      {/* <Row style={{ width: '100%', justifyContent: 'center' }}> */}
      {/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> */}
      {/* </Row>  */}


      
    </div>
  );
}

export default App;
