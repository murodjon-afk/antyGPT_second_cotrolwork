



let taxes = 0;

let taxesMax = {}

let taxesMin = {}



let bank = [
    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            { title: 'Salaries', total: 125000 },

            { title: 'Utilites', total: 18000, },

            { title: 'Rent', total: 258000 }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,
        
        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]


const setup = () => {
    let taxes = 0;
   
    let taxesMax = 0 ;
    let taxesMin = 0;
 
    bank.forEach(company => {
      
        
        let totalExpenses = company.expensesPerYear.reduce((sum, expense) => sum + expense.total, 0);
        company.expensesPerMonth = totalExpenses / 12;

      
        company.monthlyBudget = company.budget / 12;
        company.percent = (company.expensesPerMonth / company.monthlyBudget) * 100;

       
        let annualTax = (company.tax / 100) * company.budget;
        taxes += annualTax;

      if(taxesMax < annualTax){
        taxesMax = { name: company.name, tax: annualTax }
      }

      if(annualTax < taxesMin){
        taxesMin = { name: company.name, tax: annualTax }
      }

        let totalAnnualExpenses = totalExpenses + annualTax;
        company.totalMoney = company.budget - totalAnnualExpenses;
    });

    
    console.log('обшее налрги:', taxes);
    console.log('макс налог:', taxesMax);
    console.log('мин налог:', taxesMin);
    console.log('мин налог:', bank);
   
    
  

    
}

setup()



