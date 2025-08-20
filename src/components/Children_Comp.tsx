type ChildrenProps = {
    name: string;
}

const Children_Comp = ({name}: ChildrenProps) => {
    return (
        <div>
            <p>Ho va ten ben component con: {name}</p>
        </div>
    )
}

export default Children_Comp;