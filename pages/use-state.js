import Link from 'next/link'
import Layout from '../components/Layout.js'
import { useState, useEffect } from "react";

export default function Page() {
  var [count, setCount] = useState(0);


  function handleClick() {
    setCount(count + 1);
  }
  return (
    <Layout>
   <h1>ut</h1>
   <button onClick={handleClick}> Click</button>
    <p>Count is {count}</p>
    </Layout>
    
  )
}