import { useState } from 'react';
import './form.css';

function Form() {
const [input, setInput]= useState ({
  name: "",
  height_min: "",
  height_max: "",
  weight_min:"",
  weight_max: "",
  life_span_min:"",
  life_span_max:"",
  temperaments:"",
})

const [error, setError]= useState ({
  name: "",
  height_min: "",
  height_max: "",
  weight_min:"",
  weight_max: "",
  life_span_min:"",
  life_span_max:"",
  temperaments:"",
})

const validate =(input) => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)){
    setError({...error,email:"Formato inválido"});
    return;
  }
  console.log ("Email correcto")
};

function handleChange(e){
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });

  validate ({
    ...input,
    [e.target.value]: e.target.value,
  });
}

  return ( <div>
    <h2>Estoy en form</h2>
    <Form onSubmit={''}>
      <div>
        <label> Name </label>
        <input name='name' value={input.value} onChange={handleChange}/>
      </div>
      <div>
        <label> Height min </label>
        <input name='height_min' value={input.value} onChange={handleChange}/>
      </div>
      <div>
        <label> Height max </label>
        <input name='height_max' value={input.value} onChange={handleChange}/>
      </div>
      <div>
        <label> Weight min </label>
        <input name='weight_min' value={input.value} onChange={handleChange}/>
      </div>
      <div>
        <label> Weight max </label>
        <input name='weight_max' value={input.value} onChange={handleChange}/>
      </div>
      <div>
        <label> Life_span_min </label>
        <input name='life_span_min' value={input.value} onChange={handleChange}/>
      </div>
      <div>
        <label> Life_span_max </label>
        <input name='life_span_max' value={input.value} onChange={handleChange}/>
      </div>
      <div>
        <label> temperament
        </label>
        <input/>
      </div>
      {error.email ? null : <button type='submit'>Create Dog</button>}
    </Form>
    </div>
  );
}

export default Form;