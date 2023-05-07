// import { useRef, useReducer, useCallback, useMemo } from 'react';
// import { useState } from 'react';
import { useMemo, useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('Fatih');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('2;')
  
  const [categories, setCategories] = useState([2, 4]);
  const categoryList = [
    {key: '1', value: 'HTML'},
    {key: '2', value: 'CSS'},
    {key: '3', value: 'JAVASCRIPT'},
    {key: '4', value: 'NODE.JS'},
    {key: '5', value: 'REACT'}
  ];

  const genders = [
    {
      key: '1', value: 'Erkek'
    },
    {
      key: '2', value: 'Kadın'
    }
  ];
  const selectedGender = genders.find(g => g.key === gender);
  const selectedCategories = categories && categoryList.filter(c => categories.includes(c.key));
  
  return (
    <>
      <div className="App">
        <button onClick={() => setName('Atilla')}>Adı değiştir...</button>
        <hr/>

        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <hr/>

        <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        <hr/>

        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value={""}>Seçin</option>
          {genders.map(gender => (
            <option value={gender.key} key={gender.key}>{gender.value}</option>
          ))}
        </select>

        <button onClick={() => setCategories([2, 3, 4])}>Kategori Seçin</button>
        <select value={categories} multiple={true} onChange={e => setCategories([...e.target.selectedOptions].map(option => +option.value))}>
          <option value={""}>Seçin</option>
          {categoryList.map(category => (
            <option value={category.key} key={category.key}>{category.value}</option>
          ))}
        </select>

        <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
