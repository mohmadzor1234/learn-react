import './card.css'
import CardItem from './CardItem/CardItem'
const Card = () => {
  const postData = [
    {
        id: 1,
        title: "Exploring the Great Outdoors",
        body: "Discover the beauty of nature with our guide to the best hiking trails."
    },
    {
        id: 2,
        title: "10 Healthy Recipes for Busy Weeknights",
        body: "Quick and easy recipes that are both nutritious and delicious."
    },
    {
        id: 3,
        title: "The Ultimate Travel Packing List",
        body: "Don't forget these essentials on your next adventure."
    },
    {
        id: 4,
        title: "How to Stay Productive While Working From Home",
        body: "Tips and tricks to maintain focus and efficiency."
    },
    {
        id: 5,
        title: "Top 5 Fitness Apps for 2024",
        body: "Track your workouts and stay motivated with these popular apps."
    },
    {
        id: 6,
        title: "Beginner's Guide to Meditation",
        body: "Learn how to start your meditation practice and find inner peace."
    },
    {
        id: 7,
        title: "The Best Books to Read This Summer",
        body: "A curated list of must-read novels for your summer vacation."
    },
    {
        id: 8,
        title: "How to Create a Budget and Stick to It",
        body: "Manage your finances effectively with these budgeting tips."
    },
    {
        id: 9,
        title: "The Benefits of a Plant-Based Diet",
        body: "Explore the health advantages of incorporating more plant-based foods."
    },
    {
        id: 10,
        title: "Decorating Your Home on a Budget",
        body: "Affordable ideas to refresh your living space without breaking the bank."
    }
];

  return (
    <div className='cards'>
    
    {postData.map((data) => <CardItem key={data.id} title={data.title} body={data.body} />  )}
    

  
    </div>
  )
}

export default Card