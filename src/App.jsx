import './App.css';
import StaffCard from './component/Staffcard';

const App = () => {
  
const StaffData = [
  {
    id: 1,
    name: "john Doe",
    post:  "software Engineer",
    about: "I am a software Engineer",
    isOnline: true,
    imgSrc: "src/assets/image2.jpg",

},
{
  id: 2,
  name: "peter paul",
  post: "Business Analysis",
  about: "I am a Business Analysis with a good experience",
  isOnline: true,
  imgSrc: "src/assets/image1.jpg",
},
{
  id: 3,
  name: "Emmanuel Rice",
  post: "software Design",
  about: "I am a Software Designer",
  isOnline: false,
  imgSrc: "src/assets/image3.jpg",
},
{
  id: 4,
  name: "David Adam",
  post: "Web Programming",
  about: "I am a web programmer with different experience",
  isOnline: true,
  imgSrc: "src/assets/image4.jpg",
},
{
  id: 5,
  name: "Tom Stone",
  post: "Artifical Intelligence",
  about: "An advanced artifical intelligence programmer",
  isOnline: false,
  imgSrc: "src/assets/image5.jpg",
},
]


return (
  <>
  <h1>staff ID</h1>
  <div>
    {StaffData.map(({id,name,about,post,isOnline,imgSrc})=>(
      <StaffCard key={id} name={name} about={about} post={post} isOnline={isOnline} imgSrc={imgSrc}/>
    ))}
  </div>
  </>
);
};
export default App;