import React, {useEffect, useRef, useState} from 'react';
import localFont from "next/font/local";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const styles = {
    main: {
        padding: '20px',
        color: 'white',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '20px',
        marginTop: '20px'
    },
    gridItem: {
        backgroundColor: '#333',
        padding: '15px',
        borderRadius: '8px',
        textAlign: 'center'
    },
    gridItemImage: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '5px'
    },
    gridItemHeading: {
        margin: '10px 0'
    },
    gridItemParagraph: {
        margin: '10px 0'
    }
};

const Store = () => {
    const [storeContent, setStoreContent] = useState([]);
    const initialContent = useRef([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setStoreContent(json);
                initialContent.current = json;
            });
    }, []);

    const filterSearch = (search) => {
        if (search.length === 0) {
            setStoreContent(initialContent.current);
            return;
        }

        const filtered = initialContent.current.filter((product) =>
            product.title.includes(search)
        );

        setStoreContent(filtered);
    };



    return (
        <div
            className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
        >
            <main style={styles.main}>
                <h1>Store From Fake Store API</h1>
                <br/>
                <p>Use This Bar to Search The Store</p>
                <input name="search" onChange={(e) => filterSearch(e.target.value)}/>
                <div style={styles.grid}>
                    {storeContent?.map((item) => (
                        <div key={item.id} style={styles.gridItem}>
                            <h3 style={styles.gridItemHeading}>{`$${item.price}`}</h3>
                            <img src={item.image} alt={item.title} style={styles.gridItemImage}/>
                            <p style={styles.gridItemParagraph}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Store;