const Menu = ({categories, selectedCategory, onSelectCategory}) => {
    const capitalizeCategory = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return (
        <div className="menu-labels">
            <button className={selectedCategory === "all" ? "active-menu-btn" : ""} onClick={() => onSelectCategory('all') }>All</button>

            {categories.map((category) => {
                return (
                    <button className={selectedCategory === category ? "active-menu-btn" : ""} key={category} onClick={() => onSelectCategory(category) }>
                        {capitalizeCategory(category)}
                    </button>
                )
            })}
        </div>
    )
}
export default Menu;