import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  query Countries {
    countries {
      capital
      code
      name
      emoji
    }
  }
`;

export default function Countries() {
    const { data, loading, error } = useQuery(QUERY);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }

    const countries = data.countries.slice(0, 14);

    return (
        <div className={styles.grid}>
            {countries.map((country) => (
                <div key={country.code} className={styles.card}>
                    <h3>{country.name}</h3>
                    <h4>{country.capital}</h4>
                    <p>
                        {country.code} - {country.emoji}
                    </p>
                </div>
            ))}
        </div>
    );
}