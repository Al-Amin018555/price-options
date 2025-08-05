import { FaCheckCircle } from "react-icons/fa";

const Features = ({feature}) => {
    return (
        <div className="flex items-center gap-2 text-white">
            <FaCheckCircle className="text-green-400"/>
            <p className="text-left">{feature}</p>
        </div>
    );
};

export default Features;