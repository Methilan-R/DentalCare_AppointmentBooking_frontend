import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.heroTitle}>Brighten Your Smile with Expert Dental Care</h1>
      <p style={styles.heroSubtitle}>
        Book your appointment today for a healthier, happier smile.
      </p>
      <button style={styles.ctaButton}>Book Appointment</button>
    </section>
  );
};

const ReviewSection: React.FC = () => {
  const reviews = [
    {
      name: "Emily R.",
      feedback:
        "The dental team was amazing! Friendly, professional, and made me feel comfortable throughout.",
    },
    {
      name: "John D.",
      feedback: "Quick and painless treatment. Highly recommend this clinic!",
    },
    {
      name: "Sophia K.",
      feedback:
        "The appointment booking was super easy, and the care was top-notch.",
    },
  ];

  return (
    <section style={styles.reviewSection}>
      <h2>What Our Patients Say</h2>
      <div style={styles.reviewList}>
        {reviews.map((review, idx) => (
          <div key={idx} style={styles.reviewCard}>
            <p style={styles.reviewText}>"{review.feedback}"</p>
            <p style={styles.reviewAuthor}>- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const TreatmentSection: React.FC = () => {
  const treatments = [
    {
      title: "Teeth Cleaning",
      description:
        "Remove plaque and tartar for a fresh and healthy smile with our professional cleaning services.",
    },
    {
      title: "Teeth Whitening",
      description:
        "Brighten your smile with safe, effective teeth whitening treatments tailored to your needs.",
    },
    {
      title: "Dental Implants",
      description:
        "Replace missing teeth with durable and natural-looking implants for restored confidence.",
    },
    {
      title: "Orthodontics",
      description:
        "Straighten your teeth with braces or Invisalign to improve both function and appearance.",
    },
  ];

  return (
    <section style={styles.treatmentSection}>
      <h2>Our Treatments</h2>
      <div style={styles.treatmentList}>
        {treatments.map((treatment, idx) => (
          <div key={idx} style={styles.treatmentCard}>
            <h3>{treatment.title}</h3>
            <p>{treatment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const DentalCareInfoSection: React.FC = () => {
  return (
    <section style={styles.infoSection}>
      <h2>Why Choose Our Dental Care?</h2>
      <ul>
        <li>Experienced and caring dental professionals</li>
        <li>State-of-the-art technology and modern equipment</li>
        <li>Comfort-focused treatments and relaxing environment</li>
        <li>Flexible appointment scheduling</li>
        <li>Personalized dental care plans</li>
      </ul>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <main style={styles.container}>
      <HeroSection />
      <ReviewSection />
      <TreatmentSection />
      <DentalCareInfoSection />
    </main>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    padding: "0 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  hero: {
    backgroundColor: "#a2d5f2",
    padding: "60px 20px",
    textAlign: "center" as const,
    borderRadius: "8px",
    marginBottom: "50px",
  },
  heroTitle: {
    fontSize: "2.8rem",
    marginBottom: "15px",
  },
  heroSubtitle: {
    fontSize: "1.3rem",
    marginBottom: "30px",
    maxWidth: "600px",
    margin: "0 auto 30px auto",
  },
  ctaButton: {
    backgroundColor: "#0275d8",
    color: "white",
    border: "none",
    padding: "15px 35px",
    fontSize: "1.1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  reviewSection: {
    marginBottom: "50px",
    textAlign: "center" as const,
  },
  reviewList: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap" as const,
    gap: "20px",
    marginTop: "20px",
  },
  reviewCard: {
    backgroundColor: "#f0f8ff",
    padding: "20px",
    borderRadius: "8px",
    width: "280px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  reviewText: {
    fontStyle: "italic",
    marginBottom: "10px",
  },
  reviewAuthor: {
    fontWeight: "bold",
    color: "#555",
  },
  treatmentSection: {
    marginBottom: "50px",
  },
  treatmentList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    marginTop: "20px",
  },
  treatmentCard: {
    backgroundColor: "#e3f2fd",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
  },
  infoSection: {
    backgroundColor: "#d0ebff",
    padding: "30px 20px",
    borderRadius: "8px",
    marginBottom: "50px",
  },
};

export default HomePage;
