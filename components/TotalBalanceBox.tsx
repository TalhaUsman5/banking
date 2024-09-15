import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({
    accounts = [], totalbanks, totalcurrentbalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts = {accounts} />
        </div>

        <div className='flex flex-col gap-6'>
            <h2>
            Bank Accounts: {totalbanks} 
            </h2>

            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>

                <div className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter amount={totalcurrentbalance} />
                </div>
            </div>
        </div>
    </section>
        
  )
}

export default TotalBalanceBox