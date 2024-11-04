import React from "react";

const Github = () => {
    const styles = {
        container: {
            maxWidth: '700px',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#222', // Dark background to match the page
            color: '#f0f0f0', // Light text color
            fontFamily: "'Arial', sans-serif",
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        },
        header: {
            color: '#f0f0f0',
            textAlign: 'left',
            fontSize: '24px',
            marginBottom: '15px',
            fontWeight: 'bold',
        },
        paragraph: {
            lineHeight: '1.6',
            textAlign: 'justify',
            marginBottom: '20px',
            fontSize: '16px',
        },
        link: {
            color: '#4caf50', // Green color to match the theme
            fontWeight: 'bold',
            textDecoration: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            backgroundColor: '#333',
            display: 'inline-block',
            transition: 'background-color 0.3s ease',
        },
        linkHover: {
            backgroundColor: '#555',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Paragraph and Github Link</h2>
            <p style={styles.paragraph}>
                The project I am interested in is a Todo App with htmx that runs on a flask server.
                The server will connect to a database using the ORM peewee and will store data about todos
                and who people are following. htmx is a javascript alternative that allows a hypermedia approach
                to dynamic web content. Flask is a web server alternative to something like NodeJs.
            </p>
            <a
                href="https://github.com/BurginLuker/csci-331-fall-2024/tree/main/nextjs-assignment"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.backgroundColor = styles.linkHover.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = styles.link.backgroundColor)}
            >
                NextJs Assignment Github Link
            </a>
        </div>
    );
};

export default Github;