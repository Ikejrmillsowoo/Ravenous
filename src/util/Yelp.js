

const apiKey = '40IwmeYzS3OWptgWy6fykdYqxGPphnUGWKMNYmLy30i8iPb4Xj3Vzv12YKX9MWOHEEHu6I7G5i3_W2w3rWqRAuZDL3ZF0tNbti6dI791E7uXG2LBhj7xU_DfDxYTX3Yx';

const Yelp = {
    searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                }, 
            }).then((response) => {
                return response.json();
             }).then(jsonResponse => {
                 if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(((business) => {
                console.log(business)
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                }
                }));
            }
        });
}
};


export default Yelp