import styles from './propertycard.module.css';

export default function PropertyCard({ properties }) {
  return (
    <div className={styles.card_grid}>
      {properties.map((prop) => (
        <div key={prop.id} className={styles.card}>
          <img
            src={URL.createObjectURL(prop.image)}
            alt="Property"
            className={styles.card_img}
          />
          <div className={styles.card_content}>
            <div>
              <p className={styles.card_title}>📏 Dimensions: {prop.dimensions}</p>
              <p className={styles.card_desc}>📝 {prop.description}</p>
            </div>
            <button
              className={styles.card_btn}
              onClick={() => alert(`(Placeholder) Trigger call for: ${prop.dimensions}`)}
            >
              📞 Call Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}