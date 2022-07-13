console.log('%c HI', 'color: firebrick')


fetch("https://dog.ceo/api/breeds/image/random/4")
.then((response) => {return response.json()})
.then((data) => {
    // console.log('This is the data', data.message)
    const dogs = document.getElementById('dog-image-container')
    data.message.forEach(dogPicIterate)

    function dogPicIterate(dogPic){

        const dogImage = document.createElement("img");
        dogImage.setAttribute('src', dogPic);
        dogs.appendChild(dogImage);

    }
})

fetch('https://dog.ceo/api/breeds/list/all')
.then((response) => response.json())
.then((data) => {
    // console.log('This is the data:', data)
    const dogBreedUl = document.getElementById('dog-breeds')

    for (let dogs in data.message){
        dogBreedAppend(dogs)
    }

    function dogBreedAppend(dogBreed){

        const dogBreedLi = document.createElement('li')
        dogBreedLi.innerText = dogBreed
        dogBreedLi.setAttribute('class', 'breeds')
        dogBreedUl.appendChild(dogBreedLi)


    }

    const breeds = document.querySelectorAll('.breeds')
// console.log('This is breeds:', breeds)

for (let breed of breeds){
    breed.addEventListener('click', (e) => colorChange(e.target))

}


function colorChange(breed){
    console.log('This is breed:', breed)
breed.style.color = 'red'

}


})

