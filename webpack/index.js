import React from 'react';
import { createRoot} from 'react-dom/client'
import classes from './index.module.css'

function Index() {
  return (
    <div className={classes.text}>hello world</div>
  )
}
const root  =document.getElementById('root');
createRoot(root).render(<Index/>)

