
import styles from './index.css';
import Link from 'umi/link';
import router from 'umi/router';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <ul>
        <li>
          <Link to='/users/tom'>Tom</Link>
        </li>
        <li onClick={()=>{router.push('/users/jerry')}}>
          Jerry
        </li>
      </ul>
    </div>
  );
}
