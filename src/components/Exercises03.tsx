interface User {
    id: number[];
    name: string[];
    age: number[]
}

const Exercises03 = () => {
    const users: User = {
     id: [1, 2, 3],
    name: ["John", "Mary", "Jane"],
    age: [30, 25, 20],
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                <tr>{users.id.map((id, index) => (
                        <tr key={id}>
                        <td>{id}</td>
                        <td>{users.name[index]}</td>
                        <td>{users.age[index]}</td>
                        </tr>
                    ))}
                </tr>
            </table>
        </div>
    )
}

export default Exercises03;