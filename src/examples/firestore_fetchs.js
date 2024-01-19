useEffect(() => {
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "entities"));
    const entitiesPromises = querySnapshot.docs.map(async (doc) => {
      const { type } = doc.data();
      let newType = {
        code: 0,
        name: "undefined",
        label: "Desconhecido",
      };

      const docSnap = await getDoc(type);
      if (docSnap.exists()) {
        newType = docSnap.data();
      }

      return {
        ...doc.data(),
        id: doc.id,
        type: newType,
      };
    });

    const entitiesMap = await Promise.all(entitiesPromises);
    setEntities(entitiesMap);
  };

  fetchData();
}, []);
