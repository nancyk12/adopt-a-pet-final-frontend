import React from "react"
import { Link } from "react-router-dom"

/**
[
    {
        "index": 0,
        "age": "baby",
        "attributes": "{spayed_neutered: true, house_trained: false, declawed: null, special_needs: false, shots_current: true}",
        "breeds": "{primary: 'Black Labrador Retriever', secondary: null, mixed: true, unknown: false}",
        "colors": "{primary: null, secondary: null, tertiary: null}",
        "contact": "{
            address: "",
            address1: PO Box 623341,
            address2: null,
            city: Oviedo,
            country: US,
            postcode: 32762,
            state: FL,
            [[Prototype]]: Object,
            email: Savealifepetres@aol.com,   
            phone: (407) 952-103,
        }",
        "[[Prototype]]": "Object",
        "description": "This pet will be available for adoption this Saturday and Sunday.\n*Pets cannot be adopted prior to Saturdays adoption event*...",
        "distance": null,
        "environment": "{children: true, dogs: true, cats: null}",
        "gender": "Male",
        "id": 62678984,
        "name": " Homer",
        "organization_animal_id": null,
        "organization_id": "FL668",
        "photos": [{…}],
        "primary_photo_cropped": "{small: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/62678984/1/?bust=1681521580&width=300', medium: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/62678984/1/?bust=1681521580&width=450', large: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/62678984/1/?bust=1681521580&width=600', full: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/62678984/1/?bust=1681521580'}",
"published_at": 
"2023-04-15T01:19:41+0000",
"size": "Large",
"species": "Dog",
"status": "adoptable",
"status_changed_at": "2023-04-15T01:19:42+0000",
"tags": [],
"type": "Dog",
"url": "https://www.petfinder.com/dog/homer-62678984/fl/oviedo/save-a-life-pet-rescue-fl668/?referrer_id=18d850a8-65b7-4e9e-a8cd-7b6ee83383fc",
"videos": [],
"_links": {
    "organization": "{href: '/v2/organizations/fl668'}",
    "self": "{href: '/v2/animals/62678984'}",
    "type": "{href: '/v2/types/dog'}",
    "[[Prototype]]": "Object",
},
"[[Prototype]]": "Object",
}

]
 */


function Pets() {
    const [animals, setAnimals] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setAnimals(data.vans))
    }, [])

    const animalElements = animals.map(van => (
        <div key={animal.id} className="van-tile">
            <Link to={`/pets/${animal.id}`}/>
            <img src={animal.primary_photo_cropped} />
            <div className="van-info">
                <h3>{animal.name}</h3>
                <p>${animal.age}<span>/day</span></p>
            </div>
            <i className={`van-type ${animal.breeds} selected`}>{animal.breeds}</i>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {animalElements}
            </div>
        </div>
    )
}

export default Pets;