import EmptyState from "../components/EmptyState";

import getFavoritesListing from "../actions/getFavoritesListing";
import getCurrentUser from "../actions/getCurrentUser";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const favoritesListing = await getFavoritesListing();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  if (favoritesListing.length === 0) {
    return (
      <EmptyState
        title="No favorites"
        subtitle="Looks like you have no favorites listed"
      />
    );
  }

  return (
    <FavoritesClient
      favoritesListing={favoritesListing}
      currentUser={currentUser}
    />
  );
};

export default FavoritesPage;
