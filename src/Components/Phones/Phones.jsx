import axios from "axios";
import {useState } from "react";
import { BarChart, Bar, Rectangle, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Audio,Grid } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res => res.json())
    //     .then(data => setPhones(data.data))
    // },[])

    //data loading using axios

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesData = data.data.data;
            const phonesWithFakeData = phonesData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })

            setPhones(phonesWithFakeData);
            setLoading(false);
        })

    return (
        <div>
            {loading && <div>

                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
                <Grid
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass="grid-wrapper"
                />
            </div>}
            <p className="text-7xl mt-10">Phones: {phones.length}</p>
            <BarChart className="mt-6" width={1200} height={400} data={phones}>
                <Bar dataKey='price' fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div >
    );
};

export default Phones;