import styles from './page.module.css';
import CreateGroup from '@/components/createTitle/CreateTitle';

export default function Home() {
    return (
        <main className={styles.main}>
            <CreateGroup></CreateGroup>
        </main>
    );
}
