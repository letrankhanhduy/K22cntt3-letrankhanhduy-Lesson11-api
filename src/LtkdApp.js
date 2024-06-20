import { useEffect, useState } from 'react';
import './App.css';
import LtkdCategoryFrom from './components/LtkdCategoryForm';
import LtkdCategoryList from './components/LtkdCategoryList';
import axios from "./api/LtkdApi";

function App() {
  const [LtkdCategories, setLtkdCategories] = useState([]);
  
  const getCategories = async () => {
    try {
      const LtkdResponse = await axios.get("LtkdCategory");
      setLtkdCategories(LtkdResponse.data);  
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const [LtkdCategoryIsFrom, setLtkdCategoryIsFrom] = useState(false);

  const LtkdHandleAddNew = (param) => {
    setLtkdCategoryIsFrom(param);

  }

  const LtkdHandleCategoryCloseForm = (param) => {
    setLtkdCategoryIsFrom(param);
  }

  const LtkdHandleCategorySubmit = (param) => {
    let id = LtkdCategories[LtkdCategories.length - 1].LtkdId;
    console.log("ma: ", id);
    param.LtkdId = id + 1;
    LtkdCategories.push(param);
    setLtkdCategories((prev) => {
      return [...prev];
    })
    setLtkdCategoryIsFrom(false);
  }

  return (
    <div className="container border my-3">
      <h1>Le Tran Khanh Duy Call API</h1>
      <LtkdCategoryList renderLtkdCateGories={LtkdCategories} onAddNew={LtkdHandleAddNew} />
      <hr />
      {
        LtkdCategoryIsFrom === true ? <LtkdCategoryFrom onCloseForm={LtkdHandleCategoryCloseForm} onCategorySubmit={LtkdHandleCategorySubmit} /> : ""
      }
      
    </div>
  );
}

export default App;