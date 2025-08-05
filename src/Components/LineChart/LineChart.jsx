import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const subjectMarks = [
        { "id": 1, "name": "Ayaan Rahman", "mathMarks": 95, "physicsMarks": 89, "chemistryMarks": 91 },
        { "id": 2, "name": "Sadia Ahmed", "mathMarks": 88, "physicsMarks": 85, "chemistryMarks": 82 },
        { "id": 3, "name": "Fahim Chowdhury", "mathMarks": 76, "physicsMarks": 80, "chemistryMarks": 74 },
        { "id": 4, "name": "Maliha Hasan", "mathMarks": 82, "physicsMarks": 78, "chemistryMarks": 84 },
        { "id": 5, "name": "Nayeem Karim", "mathMarks": 69, "physicsMarks": 72, "chemistryMarks": 68 },
        { "id": 6, "name": "Tahsin Jamil", "mathMarks": 91, "physicsMarks": 94, "chemistryMarks": 90 },
        { "id": 7, "name": "Zarin Alam", "mathMarks": 78, "physicsMarks": 75, "chemistryMarks": 79 },
        { "id": 8, "name": "Tanjim Haque", "mathMarks": 85, "physicsMarks": 81, "chemistryMarks": 83 },
        { "id": 9, "name": "Raisa Noor", "mathMarks": 73, "physicsMarks": 70, "chemistryMarks": 76 },
        { "id": 10, "name": "Kashfi Anam", "mathMarks": 89, "physicsMarks": 87, "chemistryMarks": 88 }

    ]
    return (
        <div>
            <LChart width={1650} height={400} data={subjectMarks}>
                <CartesianGrid />

                <Line dataKey='mathMarks' stroke='red'></Line>
                <Line dataKey='physicsMarks' stroke='purple' ></Line>
                <XAxis dataKey="name" />
                <YAxis />
                
            </LChart>
        </div>
    );
};

export default LineChart;