export default function Sidebar({ 
    category, 
    onCategoryChange,
    minValue,
    maxValue,
    onMinValueChange,
    onMaxValueChange
    }) {
    const options = ["All", "Electronics", "Clothing", "Home"];

    return(
        <aside className="flex flex-col p-5 gap-5 w-1/4">
            <div className="bg-blue-800 p-5 rounded-xl text-white">
                <div className="text-xl">Filters</div>
                <div className="mt-3">
                    <div className="text-lg">Category</div>
                    <div className="space-y-2">
                        {options.map(option => (
                            <label className="block" key={option}>
                                <input 
                                type="radio"
                                name="category"
                                value={option}
                                checked={category === option}
                                onChange={(e) => onCategoryChange(e.target.value)}
                                />{" "}
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-xl">Price</p>
                    {/* Sliders */}
                    <div className="relative h-10 flex items-center">
                    {/* Range track */}
                    <div className="absolute h-1 bg-white/30 w-full rounded"></div>

                    {/* Min slider */}
                    <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={minValue}
                    onChange={(e) => onMinValueChange(e.target.value)}
                    className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
                    />

                    {/* Max slider */}
                    <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={maxValue}
                    onChange={(e) => onMaxValueChange(e.target.value)}
                    className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto z-20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
                    />
                    </div>
                    <div className="flex justify-between">
                        <p>{minValue}</p>
                        <p>{maxValue}</p>
                    </div>
                </div>
            </div>

            {/* This is second category Not inter active */}
            <div className="flex flex-col gap-3 bg-white p-3 rounded-xl">
                <div className="text-xl font-bold">Category</div>
                    <label className="block"><input type="radio" name="category-btm" defaultChecked/> All</label>
                    <label className="block"><input type="radio" name="category-btm" /> Electronics</label>
                    <label className="block"><input type="radio" name="category-btm" /> Clothing</label>
                    <label className="block"><input type="radio" name="category-btm" /> Home</label>
                <div>
                    <p className="text-xl font-bold">Price</p>
                    <input 
                    type="number"
                    min="1"
                    max="1000"
                    className="border mt-2 w-1/2 rounded-lg px-1 focus:outline-none"
                    />
                </div>
            </div>
        </aside>
    )
}