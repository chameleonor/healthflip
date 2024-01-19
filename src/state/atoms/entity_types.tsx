import { atom, selector } from "recoil";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firestore";

import { sortArrayOfObjects } from "../../utils/helpers";

interface EntityType {
  id: string;
  [key: string]: any;
}

export const entityTypesState = atom<EntityType[]>({
  key: "entityTypesState",
  default: [],
});

// Define the selector with the type annotation
export const entityTypesSelector = selector<EntityType[]>({
  key: "entityTypesSelector",
  get: async () => {
    const querySnapshot = await getDocs(collection(db, "entity_types"));
    const entityTypesMap: EntityType[] = [];
    querySnapshot.forEach((doc) => {
      entityTypesMap.push({ ...doc.data(), id: doc.id } as EntityType);
    });
    return sortArrayOfObjects(entityTypesMap, "code");
  },
});
