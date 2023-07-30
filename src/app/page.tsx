import About from '@/components/About/About';
import HeroContainer from '@/components/Hero/Hero';
import Layout from '@/components/Layout/Layout';

const App = () => {
    return (
        <main>
            <Layout>
                <HeroContainer></HeroContainer>
                <About></About>
            </Layout>
        </main>
    );
};

export default App;
