import { useState, useRef } from 'react';
import { RichTextEditor } from '@mantine/rte';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function AddArticle({user}) {

  const title_ref= useRef();
  const cat_ref= useRef();
  const [value, onChange] = useState(initialValue);
  const submitR = async ()=>{
    const title= title_ref.current.value;
    const category = cat_ref.current.value;
    const response = await fetch('http://172.25.27.106:3000/article/create',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token_info.token}`
              },
              body: JSON.stringify({
                title,
                category:[category],
                value,
              })
     });
    }

  return (
  <>
  <div className='flex flex-col gap-5 items-center'>
  <RichTextEditor className='w-[80%] h-[50%]  items-center' value={value} onChange={onChange} id="rte" />

  <div className='flex gap-4 '>
       <input ref={title_ref} type="text" className='text-primary' placeholder='Title' ></input>
       <input ref={cat_ref} type="text" className='text-primary' placeholder='Category' ></input>
  </div>

    <button onClick={submitR} className='button-primary w-[150px] text-[white]'>Add</button>
  </div>


  </>)
}

export default AddArticle;


