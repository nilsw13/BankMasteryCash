import DataCard from "./DataCard"


function AmountCards() {

    const cards = [
        {
            id:1,
            title : "Total balance",
            amount: 5231.89,
            stats: "+ 20% from last month" // need to change for dynamic data %

        },

        {
            id:2,
            title: 'Income',
            amount: 3200, 
            stats: "this month"
        }, 

        {
            id:3,
            title: "Expenses",
            amount: 1892, 
            stats: "this month"
        }, 

        {
            id:4,
            title: "Savings", 
            amount: 1308,
            stats:" + 12, 3% from last month"  // need to change for dynamic data %
        }
    ]

  return (

        <div className="grid gap-2  md:grid-cols-2 lg:grid-cols-4 ">

            {cards.map((card) => (
              <div className="">
                  <DataCard
                key={card.id}
                title={card.title} amount={card.amount} stats={card.stats}/>
              </div>
            ))}

        </div>

)
}

export default AmountCards