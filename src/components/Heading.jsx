export default function Heading({ title }) {
    return (
        <div className="flex items-center justify-center">
            <h1 className="text-tertiary-100">
                <span className="">{title}</span>
            </h1>
        </div>
    )
}