"use client"
const LaptopActionBtns = ({ id }: { id: string }) => {
    const handleUpdate = async () => {

    }

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3000/api/products/laptops?id=${id}`, {
            method: "DELETE",
        })
        if (response.ok) {
            alert("deleted successfully")
        }
    }
    return (
        <div className='flex items-center justify-between gap-2'>
            <button className='bg-blue-400 px-2 py-3 text-white rounded-md' type="button">
                update
            </button>
            <button onClick={handleDelete} className='bg-red-400 px-2 py-3 text-white rounded-md' type="button">
                delete
            </button>
        </div>
    )
}

export default LaptopActionBtns