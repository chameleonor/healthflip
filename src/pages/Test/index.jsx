import React from "react";
import { useFirestoreOperation } from "../../hooks/fetch";
import { collection } from "firebase/firestore";
import { db } from "../../config/firestore";

const Test = () => {
  const { loading, error, responseData } = useFirestoreOperation(
    "getDocs",
    collection(db, "entities")
  );

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error.message}</p>}
      {responseData && (
        <ul>
          {responseData.map((doc, index) => (
            <li key={index}>{JSON.stringify(doc)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;
