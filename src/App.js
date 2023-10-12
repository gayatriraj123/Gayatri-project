import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css"; // Create an App.css file for custom styles
import Profile from "./components/Profile";
import Map from "./components/Map";

function App() {
  
const [profiles, setProfiles] = useState([
  {
    id: 1,
    name: "John Doe",
    photo:
      "https://cdn.dribbble.com/users/2549989/screenshots/17374790/media/e0275a1448658869cebefd3b3f735772.png?resize=400x0",
    description: "Frontend Developer",
    summary:
      "John Doe is a common placeholder name used to represent an anonymous or hypothetical person. It's not associated with any specific individual, and any details about John Doe would be entirely fictional or arbitrary.",
    
      
    latitude: 40.7128,
    longitude: -74.006
  },
  {
    id: 2,
    name: "Jane Smith",
    photo:
      "https://i.kym-cdn.com/entries/icons/facebook/000/034/213/cover2.jpg",
    description: "UI/UX Designer",
    summary:
      "Jane Smith is another common placeholder name, often used in a similar context as John Doe. Just like John Doe, Jane Smith doesn't represent any specific real person, and any information about her would be entirely generic and fictional.",
    latitude: 34.0522,
    longitude: -118.2437
  },
  {
    id: 3,
    name: "Jane Smith",
    photo:
      "data:image/jpeg;base64,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",
    description: "UI/UX Designer",
    summary:
      "Jane Smith is another common placeholder name, often used in a similar context as John Doe. Just like John Doe, Jane Smith doesn't represent any specific real person, and any information about her would be entirely generic and fictional.",
    latitude: 34.0522,
    longitude: -118.2437
  },
  // Add 10 more profiles with the same photo URL
  {
    id: 4,
    name: "Emily Johnson",
    photo:
      "data:image/jpeg;base64,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",
    description: "Software Engineer",
    summary:
      "Emily Johnson is a fictional character. Any details provided about her are entirely fictional.",
    latitude: 41.8781,
    longitude: -87.6298
  },
  {
    id: 5,
    name: "Michael Brown",
    photo:
      "https://i.pinimg.com/1200x/c3/f9/88/c3f9885bec94a04490dcddc66cfe34c0.jpg",
    description: "Data Scientist",
    summary:
      "Michael Brown is another common placeholder name, often used in a similar context as John Doe. Just like John Doe, Michael Brown doesn't represent any specific real person, and any information about him would be entirely generic and fictional.",
    latitude: 51.5074,
    longitude: -0.1278
  },
  {
    id: 6,
    name: "Olivia Davis",
    photo:
      "https://i.pinimg.com/736x/7e/ab/43/7eab43483bc3099a1a2178381efda818.jpg",
    description: "Graphic Designer",
    summary:
      "Olivia Davis is a generic name used to represent a hypothetical person. Any details provided about her are entirely fictional.",
    latitude: 48.8566,
    longitude: 2.3522
  },
  {
    id: 7,
    name: "William Wilson",
    photo:
      "https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg",
    description: "Software Developer",
    summary:
      "William Wilson is a fictional character. Any details provided about him are entirely fictional.",
    latitude: 52.5200,
    longitude: 13.4050
  },
  {
    id: 8,
    name: "Mia Martinez",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoS96_vETK55r95MRsFeB2f7T3S6W6UCsElsdeeOwljS2Ugdwyfo8w4FLzrmFF6VpdkUk&usqp=CAU",
    description: "Web Designer",
    summary:
      "Mia Martinez is a generic name used to represent a hypothetical person. Any details provided about her are entirely fictional.",
    latitude: 34.0522,
    longitude: -118.2437
  },
  {
    id: 9,
    name: "James Smith",
    photo:
      "https://img.freepik.com/premium-photo/man-with-orange-shirt-orange-shirt-is-front-blue-background_745528-2307.jpg",
    description: "Frontend Developer",
    summary:
      "James Smith is a common placeholder name used to represent an anonymous or hypothetical person. It's not associated with any specific individual, and any details about James Smith would be entirely fictional or arbitrary.",
    latitude: 40.7128,
    longitude: -74.006
  },
  {
    id: 10,
    name: "Sophia Taylor",
    photo:
      "https://img.freepik.com/premium-photo/boy-handsome_559599-233.jpg",
    description: "UI/UX Designer",
    summary:
      "Sophia Taylor is another common placeholder name, often used in a similar context as John Doe. Just like John Doe, Sophia Taylor doesn't represent any specific real person, and any information about her would be entirely generic and fictional.",
    latitude: 34.0522,
    longitude: -118.2437
  },
]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-evenly">
        
          {profiles.map((profile) => (
            <Profile
              key={profile.id}
              data={profile}
              onClickSummary={handleSummaryClick}
            />
          ))}
        
        <div className="col-md-8">
          {selectedProfile && (
            <div>
              <h2>{selectedProfile.name}'s Location</h2>
              <Map
                latitude={selectedProfile.latitude}
                longitude={selectedProfile.longitude}
                name={selectedProfile.name}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );


//   // Handle the "Location" button click event
// const handleLocationClick = () => {
//   // Implement your location-related action here
//   const latitude = userData.latitude;
//   const longitude = userData.longitude;
//   // You can use the latitude and longitude for your location action
// };

// return (
//   <div className="container">
//     <div className="row">
//       <Profile
//         data={userData}
//         onClickLocation={handleLocationClick} // Pass the click handler for the "Location" button
//         onClickSummary={() => {}} // You can pass a summary click handler here if needed
//       />
//     </div>
//   </div>
// );

}

export default App;
