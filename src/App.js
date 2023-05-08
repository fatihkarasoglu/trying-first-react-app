// import { useRef, useReducer, useCallback, useMemo } from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('Fatih');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('2;')
  const [avatar, setAvatar] = useState(false);
  const submitHandle = () => {
    const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('name', name);
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData
      })
  }
  
  const [image, setImage] = useState()
  useEffect(() => {
    if(avatar) {
      const fileReader = new FileReader();
      
      fileReader.addEventListener('load', function() {
        setImage(this.result)
      })
      
      fileReader.readAsDataURL(avatar)
    }

  }, [avatar])

  const [level, setLevel] = useState('Jr_developer');
  const levels = [
    {key: 'Beginner', value: 'Başlangıç'},
    {key: 'Jr_developer', value: 'Junior developer'},
    {key: 'Mid_developer', value: 'Mid developer'},
    {key: 'Sn_developer', value: 'Sn developer'}
  ];
  
  const [rule, setRule] = useState(true);
  const [rules, setRules] = useState([
    {key: 1, value: '1. Kuralı kabul ediyorum.', checked: false},
    {key: 2, value: '2. Kuralı kabul ediyorum.', checked: false},
    {key: 3, value: '3. Kuralı kabul ediyorum.', checked: true}
  ]);

  const checkRules = (key, checked) => {
    setRules(rules => rules.map(rule => {
      if(key === rule.key) {
        rule.checked = checked;
      }
      return rule
    }))
  }
  
  const [categories, setCategories] = useState([2, 4]);
  const categoryList = [
    {key: 1, value: 'HTML'},
    {key: 2, value: 'CSS'},
    {key: 3, value: 'JAVASCRIPT'},
    {key: 4, value: 'NODE.JS'},
    {key: 5, value: 'REACT'}
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
  const selectedLevel = levels.find(g => g.key === level);
  const selectedCategories = categories && categoryList.filter(c => categories.includes(c.key));

  const enabled = rules.every(rule => rule.checked) && avatar;
  
  return (
    <>
      <div className="App">
        <button onClick={() => setName('Atilla')}>Adı değiştir...</button>
        <hr/>

        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <hr/>

        <textarea value={description} onChange={e => setDescription(e.target.value)} />
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
        <pre>{JSON.stringify(selectedGender, null, 2)}</pre>
        <hr/>

        <label>
          <input type='checkbox' checked={rule} onChange={e => setRule(e.target.checked)} />
          Kuralları kabul ediyorum.
        </label>

        {rules.map(rule => (
          <label key={rule.key}>
            <input type='checkbox' checked={rule.checked} onChange={e => checkRules(rule.key, e.target.checked)} />
            {rules.value}
          </label>
        ))}

        <pre>{JSON.stringify(rules, null, 2)}</pre>

        {levels.map((l, index) => (
          <label key={index}>
            <input type='radio' value={l.key} checked={l.key === level} onChange={e => setLevel(e.target.value)} />
            {l.value}
          </label>
        ))}
        <br/>
        {JSON.stringify(selectedLevel)}
        <hr/>

        <label>
          <input type='file' onChange={e => setAvatar(e.target.files[0])} />
        </label>
        <br/>
        {avatar && (
          <>
            <h4>{avatar.name}</h4>
            {image && <img src={image} alt='' />}
          </>
        )}

        <button onClick={submitHandle} disabled={!enabled} >İşleme Devam Et</button>
      </div>
    </>
  );
}

export default App;