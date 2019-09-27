/**
 * title: 用户中心
 * Routes:
 *  - ./routes/TestRoute.js
 *  - ./routes/PrivateRoute.js 
 */
//-代表数组
//必须是文件中的第一个块注释，满足yaml语法
import styles from './about.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page about</h1>
    </div>
  );
}
