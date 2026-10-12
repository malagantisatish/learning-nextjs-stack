"use client"
const page = () => {
    console.log("monday")
    return (
        <div>
            <h1>monday is working day</h1>
            <button onClick={() => alert("welcome to monday")}>click me</button>
        </div>
    )
}

export default page