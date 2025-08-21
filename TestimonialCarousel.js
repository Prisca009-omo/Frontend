import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Michelle G.',
    text: 'Sustainable Handyman Solution is fantastic! Their eco-friendly approach and attention to detail made my home repairs a breeze. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=16'
  },
  {
    name: 'John D.',
    text: 'Great service! Very punctual and professional. Loved how sustainable their methods were.',
    image: 'https://i.pravatar.cc/400?img=59'
  },
  {
    name: 'Linda K.',
    text: 'My go-to handyman team now! Efficient, kind, and they clean up after themselves.',
    image: 'https://i.pravatar.cc/400?img=49'
  },
  {
    name: 'Carlos M.',
    text: 'I’m impressed with the eco-conscious choices they made during the project.',
    image: 'https://i.pravatar.cc/400?img=12'
  },
  {
    name: 'Emily R.',
    text: 'Amazing experience from start to finish. Will definitely use them again!',
    image: 'https://i.pravatar.cc/400?img=26'
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, text, image } = testimonials[currentIndex];

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      backgroundColor: '#f7f7f7',
      textAlign: 'center',
    },
    arrowButton: {
      background: 'none',
      border: 'none',
      fontSize: '60px',
      cursor: 'pointer',
      color: '#555',
      marginRight: '70px',
      marginLeft: '70px',
    },
    content: {
      maxWidth: '1500px',
      margin: '0 100px',
    },
    imageContainer: {
      position: 'relative', // To position the quote bubble on top
      display: 'inline-block',
    },
    image: {
      width: '125px',
      height: '125px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '5px',
    },
    quoteBubble: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      backgroundColor: '#F1C40F', // Yellow bubble color
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      color: 'white',
      fontWeight: 'bold',
    },
    text: {
      fontWeight: 700,
      fontSize: '24px',
      color: '#222',
      marginBottom: '15px',
      fontFamily: `'Montserrat', sans-serif`,
      letterSpacing: '0.0000001px',
    },
    name: {
      fontWeight: 600,
      fontSize: '16px',
      color: '#666',
      fontFamily: `'Montserrat', sans-serif`,
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handlePrev} style={styles.arrowButton}>&#129104;</button>
      <div style={styles.content}>
        <img src={image} alt={name} style={styles.image} />
        <p style={styles.text}>{text}</p>
        <p style={styles.name}>{name}</p>
      </div>
      <button onClick={handleNext} style={styles.arrowButton}>&#129106;</button>
    </div>
  );
};

export default TestimonialCarousel;