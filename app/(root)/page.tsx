import Headerbox from '@/components/Headerbox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
    const loggedIn = { firstName: 'Talha', lastName: 'Usman', email:'contact@mybanking.pro'};

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <Headerbox 
                        type="greeting"
                        title="welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalbanks={1}
                        totalcurrentbalance={1250.35}
                    />
                </header>

                RECENT TTRANSACTIONS
            </div>
            <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 123.50}, {currentBalance: 150.00}]}
            />
        </section>
    )
}

export default Home