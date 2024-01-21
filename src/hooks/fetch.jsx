import { useState, useEffect } from "react";
import {
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const operationMap = {
  getDoc: async (ref, setResponseData) => {
    const querySnapshot = await getDoc(ref);
    setResponseData(querySnapshot.data());
  },
  getDocs: async (ref, setResponseData) => {
    const response = await getDocs(ref);
    setResponseData(
      response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  },
  create: async (ref, setResponseData, data) => {
    const response = await addDoc(ref, data);
    setResponseData({ id: response.id, ...data });
  },
  update: async (ref, setResponseData, data) => {
    await updateDoc(ref, data);
    setResponseData(data);
  },
  delete: async (ref) => {
    await deleteDoc(ref);
  },
};

export const useFirestoreOperation = (operation, ref, data) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const executeOperation = async () => {
      setLoading(true);
      try {
        operationMap[operation](ref, setResponseData, data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (operation) {
      executeOperation();
    }

    return () => {
      setError(null);
      setResponseData(null);
      setLoading(false);
    };
  }, [operation]);

  return { loading, error, responseData };
};
