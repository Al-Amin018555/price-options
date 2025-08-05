import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "duration": "per month",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 free fitness assessment",
                
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 50,
            "duration": "per month",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "2 personal training sessions",
                
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 80,
            "duration": "per month",
            "features": [
                "24/7 gym access",
                "Access to all group classes",
                "Unlimited personal training",
                "Sauna and steam room access",
                "Towel service",
               
            ]
        },
        
    ]

    return (
        <div className="mt-10 mx-5">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="space-y-5 md:grid grid-cols-3 gap-6 mt-5">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;