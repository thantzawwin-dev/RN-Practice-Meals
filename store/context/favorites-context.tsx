import { createContext, useState, PropsWithChildren } from "react";

type ContextValueProps = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<ContextValueProps>({
  ids: [],
  addFavorite: function (id: string): void {
    throw new Error("addFavorite Function not implemented.");
  },
  removeFavorite: function (id: string): void {
    throw new Error("removeFavorite Function not implemented.");
  },
});

type Props = PropsWithChildren & {};

function FavoritesContextProvider({ children }: Props) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
