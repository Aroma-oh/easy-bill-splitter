import styles from './page.module.css';
import CreateGroup from '@/components/CreateTitle';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <CreateGroup></CreateGroup>
        </main>
    );
}
