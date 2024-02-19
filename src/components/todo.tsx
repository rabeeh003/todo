import { useEffect, useState } from "react"

type Items = {
    id:string;
    title:string;
};

function Todo() {
    const [items, setItems] = useState<Items[]>(() => {
        const savedItems = localStorage.getItem("todoItems");
        return savedItems ? JSON.parse(savedItems) : [];
    });
    const [inputValue, setInputValue] = useState<string>('');

    const addItem = (event: React.FormEvent) => {
        event.preventDefault();
        const newItem = { title: inputValue, id: Date.now().toString() };
        setItems(prevItems => [...prevItems, newItem]);
        setInputValue('');
    };

    const removeItem = (value: string) => {
        setItems(prevItems => prevItems.filter(data => data.id !== value));
    };

    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(items));
    }, [items]);
    return (
        <div className="flex flex-col items-center">
            <form onSubmit={addItem}>
                <input className="h-10 px-3 py-6 rounded-md" type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} />
                <button type="submit" className="px-5 py-3 bg-cyan-400 rounded-md m-2 font-bold text-black">Add</button>
            </form>
            <div className="h-[60vh] overflow-y-auto">
                {items.map((data) => (
                    <div key={data.id} className="py-3 px-7 mt-2 bg-slate-800 w-[400px] rounded-lg flex justify-between">
                    <span className="text-left font-mono text-2xl">{data.title}</span>
                    <button onClick={()=>removeItem(data.id)}><img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete" className="w-6" /></button>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Todo