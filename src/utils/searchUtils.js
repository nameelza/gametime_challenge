// Display only first 3 results of each entity
const formatSearchData = (searchResults) => {
  const formattedData = [];

  searchResults.events.slice(0, 3).forEach(({ event, performers, venue }) => {
    formattedData.push({
      id: event.id,
      // Display image of the first performer
      image: performers[0].hero_image_url,
      title: event.name,
      subtitle: venue.name,
    });
  });

  searchResults.performers
    .slice(0, 3)
    .forEach(({ id, hero_image_url, name, category }) => {
      formattedData.push({
        id,
        image: hero_image_url,
        title: name,
        subtitle: category,
      });
    });

  searchResults.venues.slice(0, 3).forEach(({ id, image_url, name, city }) => {
    formattedData.push({
      id,
      image: image_url,
      title: name,
      subtitle: city,
    });
  });
  return formattedData;
};

export default formatSearchData;
