export interface RegisterForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string
  username: string
}

export interface LoginForm {
  email: string;
  password: string
}

export interface ImageForm {
  galleryName: string
  galleryImages: {
    images: string
    imageName: string
  }
}