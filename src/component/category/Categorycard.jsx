
function Categorycard() {
    const category = [
        {
            id: 1,
            title: "Bags",
            img: "https://basel-cec2.kxcdn.com/basel/wp-content/uploads/2015/08/cat-bag-5-546x546.jpg"
        },
        {
            id: 2,
            title: "Shoes",
            img: "https://basel-cec2.kxcdn.com/basel/wp-content/uploads/2015/08/boot-category-1-3.jpg"
        },
        {
            id: 3,
            title: "Watches",
            img: "https://basel-cec2.kxcdn.com/basel/wp-content/uploads/2015/08/cat-watch-2.jpg"
        },
        {
            id: 4,
            title: "Womens",
            img: "https://basel-cec2.kxcdn.com/basel/wp-content/uploads/2015/08/wooman-cat.jpg"
        },

    ]
    return (
        <>
            {
                category.map((items, index) => (
                    <div className="category-card" key={index}>
                        <a href="">
                            <img src={items.img} alt="" />
                            <h3>{items.title}</h3>
                        </a>
                    </div>
                ))
            }

        </>
    )
}

export default Categorycard
