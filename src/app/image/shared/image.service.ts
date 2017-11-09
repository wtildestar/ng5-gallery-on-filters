import { Injectable } from '@angular/core'

@Injectable()
export class ImageService {
    visibleImages = [];
    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [
    {"id": 1, "category": "laptop", "caption": "laptop, how u see", "url": "assets/img/laptop1.jpg"},
    {"id": 2, "category": "laptop", "caption": "laptop, how u see", "url": "assets/img/laptop2.jpg"},
    {"id": 3, "category": "laptop", "caption": "laptop, how u see", "url": "assets/img/laptop3.jpg"},
    {"id": 4, "category": "laptop", "caption": "laptop, how u see", "url": "assets/img/laptop4.jpg"},
    {"id": 5, "category": "laptop", "caption": "laptop, how u see", "url": "assets/img/laptop5.jpg"},
    {"id": 6, "category": "laptop", "caption": "laptop, how u see", "url": "assets/img/laptop6.jpg"},
    {"id": 7, "category": "food", "caption": "Delicious", "url": "assets/img/food1.jpg"},
    {"id": 8, "category": "food", "caption": "Delicious", "url": "assets/img/food2.jpg"},
    {"id": 9, "category": "food", "caption": "Delicious", "url": "assets/img/food3.jpg"},
    {"id": 10, "category": "street", "caption": "What a street", "url": "assets/img/street1.jpg"},
    {"id": 11, "category": "street", "caption": "What a street", "url": "assets/img/street2.jpg"},
    {"id": 12, "category": "street", "caption": "What a street", "url": "assets/img/street3.jpg"}
]