import React, { useState } from 'react';

function Todo_list() {
  const [activity, setActivity] = useState('');
  const [listData, setListData] = useState([]); // Initialize listData as an empty array

  function addActivity() {
    setListData((prevListData) => {
      const updatedList = [...prevListData, activity]; // Add the new activity to the array
      setActivity('');
      console.log(updatedList);
      return updatedList;
    });
  }
  function removeActivity(i){
    const updatedListData = listData.filter((elem,id)=>{
      return i!=id;
    })
    setListData(updatedListData)
 
  }
 function RemoveAll(){
  setListData([])
 }

  return (
    <>
      <div className='container'>
        <div className='header'> TODO LIST</div>
        <input
          type='text'
          placeholder='Add your Activity'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>ADD</button>
        <p className='list-heading'>Here is your List :</p>
        {listData.length > 0 && listData.map((data, i) => {
          return (
            <>
              <div key={i} className='listData'>
              {data}
            </div>
           <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove</button></div>
            </>
            
          );
        })}
      </div>
      {listData.length>=1 &&  <button onClick={RemoveAll}> Remove All </button>  }
      
    </>
  );
}

export default Todo_list;
