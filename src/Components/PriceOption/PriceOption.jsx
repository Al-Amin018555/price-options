import Features from "../Features/Features";

const PriceOption = ({ option }) => {
    const { price, name, features, duration } = option;
    return (
        <div className="bg-blue-400 flex flex-col rounded-lg p-8 text-center">
            <div className="text-white">
                <span className="text-7xl font-bold">{price}</span>
                <span className="text-2xl">/{duration}</span>
            </div>
            <p className="text-5xl text-white mt-3">{name}</p>

            <div className="mt-10 pl-10 space-y-2 flex-grow">
                {
                    features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                }
            </div>
            <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-3 mt-10 w-full rounded-lg">Buy Now</button>
        </div>
    );
};

export default PriceOption;