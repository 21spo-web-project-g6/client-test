import { Link } from 'react-router-dom'
import HomeCSS from './Home.module.css'

export default function Home() {
  return (
    <div className={HomeCSS.container}>
      <div className={HomeCSS.containerItem}>
        <h1>Welcome</h1>
        <h3><Link to="/v1" >visualizations here</Link></h3>
      </div>
    </div>
  )
}
