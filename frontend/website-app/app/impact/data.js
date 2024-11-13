// This file exports an array of objects, where each object contains an
// "id" property, an "img" property, and a "title" property. The "img"
// property is a reference to an image file, and the "title" property is a
// string that describes the image.

// The first object in the array is an image of a solar panel installation
// at Wheaton High School, which is a public high school in Montgomery
// County, Maryland. The title of this image is "Work at Wheaton High School".

// The second object in the array is an image of a group of people holding
// a sign that says "Happy Earth Day" in Spanish. The title of this image
// is "Work related to Earth Day".

// The third object in the array is an image of a group of children and
// adults gathered around a table, with a sign that says "Summer Camp" in
// Spanish. The title of this image is "Summer Camp".

// The purpose of this array is to provide data to the Carousel component,
// which will render the images and titles in a carousel format.

import wheatonhigh from "./../images/wheaton_high_panel.jpg";
import earth_day from "./../images/earth_day.jpg";
import landscape_training from "./../images/landscape_training.jpg";
import hispanic_festival from "./../images/Hispanic_festival_sept.jpg";
import childrens_day from "./../images/Children'sDay_brookside.jpg";

const data = [
    {
        // The "id" property is a unique identifier for each object in the
        // array. It is used by the Carousel component to keep track of which
        // image is currently being displayed.
        id: 1,
        // The "img" property is a reference to the image file that should be
        // displayed.
        img: wheatonhigh,
        // The "title" property is a string that describes the image.
        title: "Work at Wheaton High School",
        description: "A program was hosted in a Wheaton School."
    },
    {
        id: 2,
        img: earth_day,
        title: "Work related to Earth Day",
        description: "Earth Day and trash cleanup in Takoma Park, MD."
    },
    {
        id: 3,
        img: landscape_training,
        title: "Sustainable Landscaping Training in Hyattsville",
        description: "EcoLatinos landscapers provided information on topics like stormwater management, rain gardens, best management practices, etc."
    },
    {
        id: 4,
        img: hispanic_festival,
        title: "Hispanic festival",
        description: "This festival took place in the Lane Manor Park on September 15th."
    },
    {
        id: 6,
        img: childrens_day,
        title: "Children's Day at Brookside Gardens",
        description: "Children's day at Brookside Gardens."
    },
];

export default data;

