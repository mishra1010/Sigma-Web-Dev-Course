You have to use an api and display data in the form of a card under a container. All the data points returned by the API should be converted to a card
Use this API - https://jsonplaceholder.typicode.com/posts

Hint: 
create a state for the data which will be fetched using json placeholder API
Inside useEffect, use fetch to populate that state and then use map to render the cards from that state